<!-- Sidebar -->
<aside class="fixed inset-y-0 left-0 w-72 bg-slate-900 text-slate-400 z-50 hidden lg:block transition-all duration-300">
    <div class="flex flex-col h-full">
        <!-- Logo -->
        <div class="h-20 flex items-center px-8">
            <a href="{{ route('dashboard') }}" class="flex items-center space-x-3 group">
                <div class="w-10 h-10 bg-violet-600 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform shadow-lg shadow-violet-500/20">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                </div>
                <span class="text-xl font-black tracking-tighter text-white uppercase">SalesGen<span class="text-violet-500">AI</span></span>
            </a>
        </div>

        <!-- Navigation Links -->
        <nav class="flex-1 px-4 py-4 space-y-2 overflow-y-auto">
            <div class="px-4 pb-2 text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Menu Utama</div>
            
            <a href="{{ route('dashboard') }}" class="flex items-center px-4 py-3 rounded-2xl transition-all group {{ request()->routeIs('dashboard') ? 'bg-violet-600 text-white shadow-lg shadow-violet-600/20' : 'hover:bg-slate-800 hover:text-slate-200' }}">
                <svg class="w-5 h-5 mr-3 {{ request()->routeIs('dashboard') ? 'text-white' : 'text-slate-500 group-hover:text-violet-400' }}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                <span class="text-sm font-bold">Dashboard</span>
            </a>

            <a href="{{ route('products.index') }}" class="flex items-center px-4 py-3 rounded-2xl transition-all group {{ request()->routeIs('products.*') ? 'bg-violet-600 text-white shadow-lg shadow-violet-600/20' : 'hover:bg-slate-800 hover:text-slate-200' }}">
                <svg class="w-5 h-5 mr-3 {{ request()->routeIs('products.*') ? 'text-white' : 'text-slate-500 group-hover:text-violet-400' }}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
                <span class="text-sm font-bold">My Products</span>
            </a>

            <a href="{{ route('sales-pages.index') }}" class="flex items-center px-4 py-3 rounded-2xl transition-all group {{ request()->routeIs('sales-pages.*') ? 'bg-violet-600 text-white shadow-lg shadow-violet-600/20' : 'hover:bg-slate-800 hover:text-slate-200' }}">
                <svg class="w-5 h-5 mr-3 {{ request()->routeIs('sales-pages.*') ? 'text-white' : 'text-slate-500 group-hover:text-violet-400' }}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                <span class="text-sm font-bold">Saved Pages</span>
            </a>

            <div class="px-4 pt-8 pb-2 text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Akun</div>
            
            <a href="{{ route('profile.edit') }}" class="flex items-center px-4 py-3 rounded-2xl transition-all group {{ request()->routeIs('profile.edit') ? 'bg-violet-600 text-white' : 'hover:bg-slate-800 hover:text-slate-200' }}">
                <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                <span class="text-sm font-bold">Settings</span>
            </a>
        </nav>

        <!-- User Footer -->
        <div class="p-4 border-t border-slate-800">
            <form method="POST" action="{{ route('logout') }}">
                @csrf
                <button type="submit" class="w-full flex items-center px-4 py-3 rounded-2xl text-slate-500 hover:bg-red-500/10 hover:text-red-400 transition-all font-bold text-sm">
                    <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                    Logout
                </button>
            </form>
        </div>
    </div>
</aside>

<!-- Mobile Top Nav -->
<div class="lg:hidden bg-slate-900 p-4 flex justify-between items-center text-white">
    <span class="font-black tracking-tighter uppercase">SalesGen<span class="text-violet-500">AI</span></span>
    <button @click="open = !open" class="p-2 bg-slate-800 rounded-lg">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
    </button>
</div>