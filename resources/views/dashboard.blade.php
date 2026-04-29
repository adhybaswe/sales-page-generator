<x-app-layout>
    <div class="py-12 px-6 lg:px-12 bg-[#f8fafc] min-h-screen">
        <div class="max-w-[1400px] mx-auto">
            
            <!-- Hero Greeting Section -->
            <div class="relative mb-12 overflow-hidden">
                <div class="flex flex-col md:flex-row md:items-center justify-between relative z-10">
                    <div>
                        <h1 class="text-4xl font-[900] text-slate-900 tracking-tight mb-2 uppercase">
                            Dashboard <span class="text-violet-600">Overview</span>
                        </h1>
                        <p class="text-slate-500 font-medium">Selamat datang kembali, <span class="text-slate-900 font-bold">{{ Auth::user()->name }}</span>. Apa yang akan kita bangun hari ini?</p>
                    </div>
                    <div class="mt-6 md:mt-0">
                        <a href="{{ route('products.create') }}" class="group inline-flex items-center px-6 py-4 bg-violet-600 text-white rounded-2xl font-black shadow-xl shadow-violet-200 hover:bg-violet-700 transition-all duration-300 uppercase tracking-widest text-xs">
                            <span>Create New Product</span>
                            <svg class="w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                        </a>
                    </div>
                </div>
            </div>

            <!-- Stats Grid -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <!-- Stat Card 1 -->
                <div class="bg-white rounded-[2.5rem] p-10 shadow-sm border border-slate-100 relative overflow-hidden group hover:shadow-2xl hover:shadow-violet-100 transition-all duration-500">
                    <div class="absolute top-0 right-0 w-32 h-32 bg-violet-50 rounded-bl-[5rem] -mr-10 -mt-10 group-hover:bg-violet-100 transition-colors"></div>
                    <div class="relative z-10">
                        <div class="w-14 h-14 bg-violet-600 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-violet-200">
                            <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
                        </div>
                        <h3 class="text-slate-500 font-black text-[10px] uppercase tracking-[0.2em] mb-2">Total Products</h3>
                        <p class="text-5xl font-[900] text-slate-900 tracking-tighter">{{ $stats['products_count'] }}</p>
                    </div>
                </div>

                <!-- Stat Card 2 -->
                <div class="bg-white rounded-[2.5rem] p-10 shadow-sm border border-slate-100 relative overflow-hidden group hover:shadow-2xl hover:shadow-emerald-100 transition-all duration-500">
                    <div class="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-bl-[5rem] -mr-10 -mt-10 group-hover:bg-emerald-100 transition-colors"></div>
                    <div class="relative z-10">
                        <div class="w-14 h-14 bg-emerald-500 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-emerald-200">
                            <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </div>
                        <h3 class="text-slate-500 font-black text-[10px] uppercase tracking-[0.2em] mb-2">AI Generated</h3>
                        <p class="text-5xl font-[900] text-slate-900 tracking-tighter">{{ $stats['pages_count'] }}</p>
                    </div>
                </div>

                <!-- Stat Card 3 -->
                <div class="bg-slate-900 rounded-[2.5rem] p-10 shadow-2xl relative overflow-hidden group hover:-translate-y-1 transition-all duration-500">
                    <div class="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
                    <div class="relative z-10 text-white flex flex-col h-full justify-between">
                        <div>
                            <div class="bg-white/10 w-fit px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest mb-4 border border-white/10">Premium</div>
                            <h3 class="font-black text-2xl mb-2 tracking-tight uppercase leading-none">Unlimited Access</h3>
                            <p class="text-slate-400 text-sm font-medium leading-relaxed">Nikmati akses tanpa batas ke semua model AI tercanggih kami tanpa batasan kuota.</p>
                        </div>
                        <a href="#" class="mt-8 text-xs font-black uppercase tracking-widest text-violet-400 hover:text-white transition-colors">
                            Upgrade Now &rarr;
                        </a>
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <!-- Activity Section -->
                <div class="lg:col-span-2">
                    <div class="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden">
                        <div class="p-10 border-b border-slate-50 flex justify-between items-center">
                            <h3 class="text-xl font-black text-slate-900 tracking-tight uppercase">Recent Generations</h3>
                            <a href="{{ route('sales-pages.index') }}" class="text-xs font-black uppercase tracking-widest text-violet-600 hover:text-violet-700 transition-colors">View All</a>
                        </div>
                        <div class="p-6">
                            @forelse($stats['recent_pages'] as $page)
                                <div class="flex items-center p-6 hover:bg-slate-50 rounded-[2rem] transition-all duration-300 group">
                                    <div class="w-14 h-14 rounded-full bg-slate-100 flex items-center justify-center shrink-0 mr-6 group-hover:bg-violet-600 group-hover:text-white transition-all shadow-sm">
                                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                                    </div>
                                    <div class="flex-grow min-w-0">
                                        <h4 class="font-black text-slate-900 text-lg truncate mb-1 uppercase tracking-tight group-hover:text-violet-600 transition-colors">{{ $page->headline }}</h4>
                                        <div class="flex items-center text-xs text-slate-400 font-bold uppercase tracking-widest">
                                            <span class="truncate">{{ $page->product->name }}</span>
                                            <span class="mx-3 text-slate-200">•</span>
                                            <span class="shrink-0">{{ $page->created_at->diffForHumans() }}</span>
                                        </div>
                                    </div>
                                    <a href="{{ route('sales-pages.show', $page) }}" class="ml-6 p-4 bg-white border border-slate-100 rounded-2xl text-slate-300 hover:text-violet-600 hover:border-violet-100 hover:shadow-xl transition-all opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0">
                                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                                    </a>
                                </div>
                            @empty
                                <div class="py-20 text-center">
                                    <p class="text-slate-400 font-black uppercase tracking-widest text-xs">No active pages found</p>
                                </div>
                            @endforelse
                        </div>
                    </div>
                </div>

                <!-- Tips Section -->
                <div class="space-y-8">
                    <div class="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm">
                        <h3 class="font-black text-slate-900 mb-8 uppercase tracking-widest text-xs flex items-center">
                            <span class="w-2 h-6 bg-violet-600 rounded-full mr-4"></span>
                            Quick Tips
                        </h3>
                        <div class="space-y-8">
                            <div class="flex group">
                                <div class="w-10 h-10 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center shrink-0 mr-5 font-black text-xs">01</div>
                                <p class="text-slate-500 text-sm font-bold leading-relaxed">Gunakan **USP** yang unik agar AI lebih kreatif.</p>
                            </div>
                            <div class="flex group">
                                <div class="w-10 h-10 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center shrink-0 mr-5 font-black text-xs">02</div>
                                <p class="text-slate-500 text-sm font-bold leading-relaxed">Tema **Future** cocok untuk produk teknologi.</p>
                            </div>
                        </div>
                    </div>

                    <div class="bg-gradient-to-br from-violet-600 to-indigo-800 rounded-[2.5rem] p-10 text-white relative overflow-hidden shadow-2xl shadow-violet-200">
                        <h4 class="font-black text-xl mb-3 uppercase tracking-tight">Need Help?</h4>
                        <p class="text-violet-100 text-sm font-medium mb-8 leading-relaxed opacity-80">Tim kami siap membantu optimasi sales page Anda.</p>
                        <a href="#" class="px-6 py-3 bg-white text-violet-600 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg hover:scale-105 transition-all inline-block">Support Center</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</x-app-layout>