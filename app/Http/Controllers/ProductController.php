<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function index()
    {
        $products = Auth::user()->products()->latest()->get();
        return Inertia::render('Products/Index', [
            'products' => $products,
            'status' => session('success'),
        ]);
    }

    public function create()
    {
        return Inertia::render('Products/Create');
    }

    public function edit(Product $product)
    {
        if ($product->user_id !== Auth::id()) {
            abort(403);
        }

        // Convert features array back to string for the textarea
        $product->features = implode("\n", $product->features);

        return Inertia::render('Products/Edit', [
            'product' => $product,
        ]);
    }

    public function update(Request $request, Product $product)
    {
        if ($product->user_id !== Auth::id()) {
            abort(403);
        }

        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'features' => 'required|string',
            'target_audience' => 'required|string|max:255',
            'price' => 'required|numeric|min:0',
            'usp' => 'required|string',
        ]);

        $features = array_map('trim', preg_split('/[,\n]+/', $validated['features']));
        $validated['features'] = array_filter($features);

        $product->update($validated);

        return redirect()->route('products.index')
            ->with('success', 'Product updated successfully.');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'features' => 'required|string',
            'target_audience' => 'required|string|max:255',
            'price' => 'required|numeric|min:0',
            'usp' => 'required|string',
        ]);

        $features = array_map('trim', preg_split('/[,\n]+/', $validated['features']));
        $validated['features'] = array_filter($features);
        $validated['user_id'] = Auth::id();

        Product::create($validated);

        return redirect()->route('products.index')
            ->with('success', 'Product created successfully.');
    }

    public function destroy(Product $product)
    {
        if ($product->user_id !== Auth::id()) {
            abort(403);
        }

        $product->delete();

        return redirect()->route('products.index')
            ->with('success', 'Product deleted successfully.');
    }
}
