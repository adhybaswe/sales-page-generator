<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\SalesPage;
use App\Services\GeminiService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class SalesPageController extends Controller
{
    protected GeminiService $gemini;

    public function __construct(GeminiService $gemini)
    {
        $this->gemini = $gemini;
    }

    public function index()
    {
        $salesPages = Auth::user()->salesPages()->with('product')->latest()->get();
        return Inertia::render('SalesPages/Index', [
            'salesPages' => $salesPages,
            'status' => session('success'),
        ]);
    }

    public function generate(Product $product, Request $request)
    {
        if ($product->user_id !== Auth::id()) {
            abort(403);
        }

        $theme = $request->input('theme', 'default');
        $generatedContent = $this->gemini->generateSalesPage($product->toArray());

        if (!$generatedContent) {
            return back()->with('error', 'Failed to generate sales page.');
        }

        $salesPage = SalesPage::create([
            'product_id' => $product->id,
            'user_id' => Auth::id(),
            'headline' => $generatedContent['headline'],
            'content' => $generatedContent,
            'theme' => $theme,
        ]);

        return redirect()->route('sales-pages.show', $salesPage)
            ->with('success', 'Sales page generated successfully!');
    }

    public function show(SalesPage $salesPage)
    {
        if ($salesPage->user_id !== Auth::id()) {
            abort(403);
        }

        return Inertia::render('SalesPages/Show', [
            'salesPage' => $salesPage->load('product'),
        ]);
    }

    public function regenerate(SalesPage $salesPage, Request $request)
    {
        if ($salesPage->user_id !== Auth::id()) {
            abort(403);
        }

        $section = $request->input('section');
        
        if (empty($section) || !is_string($section)) {
            return back()->with('error', 'Invalid section specified.');
        }

        $product = $salesPage->product;
        $newContent = $this->gemini->regenerateSection($section, $product->toArray());

        if (!$newContent || !isset($newContent[$section])) {
            return back()->with('error', 'Failed to regenerate section.');
        }

        $currentContent = $salesPage->content;
        $currentContent[$section] = $newContent[$section];

        // If headline is updated, update the separate headline column too
        if ($section === 'headline') {
            $salesPage->headline = $newContent[$section];
        }

        $salesPage->content = $currentContent;
        $salesPage->save();

        return back()->with('success', 'Section regenerated successfully!');
    }

    public function export(SalesPage $salesPage)
    {
        if ($salesPage->user_id !== Auth::id()) {
            abort(403);
        }

        $html = view('sales-pages.export', compact('salesPage'))->render();
        $filename = \Illuminate\Support\Str::slug($salesPage->headline) . '.html';

        return response($html)
            ->header('Content-Type', 'text/html')
            ->header('Content-Disposition', 'attachment; filename="' . $filename . '"');
    }

    public function destroy(SalesPage $salesPage)
    {
        if ($salesPage->user_id !== Auth::id()) {
            abort(403);
        }

        $salesPage->delete();

        return redirect()->route('sales-pages.index')
            ->with('success', 'Sales page deleted successfully.');
    }
}