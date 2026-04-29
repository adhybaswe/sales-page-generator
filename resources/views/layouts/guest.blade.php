<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>{{ config('app.name', 'Laravel') }}</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">

        <!-- Scripts -->
        @vite(['resources/css/app.css', 'resources/js/app.js'])
        <style>
            body { font-family: 'Inter', sans-serif; }
            .mesh-gradient {
                background-color: #4c1d95;
                background-image: 
                    radial-gradient(at 0% 0%, hsla(253,16%,7%,1) 0, transparent 50%), 
                    radial-gradient(at 50% 0%, hsla(225,39%,30%,1) 0, transparent 50%), 
                    radial-gradient(at 100% 0%, hsla(339,49%,30%,1) 0, transparent 50%), 
                    radial-gradient(at 0% 100%, hsla(339,49%,30%,1) 0, transparent 50%), 
                    radial-gradient(at 50% 100%, hsla(225,39%,30%,1) 0, transparent 50%), 
                    radial-gradient(at 100% 100%, hsla(253,16%,7%,1) 0, transparent 50%);
            }
        </style>
    </head>
    <body class="antialiased bg-white">
        <div class="flex min-h-screen">
            <!-- Left Side: Form -->
            <div class="flex flex-col justify-center flex-1 px-8 py-12 sm:px-12 lg:flex-none lg:px-24 xl:px-32 bg-white z-20">
                <div class="w-full max-w-sm mx-auto lg:w-96">
                    <div class="mb-10">
                        <a href="/" class="inline-flex items-center space-x-2 group">
                            <div class="w-10 h-10 bg-violet-600 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform">
                                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                            </div>
                            <span class="text-2xl font-black tracking-tighter text-slate-900 uppercase">SalesGen<span class="text-violet-600">AI</span></span>
                        </a>
                    </div>

                    <div class="mt-6">
                        {{ $slot }}
                    </div>
                </div>
            </div>

            <!-- Right Side: Enhanced Visual Panel -->
            <div class="relative hidden w-0 flex-1 lg:block overflow-hidden mesh-gradient">
                <!-- Decorative Elements -->
                <div class="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
                
                <!-- Floating UI Mockup -->
                <div class="absolute inset-0 flex items-center justify-center p-20">
                    <div class="relative w-full max-w-2xl">
                        <!-- Main Card -->
                        <div class="bg-white/10 backdrop-blur-3xl border border-white/20 rounded-[3rem] p-10 shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-700">
                            <div class="flex items-center space-x-4 mb-8">
                                <div class="flex space-x-2">
                                    <div class="w-3 h-3 bg-red-400/50 rounded-full"></div>
                                    <div class="w-3 h-3 bg-amber-400/50 rounded-full"></div>
                                    <div class="w-3 h-3 bg-emerald-400/50 rounded-full"></div>
                                </div>
                                <div class="h-4 w-40 bg-white/10 rounded-full"></div>
                            </div>
                            
                            <div class="space-y-6">
                                <div class="h-12 w-full bg-gradient-to-r from-violet-500/40 to-transparent rounded-2xl"></div>
                                <div class="grid grid-cols-3 gap-4">
                                    <div class="h-32 bg-white/5 rounded-2xl border border-white/10"></div>
                                    <div class="h-32 bg-white/5 rounded-2xl border border-white/10"></div>
                                    <div class="h-32 bg-white/5 rounded-2xl border border-white/10"></div>
                                </div>
                                <div class="h-20 w-3/4 bg-white/5 rounded-2xl"></div>
                            </div>

                            <!-- Floating Elements -->
                            <div class="absolute -top-12 -right-12 bg-white p-6 rounded-[2rem] shadow-2xl transform rotate-6 animate-bounce transition-all duration-1000" style="animation-duration: 4s;">
                                <div class="flex items-center space-x-3">
                                    <div class="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
                                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                                    </div>
                                    <div>
                                        <div class="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Conversion</div>
                                        <div class="text-xl font-black text-slate-900 leading-none">+89%</div>
                                    </div>
                                </div>
                            </div>

                            <div class="absolute -bottom-10 -left-10 bg-violet-600 p-6 rounded-[2rem] shadow-2xl transform -rotate-12 hover:rotate-0 transition-all">
                                <svg class="w-8 h-8 text-white animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                            </div>
                        </div>

                        <!-- Content Below -->
                        <div class="mt-20 text-center text-white">
                            <h2 class="text-4xl font-black tracking-tighter uppercase mb-4">The Future of Copywriting</h2>
                            <p class="text-violet-200/60 font-medium text-lg italic">"AI yang mengerti cara berjualan, bukan sekadar berkata-kata."</p>
                        </div>
                    </div>
                </div>

                <!-- Background Glows -->
                <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-500/20 rounded-full blur-[120px]"></div>
                <div class="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px]"></div>
            </div>
        </div>
    </body>
</html>