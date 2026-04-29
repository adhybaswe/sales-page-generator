<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>{{ $salesPage->headline }}</title>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap" rel="stylesheet">
        <script src="https://cdn.tailwindcss.com"></script>
        <script>
            tailwind.config = {
                theme: {
                    extend: {
                        fontFamily: {
                            sans: ['Plus Jakarta Sans', 'sans-serif'],
                        },
                        colors: {
                            brand: {
                                bg: '#f4f2ec',
                                dark: '#27292d',
                                tan: '#dbd5c4',
                                yellow: '#ffcc00',
                                red: '#ff6b6b',
                            }
                        }
                    }
                }
            }
        </script>
        <style>
            html { scroll-behavior: smooth; }
            body { font-family: 'Plus Jakarta Sans', sans-serif; }
            .section-glow { position: absolute; top: 0; left: 50%; transform: translateX(-50%); width: 100%; height: 100%; background: radial-gradient(circle at center, rgba(6, 182, 212, 0.1), transparent); pointer-events: none; }
            .noise-overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: url('https://grainy-gradients.vercel.app/noise.svg'); opacity: 0.2; filter: brightness(100%) contrast(150%); pointer-events: none; }
        </style>
    </head>
    @php
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
        $sectionClasses = "relative group/section transition-all duration-500 border-4 border-transparent rounded-[2.5rem] overflow-hidden cursor-default";
    @endphp
    <body class="antialiased font-sans {{ $t['bg_body'] }} {{ $t['text_main'] }} min-h-screen relative scroll-smooth">
        <!-- Navigation -->
        <nav class="{{ $t['bg_card'] }} border-b {{ $t['border'] }} py-4 lg:py-6 px-6 lg:px-10 fixed w-full z-50 top-0 shadow-sm {{ $isFuture ? 'bg-opacity-80 backdrop-blur-xl' : '' }}">
            <div class="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
                <div class="font-[950] text-xl lg:text-2xl {{ $t['primary_text'] }} uppercase tracking-tighter text-center sm:text-left break-words max-w-full">{{ $salesPage->product->name }}</div>
                <div class="flex items-center space-x-4 lg:space-x-8">
                    <div class="hidden md:flex space-x-10 text-[10px] font-black uppercase tracking-[0.3em] opacity-30">
                        <a href="#benefits" class="hover:opacity-100 transition-opacity">Benefits</a>
                        <a href="#features" class="hover:opacity-100 transition-opacity">Features</a>
                        <a href="#faq" class="hover:opacity-100 transition-opacity">FAQ</a>
                    </div>
                    <a href="#pricing" class="{{ $t['primary'] }} {{ $isFuture ? 'text-black' : 'text-white' }} px-6 lg:px-8 py-2.5 lg:py-3 rounded-full font-black {{ $t['primary_hover'] }} transition-all text-[10px] uppercase tracking-widest shadow-lg whitespace-nowrap">Get Started</a>
                </div>
            </div>
        </nav>

        <!-- Hero Section -->
        <div class="max-w-[1400px] mx-auto px-4 lg:px-12 pt-32 pb-10">
            <section class="{{ $t['bg_hero'] }} relative rounded-[2rem] lg:rounded-[3rem] overflow-hidden {{ $sectionClasses }} pt-24 lg:pt-32 pb-16 lg:pb-24 px-6 lg:px-10">
                @if($isFuture)
                    <div class="section-glow"></div>
                    <div class="noise-overlay"></div>
                @endif
                
                <div class="max-w-5xl mx-auto text-center relative z-10">
                    <h1 class="text-4xl md:text-7xl font-[950] tracking-tighter mb-8 leading-[0.95] uppercase {{ $isFuture ? 'bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-500' : '' }}">
                        {{ $salesPage->content['headline'] }}
                    </h1>
                    <p class="text-lg md:text-2xl {{ $t['text_muted'] }} mb-12 max-w-4xl mx-auto leading-relaxed font-bold uppercase tracking-tight opacity-70">
                        {{ $salesPage->content['sub_headline'] }}
                    </p>
                    <div class="flex justify-center">
                        <a href="#pricing" class="{{ $t['primary'] }} {{ $isFuture ? 'text-black' : 'text-white' }} px-10 py-5 rounded-[2rem] text-lg font-black {{ $t['primary_hover'] }} shadow-2xl transition-all hover:scale-105 active:scale-95 uppercase tracking-widest">
                            {{ $salesPage->content['cta_text'] }}
                        </a>
                    </div>
                </div>
            </section>
        </div>

        <!-- Problem & Solution -->
        <div class="max-w-[1400px] mx-auto px-4 lg:px-12 py-6 lg:py-10">
            <section class="{{ $sectionClasses }} p-6 lg:p-16">
                <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 lg:gap-12">
                    <div class="{{ $salesPage->theme === 'luxury' || $isFuture ? 'bg-red-950/10 border-red-900/30 text-red-200' : 'bg-red-50 border-red-100 text-red-700' }} p-8 lg:p-10 rounded-[2.5rem] border relative overflow-hidden group/item">
                        <div class="absolute top-0 right-0 p-6 opacity-5">
                            <svg class="w-24 h-24" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path></svg>
                        </div>
                        <h2 class="text-2xl md:text-3xl font-[950] mb-6 uppercase tracking-tighter {{ $isFuture ? 'text-red-400' : '' }}">The Problem</h2>
                        <p class="leading-relaxed text-lg font-bold opacity-80 uppercase tracking-tight">{{ $salesPage->content['problem_statement'] }}</p>
                    </div>
                    <div class="{{ $salesPage->theme === 'luxury' || $isFuture ? 'bg-cyan-950/10 border-cyan-900/30 text-cyan-100' : 'bg-emerald-50 border-emerald-100 text-emerald-700' }} p-8 lg:p-10 rounded-[2.5rem] border relative group/sol overflow-hidden group/item">
                        <div class="absolute top-0 right-0 p-6 opacity-5">
                            <svg class="w-24 h-24" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        </div>
                        <h2 class="text-2xl md:text-3xl font-[950] mb-6 uppercase tracking-tighter {{ $isFuture ? 'text-cyan-400' : '' }}">The Solution</h2>
                        <p class="leading-relaxed text-lg font-bold opacity-80 uppercase tracking-tight">{{ $salesPage->content['solution_statement'] }}</p>
                    </div>
                </div>
            </section>
        </div>

        <!-- Benefits -->
        <div class="max-w-[1400px] mx-auto px-4 lg:px-12 py-6 lg:py-10 text-center">
            <section id="benefits" class="{{ $isFuture ? 'bg-[#0d0d10]' : '' }} {{ $sectionClasses }} p-6 lg:p-16">
                <div class="max-w-6xl mx-auto">
                    <h2 class="text-3xl md:text-5xl font-[950] mb-12 lg:mb-20 uppercase tracking-tighter">Why Choose Us?</h2>
                    <div class="grid md:grid-cols-3 gap-6 lg:gap-8 text-left">
                        @foreach($salesPage->content['benefits'] as $benefit)
                            <div class="{{ $t['bg_card'] }} p-8 lg:p-10 rounded-[2.5rem] border {{ $t['border'] }} relative overflow-hidden shadow-sm">
                                <div class="absolute top-0 right-0 w-20 h-20 bg-brand-bg opacity-50 rounded-bl-[3rem] -mr-4 -mt-4"></div>
                                <div class="w-14 h-14 {{ $t['accent_bg'] }} {{ $t['accent_text'] }} rounded-[1.5rem] flex items-center justify-center mb-8 shadow-lg relative z-10 font-bold">
                                    <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path></svg>
                                </div>
                                <p class="text-xl font-[900] leading-[1.2] uppercase tracking-tighter relative z-10">{{ $benefit }}</p>
                            </div>
                        @endforeach
                    </div>
                </div>
            </section>
        </div>

        <!-- Features -->
        <div class="max-w-[1400px] mx-auto px-4 lg:px-12 py-6 lg:py-10">
            <section id="features" class="{{ $sectionClasses }} p-6 lg:p-16">
                <div class="max-w-6xl mx-auto text-center">
                    <h2 class="text-3xl md:text-5xl font-[950] mb-16 lg:mb-24 uppercase tracking-tighter">Core Features</h2>
                    <div class="space-y-24 lg:space-y-32">
                        @foreach($salesPage->content['detailed_features'] as $i => $feature)
                            <div class="flex flex-col {{ $i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse' }} items-center gap-12 lg:gap-16 text-left">
                                <div class="flex-1">
                                    <div class="text-[11px] font-black {{ $t['accent_text'] }} uppercase tracking-[0.5em] mb-4">Feature // 0{{ $i + 1 }}</div>
                                    <h3 class="text-3xl md:text-4xl font-[950] mb-6 leading-[1] uppercase tracking-tighter">{{ $feature['title'] }}</h3>
                                    <p class="{{ $t['text_muted'] }} text-lg leading-relaxed font-bold uppercase tracking-tight opacity-70">{{ $feature['description'] }}</p>
                                </div>
                                <div class="flex-1 w-full aspect-video {{ $isFuture ? 'bg-gradient-to-br from-slate-800 to-slate-900' : 'bg-white shadow-xl' }} rounded-[2.5rem] lg:rounded-[3rem] flex items-center justify-center border-4 {{ $t['border'] }} relative">
                                    <div class="absolute inset-0 bg-brand-dark opacity-5"></div>
                                    <span class="font-black uppercase tracking-[0.5em] text-[10px] opacity-10 relative z-10">Visual Asset</span>
                                </div>
                            </div>
                        @endforeach
                    </div>
                </div>
            </section>
        </div>

        <!-- Pricing Section -->
        <div class="max-w-[1400px] mx-auto px-4 lg:px-12 py-6 lg:py-10">
            <section id="pricing" class="relative overflow-hidden {{ $sectionClasses }} py-16 lg:py-24">
                @if($isFuture)
                    <div class="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-cyan-500/5 to-transparent"></div>
                @endif
                <div class="max-w-2xl mx-auto {{ $t['bg_card'] }} rounded-[2.5rem] lg:rounded-[3rem] shadow-[0_50px_100px_rgba(0,0,0,0.1)] overflow-hidden border-2 border-{{ str_replace('bg-', '', $t['primary']) }} relative z-10">
                    <div class="{{ $t['primary'] }} py-6 px-10 text-center text-{{ $isFuture ? 'black' : 'white' }} font-black uppercase tracking-[0.4em] text-[10px]">
                        Limited Time Availability
                    </div>
                    <div class="p-8 lg:p-16 text-center">
                        <h2 class="text-3xl font-[950] mb-6 uppercase tracking-tighter">{{ $salesPage->product->name }}</h2>
                        <div class="text-6xl md:text-7xl font-black mb-10 tracking-tighter leading-none text-brand-dark">
                            <span class="text-3xl font-bold opacity-20 mr-2">Rp</span>
                            {{ number_format($salesPage->product->price, 0, ',', '.') }}
                        </div>
                        <ul class="text-left space-y-6 mb-12 max-w-sm mx-auto">
                            @foreach(array_slice($salesPage->content['benefits'], 0, 3) as $benefit)
                                <li class="flex items-start {{ $t['text_muted'] }} font-black text-[10px] uppercase tracking-widest leading-relaxed">
                                    <svg class="w-5 h-5 {{ $t['accent_text'] }} mr-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path></svg>
                                    {{ $benefit }}
                                </li>
                            @endforeach
                        </ul>
                        <a href="#" class="block w-full {{ $t['primary'] }} text-{{ $isFuture ? 'black' : 'white' }} py-6 lg:py-8 rounded-[2rem] text-2xl font-black {{ $t['primary_hover'] }} transition-all shadow-2xl uppercase tracking-widest">
                            {{ $salesPage->content['cta_text'] }}
                        </a>
                    </div>
                </div>
            </section>
        </div>

        <!-- FAQ -->
        <div class="max-w-[1400px] mx-auto px-4 lg:px-12 py-6 lg:py-10">
            <section id="faq" class="{{ $sectionClasses }} p-6 lg:p-16">
                <div class="max-w-4xl mx-auto">
                    <h2 class="text-3xl md:text-5xl font-[950] text-center mb-16 lg:mb-24 uppercase tracking-tighter">FAQ</h2>
                    <div class="grid gap-6 lg:gap-8">
                        @foreach($salesPage->content['faq'] as $item)
                            <div class="{{ $t['bg_card'] }} p-8 lg:p-10 rounded-[2.5rem] border {{ $t['border'] }} shadow-sm relative overflow-hidden">
                                <h3 class="text-xl md:text-2xl font-[950] mb-4 flex items-center uppercase tracking-tighter">
                                    <span class="w-8 h-8 rounded-lg {{ $t['accent_bg'] }} {{ $t['accent_text'] }} flex items-center justify-center mr-4 text-[10px] font-black">Q</span>
                                    {{ $item['question'] }}
                                </h3>
                                <p class="{{ $t['text_muted'] }} text-lg leading-relaxed font-bold pl-12 uppercase tracking-tight opacity-70">{{ $item['answer'] }}</p>
                            </div>
                        @endforeach
                    </div>
                </div>
            </section>
        </div>

        <footer class="py-40 px-6 border-t {{ $t['border'] }} text-center opacity-20">
            <div class="font-black text-3xl mb-6 tracking-tighter {{ $t['primary_text'] }} uppercase">{{ $salesPage->product->name }}</div>
            <p class="text-[10px] font-black uppercase tracking-[0.5em]">&copy; {{ date('Y') }} All Rights Reserved.</p>
        </footer>
    </body>
</html>