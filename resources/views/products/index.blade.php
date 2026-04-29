<x-app-layout>
    <div x-data="{ loading: false, loadingMessage: 'AI sedang meracik copywriting...' }">
        <!-- Loading Overlay -->
        <div x-show="loading" 
            x-transition:enter="transition ease-out duration-300"
            x-transition:enter-start="opacity-0"
            x-transition:enter-end="opacity-100"
            class="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/60 backdrop-blur-md text-white p-6">
            <div class="text-center">
                <!-- Modern Spinner -->
                <div class="relative w-24 h-24 mx-auto mb-8">
                    <div class="absolute inset-0 border-4 border-violet-500/20 rounded-full"></div>
                    <div class="absolute inset-0 border-4 border-t-violet-500 rounded-full animate-spin"></div>
                </div>
                <h3 class="text-2xl font-black mb-2 tracking-tight" x-text="loadingMessage"></h3>
                <p class="text-slate-300 animate-pulse">Mohon tunggu sebentar, ini biasanya memakan waktu 5-10 detik...</p>
                
                <!-- Progress Progress Bar (Fake) -->
                <div class="mt-8 w-64 h-1.5 bg-slate-800 rounded-full mx-auto overflow-hidden">
                    <div class="h-full bg-violet-500 rounded-full animate-[progress_10s_ease-in-out_infinite]"></div>
                </div>
            </div>
        </div>

        <x-slot name="header">
            <div class="flex justify-between items-center">
                <h2 class="font-bold text-2xl text-slate-800 leading-tight">
                    {{ __('My Products') }}
                </h2>
                <a href="{{ route('products.create') }}" class="inline-flex items-center px-5 py-2.5 bg-violet-600 border border-transparent rounded-xl font-semibold text-sm text-white hover:bg-violet-700 focus:outline-none focus:ring-4 focus:ring-violet-100 transition shadow-md shadow-violet-100">
                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
                    Add Product
                </a>
            </div>
        </x-slot>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                @if(session('success'))
                    <div class="mb-6 bg-emerald-50 border border-emerald-100 text-emerald-700 px-4 py-3 rounded-xl flex items-center shadow-sm">
                        <svg class="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        {{ session('success') }}
                    </div>
                @endif

                <div class="bg-white/70 backdrop-blur-sm shadow-xl shadow-slate-200/50 sm:rounded-2xl border border-slate-100 overflow-hidden">
                    <div class="p-0 text-slate-900">
                        @if($products->isEmpty())
                            <div class="text-center py-20">
                                <div class="bg-slate-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg class="w-10 h-10 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
                                </div>
                                <h3 class="text-lg font-bold text-slate-800">No products yet</h3>
                                <p class="text-slate-500 max-w-xs mx-auto mt-1">Start by adding your first product to generate amazing sales pages.</p>
                                <a href="{{ route('products.create') }}" class="mt-6 inline-block text-violet-600 font-bold hover:underline">Add your first product &rarr;</a>
                            </div>
                        @else
                            <div class="overflow-x-auto">
                                <table class="min-w-full divide-y divide-slate-100">
                                    <thead class="bg-slate-50/50">
                                        <tr>
                                            <th class="px-8 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-widest">Product Info</th>
                                            <th class="px-8 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-widest">Target Audience</th>
                                            <th class="px-8 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-widest">Price</th>
                                            <th class="px-8 py-4 text-right text-xs font-bold text-slate-500 uppercase tracking-widest">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody class="bg-transparent divide-y divide-slate-100">
                                        @foreach($products as $product)
                                            <tr class="hover:bg-slate-50/50 transition-colors">
                                                <td class="px-8 py-6">
                                                    <div class="font-bold text-slate-800">{{ $product->name }}</div>
                                                    <div class="text-xs text-slate-400 mt-0.5 truncate max-w-xs">{{ $product->description }}</div>
                                                </td>
                                                <td class="px-8 py-6">
                                                    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-600">
                                                        {{ $product->target_audience }}
                                                    </span>
                                                </td>
                                                <td class="px-8 py-6 font-bold text-slate-700">
                                                    Rp{{ number_format($product->price, 0, ',', '.') }}
                                                </td>
                                                <td class="px-8 py-6 text-right">
                                                    <div class="flex items-center justify-end space-x-3">
                                                        <form action="{{ route('sales-pages.generate', $product) }}" method="POST" 
                                                            @submit="loading = true; loadingMessage = 'Menghubungi Gemini AI...'"
                                                            class="flex items-center">
                                                            @csrf
                                                            <div class="flex p-1 bg-slate-100 rounded-xl hover:bg-slate-200 transition-colors">
                                                                <select name="theme" class="text-[10px] font-bold uppercase tracking-wider bg-transparent border-none focus:ring-0 py-1 pl-3 pr-8 text-slate-500 cursor-pointer">
                                                                    <option value="default">Indigo</option>
                                                                    <option value="professional">Pro</option>
                                                                    <option value="luxury">Luxury</option>
                                                                    <option value="playful">Playful</option>
                                                                    <option value="future">Future</option>
                                                                </select>
                                                                <button type="submit" :disabled="loading" class="px-4 py-1.5 bg-white text-violet-600 text-[10px] font-black uppercase tracking-widest rounded-lg shadow-sm hover:text-violet-700 transition-all active:scale-95 disabled:opacity-50">
                                                                    Generate
                                                                </button>
                                                            </div>
                                                        </form>
                                                        <form action="{{ route('products.destroy', $product) }}" method="POST" class="inline">
                                                            @csrf @method('DELETE')
                                                            <button type="submit" class="w-9 h-9 flex items-center justify-center rounded-xl bg-slate-50 text-slate-300 hover:text-red-500 hover:bg-red-50 transition-all" onclick="return confirm('Are you sure?')">
                                                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                                            </button>
                                                        </form>
                                                    </div>
                                                </td>
                                            </tr>
                                        @endforeach
                                    </tbody>
                                </table>
                            </div>
                        @endif
                    </div>
                </div>
            </div>
        </div>
    </div>

    <style>
        @keyframes progress {
            0% { width: 0%; }
            50% { width: 70%; }
            100% { width: 95%; }
        }
    </style>
</x-app-layout>