<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class GeminiService
{
    protected string $apiKey;
    protected string $baseUrl = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent';

    public function __construct()
    {
        $this->apiKey = config('services.gemini.key');
    }

    public function generateSalesPage(array $productData)
    {
        $prompt = $this->buildPrompt($productData);
        return $this->callGemini($prompt);
    }

    public function regenerateSection(string $sectionName, array $productData)
    {
        $prompt = $this->buildRegeneratePrompt($sectionName, $productData);
        return $this->callGemini($prompt);
    }

    protected function callGemini(string $prompt)
    {
        try {
            $response = Http::post("{$this->baseUrl}?key={$this->apiKey}", [
                'contents' => [
                    [
                        'parts' => [
                            ['text' => $prompt]
                        ]
                    ]
                ],
                'generationConfig' => [
                    'response_mime_type' => 'application/json',
                ]
            ]);

            if ($response->failed()) {
                Log::error('Gemini API Error: ' . $response->body());
                return null;
            }

            $result = $response->json();
            $text = $result['candidates'][0]['content']['parts'][0]['text'] ?? null;

            return $text ? json_decode($text, true) : null;

        } catch (\Exception $e) {
            Log::error('Gemini Service Exception: ' . $e->getMessage());
            return null;
        }
    }

    protected function buildRegeneratePrompt(string $section, array $data): string
    {
        $features = is_array($data['features']) ? implode(', ', $data['features']) : $data['features'];

        return "You are an expert copywriter. I have a sales page for a product named '{$data['name']}'.
        Product Description: {$data['description']}
        Features: {$features}
        USP: {$data['usp']}

        Please REGENERATE ONLY the '{$section}' section of the sales page.
        Your response MUST be in JSON format with exactly one key: '{$section}'.

        Tone: Persuasive and professional. Language: English.";
    }

    protected function buildPrompt(array $data): string
    {
        $features = is_array($data['features']) ? implode(', ', $data['features']) : $data['features'];

        return "You are an expert copywriter. Create a high-converting sales page for the following product:
        - Name: {$data['name']}
        - Description: {$data['description']}
        - Features: {$features}
        - Target Audience: {$data['target_audience']}
        - Price: {$data['price']}
        - Unique Selling Points: {$data['usp']}

        Your response MUST be in JSON format with the following structure:
        {
            \"headline\": \"Hooking headline\",
            \"sub_headline\": \"Compelling sub-headline\",
            \"problem_statement\": \"Describe the pain point of the audience\",
            \"solution_statement\": \"How this product solves the problem\",
            \"benefits\": [\"Benefit 1\", \"Benefit 2\", \"Benefit 3\"],
            \"detailed_features\": [
                {\"title\": \"Feature Title\", \"description\": \"Detailed explanation\"}
            ],
            \"social_proof_placeholder\": \"Type of testimonial needed here\",
            \"cta_text\": \"Action-oriented button text\",
            \"faq\": [
                {\"question\": \"...\", \"answer\": \"...\"}
            ]
        }

        Tone: Persuasive, professional, and exciting. Language: English.";
    }
}