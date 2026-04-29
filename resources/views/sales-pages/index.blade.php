<x-app-layout>
    <div class="py-12 bg-[#fcfcfd] min-h-screen">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            
            <div class="mb-10 flex items-center justify-between">
                <div>
                    <h2 class="font-black text-3xl text-slate-900 leading-tight">
                        {{ __('Saved Sales Pages') }}
                    </h2>
                    <p class="text-slate-500 mt-1">Kelola dan unduh halaman penjualan yang telah dibuat AI.</p>
                </div>
            </div>

            @if(session('success'))
                <div class="mb-8 bg-emerald-50 border border-emerald-100 text-emerald-700 px-6 py-4 rounded-2xl flex items-center shadow-sm">
                    <svg class="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                    <span class="font-bold">{{ session('success') }}</span>
                </div>
            @endif

            @if($salesPages->isEmpty())
                <div class="bg-white rounded-[2.5rem] border border-slate-100 p-20 text-center shadow-sm">
                    <div class="bg-slate-50 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg class="w-12 h-12 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                    </div>
                    <h3 class="text-xl font-black text-slate-800">Belum ada halaman penjualan</h3>
                    <p class="text-slate-500 mt-2 mb-8">Pilih produkmu dan biarkan AI bekerja untukmu.</p>
                    <a href="{{ route('products.index') }}" class="px-8 py-4 bg-violet-600 text-white rounded-2xl font-bold shadow-lg shadow-violet-100 hover:bg-violet-700 transition-all inline-block">
                        Go to Products &rarr;
                    </a>
                </div>
            @else
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    @foreach($salesPages as $page)
                        <div class="bg-white rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 p-8 flex flex-col group relative overflow-hidden">
                            <!-- Theme Indicator Overlay -->
                            <div class="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-[5rem] -mr-10 -mt-10 group-hover:bg-violet-50 transition-colors"></div>
                            
                            <div class="relative z-10 flex flex-col h-full">
                                <div class="flex justify-between items-start mb-6">
                                    <div class="px-4 py-1.5 bg-violet-100 text-violet-600 rounded-full text-[10px] font-black uppercase tracking-widest">
                                        {{ $page->theme }}
                                    </div>
                                    <form action="{{ route('sales-pages.destroy', $page) }}" method="POST" class="inline">
                                        @csrf @method('DELETE')
                                        <button type="submit" class="text-slate-300 hover:text-red-500 transition-colors" onclick="return confirm('Hapus halaman ini?')">
                                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                        </button>
                                    </form>
                                </div>

                                <h3 class="font-black text-xl text-slate-900 mb-2 leading-tight group-hover:text-violet-600 transition-colors line-clamp-2">{{ $page->headline }}</h3>
                                <p class="text-sm text-slate-400 mb-8 flex items-center">
                                    <span class="w-2 h-2 bg-violet-400 rounded-full mr-2"></span>
                                    {{ $page->product->name }}
                                </p>

                                <div class="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
                                    <span class="text-xs font-bold text-slate-300 uppercase tracking-widest">{{ $page->created_at->format('d M Y') }}</span>
                                    <div class="flex space-x-3">
                                        <a href="{{ route('sales-pages.export', $page) }}" class="w-10 h-10 flex items-center justify-center bg-slate-50 text-slate-400 hover:bg-emerald-50 hover:text-emerald-600 rounded-xl transition-all" title="Export HTML">
                                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                                        </a>
                                        <a href="{{ route('sales-pages.show', $page) }}" class="px-6 py-2.5 bg-slate-900 text-white text-xs font-black rounded-xl hover:bg-violet-600 transition-all shadow-md shadow-slate-200">
                                            PREVIEW
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    @endforeach
                </div>
            @endif
        </div>
    </div>
</x-app-layout>