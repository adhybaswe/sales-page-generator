<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>{{ $salesPage->headline }} - Sales Page</title>
        @vite(['resources/css/app.css', 'resources/js/app.js'])
    </head>
    @php
        // Mapping class secara literal agar terdeteksi oleh Tailwind Scanner
        $themes = [
            'default' => [
                'primary' => 'bg-indigo-600',
                'primary_text' => 'text-indigo-600',
                'primary_hover' => 'hover:bg-indigo-700',
                'bg_hero' => 'bg-gradient-to-br from-indigo-50 via-white to-blue-50',
                'accent_bg' => 'bg-indigo-100',
                'accent_text' => 'text-indigo-600',
                'bg_body' => 'bg-gray-50',
                'bg_card' => 'bg-white',
                'text_main' => 'text-gray-900',
                'text_muted' => 'text-gray-600',
                'border' => 'border-gray-100',
                'shadow' => 'shadow-indigo-200'
            ],
            'professional' => [
                'primary' => 'bg-emerald-600',
                'primary_text' => 'text-emerald-600',
                'primary_hover' => 'hover:bg-emerald-700',
                'bg_hero' => 'bg-gradient-to-br from-emerald-50 via-white to-slate-50',
                'accent_bg' => 'bg-emerald-100',
                'accent_text' => 'text-emerald-600',
                'bg_body' => 'bg-slate-50',
                'bg_card' => 'bg-white',
                'text_main' => 'text-slate-900',
                'text_muted' => 'text-slate-600',
                'border' => 'border-slate-100',
                'shadow' => 'shadow-emerald-200'
            ],
            'luxury' => [
                'primary' => 'bg-amber-500',
                'primary_text' => 'text-amber-500',
                'primary_hover' => 'hover:bg-amber-600',
                'bg_hero' => 'bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900',
                'accent_bg' => 'bg-slate-800',
                'accent_text' => 'text-amber-500',
                'bg_body' => 'bg-slate-950',
                'bg_card' => 'bg-slate-900',
                'text_main' => 'text-slate-100',
                'text_muted' => 'text-slate-400',
                'border' => 'border-slate-800',
                'shadow' => 'shadow-black'
            ],
            'playful' => [
                'primary' => 'bg-pink-500',
                'primary_text' => 'text-pink-500',
                'primary_hover' => 'hover:bg-pink-600',
                'bg_hero' => 'bg-gradient-to-br from-yellow-50 via-white to-pink-50',
                'accent_bg' => 'bg-orange-100',
                'accent_text' => 'text-pink-500',
                'bg_body' => 'bg-orange-50/30',
                'bg_card' => 'bg-white',
                'text_main' => 'text-gray-900',
                'text_muted' => 'text-gray-600',
                'border' => 'border-orange-100',
                'shadow' => 'shadow-pink-200'
            ],
            'future' => [
                'primary' => 'bg-cyan-500',
                'primary_text' => 'text-cyan-400',
                'primary_hover' => 'hover:bg-cyan-600',
                'bg_hero' => 'bg-[#0a0a0c]',
                'accent_bg' => 'bg-cyan-500/10',
                'accent_text' => 'text-cyan-400',
                'bg_body' => 'bg-[#0a0a0c]',
                'bg_card' => 'bg-[#111114]',
                'text_main' => 'text-white',
                'text_muted' => 'text-slate-400',
                'border' => 'border-slate-800',
                'shadow' => 'shadow-cyan-900/20'
            ]
        ];
        $t = $themes[$salesPage->theme] ?? $themes['default'];
        $isFuture = $salesPage->theme === 'future';
    @endphp
    <body class="antialiased font-sans {{ $t['bg_body'] }} {{ $t['text_main'] }}">
        <!-- Admin Bar / Export Button -->
        <div class="fixed bottom-6 right-6 z-[60] flex space-x-2">
            <a href="{{ route('sales-pages.index') }}" class="bg-gray-800 text-white px-4 py-2 rounded-full shadow-lg hover:bg-gray-700 transition flex items-center text-sm">
                Dashboard
            </a>
            <a href="{{ route('sales-pages.export', $salesPage) }}" class="bg-green-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-green-700 transition flex items-center text-sm">
                Export HTML
            </a>
        </div>

        <!-- Navigation -->
        <nav class="{{ $t['bg_card'] }} border-b {{ $t['border'] }} py-4 px-6 fixed w-full z-50 top-0 shadow-sm {{ $isFuture ? 'bg-opacity-80 backdrop-blur-xl' : '' }}">
            <div class="max-w-7xl mx-auto flex justify-between items-center">
                <div class="font-bold text-xl {{ $t['primary_text'] }} uppercase tracking-tighter">{{ $salesPage->product->name }}</div>
                <div class="hidden md:flex space-x-6 text-sm font-bold uppercase tracking-widest opacity-70">
                    <a href="#benefits" class="hover:opacity-100 transition-opacity">Manfaat</a>
                    <a href="#features" class="hover:opacity-100 transition-opacity">Fitur</a>
                    <a href="#faq" class="hover:opacity-100 transition-opacity">FAQ</a>
                </div>
                <a href="#pricing" class="{{ $t['primary'] }} text-{{ $isFuture ? 'black' : 'white' }} px-6 py-2 rounded-full font-black {{ $t['primary_hover'] }} transition-all text-[10px] uppercase tracking-widest">Mulai Sekarang</a>
            </div>
        </nav>

        <!-- Hero Section -->
        <section class="pt-48 pb-32 px-6 {{ $t['bg_hero'] }} relative overflow-hidden">
            @if($isFuture)
                <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent"></div>
                <div class="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
            @endif
            
            <div class="max-w-5xl mx-auto text-center relative z-10">
                <h1 class="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9] {{ $isFuture ? 'bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-500' : '' }}">
                    {{ $salesPage->content['headline'] }}
                </h1>
                <p class="text-xl md:text-2xl {{ $t['text_muted'] }} mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
                    {{ $salesPage->content['sub_headline'] }}
                </p>
                <div class="flex flex-col sm:flex-row justify-center gap-6">
                    <a href="#pricing" class="{{ $t['primary'] }} text-{{ $isFuture ? 'black' : 'white' }} px-10 py-5 rounded-2xl text-lg font-black {{ $t['primary_hover'] }} shadow-2xl {{ $t['shadow'] }} transition-all hover:scale-105 active:scale-95 uppercase tracking-widest">
                        {{ $salesPage->content['cta_text'] }}
                    </a>
                    <a href="#features" class="{{ $t['bg_card'] }} {{ $t['text_main'] }} border {{ $t['border'] }} px-10 py-5 rounded-2xl text-lg font-bold hover:opacity-80 transition-all uppercase tracking-widest text-sm flex items-center justify-center">
                        Pelajari Fitur
                    </a>
                </div>
            </div>
        </section>

        <!-- Problem & Solution -->
        <section class="py-32 px-6 relative">
            <div class="max-w-5xl mx-auto">
                <div class="grid md:grid-cols-2 gap-12 items-center">
                    <div class="{{ $salesPage->theme === 'luxury' || $isFuture ? 'bg-red-950/10 border-red-900/30 text-red-200' : 'bg-red-50 border-red-100 text-red-700' }} p-12 rounded-[2.5rem] border relative overflow-hidden group">
                        <div class="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-150 transition-transform">
                            <svg class="w-20 h-20" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path></svg>
                        </div>
                        <h2 class="text-2xl font-black mb-6 uppercase tracking-wider {{ $isFuture ? 'text-red-400' : '' }}">The Problem</h2>
                        <p class="leading-relaxed text-lg font-medium opacity-80">{{ $salesPage->content['problem_statement'] }}</p>
                    </div>
                    <div class="{{ $salesPage->theme === 'luxury' || $isFuture ? 'bg-cyan-950/10 border-cyan-900/30 text-cyan-100' : 'bg-green-50 border-green-100 text-green-700' }} p-12 rounded-[2.5rem] border relative overflow-hidden group">
                        <div class="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-150 transition-transform">
                            <svg class="w-20 h-20" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        </div>
                        <h2 class="text-2xl font-black mb-6 uppercase tracking-wider {{ $isFuture ? 'text-cyan-400' : '' }}">The Solution</h2>
                        <p class="leading-relaxed text-lg font-medium opacity-80">{{ $salesPage->content['solution_statement'] }}</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Benefits -->
        <section id="benefits" class="py-32 px-6 bg-opacity-50 {{ $isFuture ? 'bg-[#0d0d10]' : '' }}">
            <div class="max-w-6xl mx-auto">
                <h2 class="text-4xl md:text-5xl font-black text-center mb-20 uppercase tracking-tighter">Why Choose Us?</h2>
                <div class="grid md:grid-cols-3 gap-10">
                    @foreach($salesPage->content['benefits'] as $benefit)
                    <div class="{{ $t['bg_card'] }} p-10 rounded-[2rem] shadow-sm border {{ $t['border'] }} hover:border-{{ str_replace('text-', '', $t['accent_text']) }} transition-all group">
                        <div class="w-14 h-14 {{ $t['accent_bg'] }} {{ $t['accent_text'] }} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                        </div>
                        <p class="text-xl font-bold leading-snug group-hover:{{ $t['accent_text'] }} transition-colors">{{ $benefit }}</p>
                    </div>
                    @endforeach
                </div>
            </div>
        </section>

        <!-- Features -->
        <section id="features" class="py-32 px-6">
            <div class="max-w-6xl mx-auto">
                <h2 class="text-4xl md:text-5xl font-black text-center mb-24 uppercase tracking-tighter">Core Features</h2>
                <div class="space-y-32">
                    @foreach($salesPage->content['detailed_features'] as $index => $feature)
                    <div class="flex flex-col {{ $index % 2 == 0 ? 'md:flex-row' : 'md:flex-row-reverse' }} items-center gap-20">
                        <div class="flex-1">
                            <div class="text-[10px] font-black {{ $t['accent_text'] }} uppercase tracking-[0.3em] mb-4">Feature 0{{ $index + 1 }}</div>
                            <h3 class="text-4xl font-black mb-6 leading-tight">{{ $feature['title'] }}</h3>
                            <p class="{{ $t['text_muted'] }} text-xl leading-relaxed font-medium">{{ $feature['description'] }}</p>
                        </div>
                        <div class="flex-1 w-full aspect-video {{ $isFuture ? 'bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700' : 'bg-gray-100' }} rounded-[3rem] flex items-center justify-center text-slate-500 italic border-4 {{ $t['border'] }} shadow-2xl">
                            <div class="text-center">
                                <svg class="w-16 h-16 mx-auto mb-4 opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                <span class="font-black uppercase tracking-widest text-xs opacity-30">Visual Asset</span>
                            </div>
                        </div>
                    </div>
                    @endforeach
                </div>
            </div>
        </section>

        <!-- Pricing -->
        <section id="pricing" class="py-40 px-6 relative overflow-hidden">
            @if($isFuture)
                <div class="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-cyan-500/5 to-transparent"></div>
            @endif
            <div class="max-w-2xl mx-auto {{ $t['bg_card'] }} rounded-[3rem] shadow-2xl overflow-hidden border-2 border-{{ str_replace('bg-', '', $t['primary']) }} relative z-10 transform hover:scale-[1.02] transition-transform duration-500">
                <div class="{{ $t['primary'] }} py-6 px-10 text-center text-{{ $isFuture ? 'black' : 'white' }} font-black uppercase tracking-[0.2em] text-xs">
                    Limited Time Offer
                </div>
                <div class="p-16 text-center">
                    <h2 class="text-3xl font-black mb-6">{{ $salesPage->product->name }}</h2>
                    <div class="text-7xl font-black mb-10 tracking-tighter">
                        <span class="text-3xl font-bold opacity-30 mr-2">Rp</span>{{ number_format($salesPage->product->price, 0, ',', '.') }}
                    </div>
                    <ul class="text-left space-y-6 mb-12">
                        @foreach($salesPage->content['benefits'] as $benefit)
                        <li class="flex items-start {{ $t['text_muted'] }} font-bold text-sm uppercase tracking-wide">
                            <svg class="w-6 h-6 {{ $t['accent_text'] }} mr-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                            {{ $benefit }}
                        </li>
                        @endforeach
                    </ul>
                    <a href="#" class="block w-full {{ $t['primary'] }} text-{{ $isFuture ? 'black' : 'white' }} py-6 rounded-[2rem] text-2xl font-black {{ $t['primary_hover'] }} transition-all shadow-xl {{ $t['shadow'] }} uppercase tracking-widest">
                        {{ $salesPage->content['cta_text'] }}
                    </a>
                    <p class="mt-8 text-xs font-bold opacity-30 uppercase tracking-widest italic">Secure Encrypted Checkout</p>
                </div>
            </div>
        </section>

        <!-- FAQ -->
        <section id="faq" class="py-32 px-6">
            <div class="max-w-4xl mx-auto">
                <h2 class="text-4xl font-black text-center mb-20 uppercase tracking-tighter">Common Questions</h2>
                <div class="grid gap-8">
                    @foreach($salesPage->content['faq'] as $faq)
                    <div class="{{ $t['bg_card'] }} p-10 rounded-[2rem] border {{ $t['border'] }}">
                        <h3 class="text-xl font-black mb-4 flex items-center">
                            <span class="w-8 h-8 rounded-lg {{ $t['accent_bg'] }} {{ $t['accent_text'] }} flex items-center justify-center mr-4 text-xs">Q</span>
                            {{ $faq['question'] }}
                        </h3>
                        <p class="{{ $t['text_muted'] }} text-lg leading-relaxed font-medium pl-12">{{ $faq['answer'] }}</p>
                    </div>
                    @endforeach
                </div>
            </div>
        </section>

        <footer class="py-20 px-6 border-t {{ $t['border'] }} text-center text-slate-500">
            <div class="font-black text-xl mb-6 tracking-tighter {{ $t['primary_text'] }} uppercase">{{ $salesPage->product->name }}</div>
            <p class="text-xs font-bold uppercase tracking-[0.3em] opacity-40">&copy; {{ date('Y') }} All Rights Reserved.</p>
        </footer>
    </body>
</html>