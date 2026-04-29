<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

use App\Http\Controllers\ProductController;
use App\Http\Controllers\SalesPageController;

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard', [
        'stats' => [
            'products_count' => auth()->user()->products()->count(),
            'pages_count' => auth()->user()->salesPages()->count(),
            'recent_pages' => auth()->user()->salesPages()->with('product')->latest()->take(5)->get(),
        ]
    ]);
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::resource('products', ProductController::class);
    Route::get('/sales-pages', [SalesPageController::class, 'index'])->name('sales-pages.index');
    Route::post('/products/{product}/generate', [SalesPageController::class, 'generate'])->name('sales-pages.generate');
    Route::get('/sales-pages/{sales_page}', [SalesPageController::class, 'show'])->name('sales-pages.show');
    Route::post('/sales-pages/{sales_page}/regenerate', [SalesPageController::class, 'regenerate'])->name('sales-pages.regenerate');
    Route::get('/sales-pages/{sales_page}/export', [SalesPageController::class, 'export'])->name('sales-pages.export');
    Route::delete('/sales-pages/{sales_page}', [SalesPageController::class, 'destroy'])->name('sales-pages.destroy');
});

require __DIR__.'/auth.php';
