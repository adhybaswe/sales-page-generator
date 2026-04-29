<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>{{ $salesPage->headline }}</title>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
        <script src="https://cdn.tailwindcss.com"></script>
        <script>
            tailwind.config = {
                theme: {
                    extend: {
                        fontFamily: {
                            sans: ['Plus Jakarta Sans', 'sans-serif'],
                        }
                    }
                }
            }
        </script>
        <style>
            html { scroll-behavior: smooth; }
            body { font-family: 'Plus Jakarta Sans', sans-serif; }
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
    @endphp
    <body class="antialiased font-sans {{ $t['bg_body'] }} {{ $t['text_main'] }} min-h-screen">
        <!-- Navigation -->
        <nav class="{{ $t['bg_card'] }} border-b {{ $t['border'] }} py-4 px-6 fixed w-full z-50 top-0 shadow-sm {{ $isFuture ? 'bg-opacity-80 backdrop-blur-xl' : '' }}">
            <div class="max-w-7xl mx-auto flex justify-between items-center">
                <div class="font-[900] text-xl {{ $t['primary_text'] }} uppercase tracking-tighter">{{ $salesPage->product->name }}</div>
                <div class="hidden md:flex space-x-6 text-[10px] font-black uppercase tracking-[0.2em] opacity-40">
                    <a href="#benefits">Benefits</a>
                    <a href="#features">Features</a>
                    <a href="#faq">FAQ</a>
                </div>
                <a href="#pricing" class="{{ $t['primary'] }} {{ $isFuture ? 'text-black' : 'text-white' }} px-6 py-2 rounded-full font-black {{ $t['primary_hover'] }} transition-all text-[10px] uppercase tracking-widest">Get Started</a>
            </div>
        </nav>

        <!-- Hero Section -->
        <section class="pt-48 pb-32 px-6 {{ $t['bg_hero'] }} relative overflow-hidden text-center">
            @if($isFuture)
                <div style="background: radial-gradient(circle at center, rgba(6, 182, 212, 0.1), transparent); position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></div>
            @endif
            
            <div class="max-w-5xl mx-auto relative z-10">
                <h1 class="text-5xl md:text-8xl font-[950] tracking-tighter mb-8 leading-[0.9] uppercase">
                    {{ $salesPage->content['headline'] }}
                </h1>
                <p class="text-xl md:text-2xl {{ $t['text_muted'] }} mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
                    {{ $salesPage->content['sub_headline'] }}
                </p>
                <div class="flex justify-center">
                    <a href="#pricing" class="{{ $t['primary'] }} {{ $isFuture ? 'text-black' : 'text-white' }} px-10 py-5 rounded-2xl text-lg font-black {{ $t['primary_hover'] }} shadow-2xl transition-all hover:scale-105 active:scale-95 uppercase tracking-widest">
                        {{ $salesPage->content['cta_text'] }}
                    </a>
                </div>
            </div>
        </section>

        <!-- Problem & Solution -->
        <section class="py-32 px-6">
            <div class="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 text-left">
                <div class="{{ $salesPage->theme === 'luxury' || $isFuture ? 'bg-red-950/10 border-red-900/30 text-red-200' : 'bg-red-50 border-red-100 text-red-700' }} p-12 rounded-[2.5rem] border">
                    <h2 class="text-2xl font-black mb-6 uppercase tracking-wider {{ $isFuture ? 'text-red-400' : '' }}">The Problem</h2>
                    <p class="leading-relaxed text-lg font-medium opacity-80">{{ $salesPage->content['problem_statement'] }}</p>
                </div>
                <div class="{{ $salesPage->theme === 'luxury' || $isFuture ? 'bg-cyan-950/10 border-cyan-900/30 text-cyan-100' : 'bg-green-50 border-green-100 text-green-700' }} p-12 rounded-[2.5rem] border">
                    <h2 class="text-2xl font-black mb-6 uppercase tracking-wider {{ $isFuture ? 'text-cyan-400' : '' }}">The Solution</h2>
                    <p class="leading-relaxed text-lg font-medium opacity-80">{{ $salesPage->content['solution_statement'] }}</p>
                </div>
            </div>
        </section>

        <!-- Benefits -->
        <section id="benefits" class="py-32 px-6 {{ $isFuture ? 'bg-[#0d0d10]' : '' }}">
            <div class="max-w-6xl mx-auto">
                <h2 class="text-4xl md:text-5xl font-[900] text-center mb-20 uppercase tracking-tighter">Why Choose Us?</h2>
                <div class="grid md:grid-cols-3 gap-10">
                    @foreach($salesPage->content['benefits'] as $benefit)
                    <div class="{{ $t['bg_card'] }} p-10 rounded-[2rem] border {{ $t['border'] }}">
                        <div class="w-14 h-14 {{ $t['accent_bg'] }} {{ $t['accent_text'] }} rounded-2xl flex items-center justify-center mb-8">
                            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                        </div>
                        <p class="text-xl font-bold leading-snug">{{ $benefit }}</p>
                    </div>
                    @endforeach
                </div>
            </div>
        </section>

        <!-- Features -->
        <section id="features" class="py-32 px-6">
            <div class="max-w-6xl mx-auto">
                <h2 class="text-4xl md:text-5xl font-[900] text-center mb-24 uppercase tracking-tighter">Core Features</h2>
                <div class="space-y-32">
                    @foreach($salesPage->content['detailed_features'] as $index => $feature)
                    <div class="flex flex-col {{ $index % 2 == 0 ? 'md:flex-row' : 'md:flex-row-reverse' }} items-center gap-20 text-left">
                        <div class="flex-1">
                            <div class="text-[10px] font-black {{ $t['accent_text'] }} uppercase tracking-[0.3em] mb-4">Feature 0{{ $index + 1 }}</div>
                            <h3 class="text-4xl font-black mb-6 leading-tight">{{ $feature['title'] }}</h3>
                            <p class="{{ $t['text_muted'] }} text-xl leading-relaxed font-medium">{{ $feature['description'] }}</p>
                        </div>
                        <div class="flex-1 w-full aspect-video {{ $isFuture ? 'bg-slate-800' : 'bg-gray-100' }} rounded-[3rem] flex items-center justify-center border-4 {{ $t['border'] }} shadow-2xl">
                             <span class="font-black uppercase tracking-widest text-xs opacity-10">Visual Asset</span>
                        </div>
                    </div>
                    @endforeach
                </div>
            </div>
        </section>

        <!-- Pricing -->
        <section id="pricing" class="py-40 px-6 relative overflow-hidden">
            <div class="max-w-2xl mx-auto {{ $t['bg_card'] }} rounded-[3rem] shadow-2xl overflow-hidden border-2 border-{{ str_replace('bg-', '', $t['primary']) }} relative z-10 text-center">
                <div class="{{ $t['primary'] }} py-6 px-10 text-{{ $isFuture ? 'black' : 'white' }} font-black uppercase tracking-[0.2em] text-xs">
                    Limited Time Offer
                </div>
                <div class="p-16">
                    <h2 class="text-3xl font-black mb-6">{{ $salesPage->product->name }}</h2>
                    <div class="text-7xl font-black mb-10 tracking-tighter">
                        <span class="text-3xl font-bold opacity-30 mr-2">Rp</span>{{ number_format($salesPage->product->price, 0, ',', '.') }}
                    </div>
                    <ul class="text-left space-y-6 mb-12">
                        @foreach(array_slice($salesPage->content['benefits'], 0, 3) as $benefit)
                        <li class="flex items-start {{ $t['text_muted'] }} font-bold text-sm uppercase tracking-wide">
                            <svg class="w-6 h-6 {{ $t['accent_text'] }} mr-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path></svg>
                            {{ $benefit }}
                        </li>
                        @endforeach
                    </ul>
                    <a href="#" class="block w-full {{ $t['primary'] }} text-{{ $isFuture ? 'black' : 'white' }} py-6 rounded-[2rem] text-2xl font-black {{ $t['primary_hover'] }} transition-all uppercase tracking-widest">
                        {{ $salesPage->content['cta_text'] }}
                    </a>
                </div>
            </div>
        </section>

        <!-- FAQ -->
        <section id="faq" class="py-32 px-6">
            <div class="max-w-4xl mx-auto">
                <h2 class="text-4xl md:text-5xl font-[900] text-center mb-20 uppercase tracking-tighter">Common Questions</h2>
                <div class="grid gap-8 text-left">
                    @foreach($salesPage->content['faq'] as $faq)
                    <div class="{{ $t['bg_card'] }} p-10 rounded-[2rem] border {{ $t['border'] }}">
                        <h3 class="text-xl font-black mb-4 flex items-center uppercase tracking-tight">
                            <span class="w-8 h-8 rounded-lg {{ $t['accent_bg'] }} {{ $t['accent_text'] }} flex items-center justify-center mr-4 text-xs font-black">Q</span>
                            {{ $faq['question'] }}
                        </h3>
                        <p class="{{ $t['text_muted'] }} text-lg leading-relaxed font-medium pl-12">{{ $faq['answer'] }}</p>
                    </div>
                    @endforeach
                </div>
            </div>
        </section>

        <footer class="py-20 px-6 border-t {{ $t['border'] }} text-center opacity-50">
            <div class="font-[900] text-xl mb-4 tracking-tighter {{ $t['primary_text'] }} uppercase">{{ $salesPage->product->name }}</div>
            <p class="text-[10px] font-black uppercase tracking-[0.3em]">&copy; {{ date('Y') }} All Rights Reserved.</p>
        </footer>
    </body>
</html>