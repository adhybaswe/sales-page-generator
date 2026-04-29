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
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">

        <!-- Scripts -->
        @vite(['resources/css/app.css', 'resources/js/app.js'])
        <style>
            body { font-family: 'Plus Jakarta Sans', sans-serif; }
            [x-cloak] { display: none !important; }
            .bg-app { background-color: #f4f2ec; }
        </style>
    </head>
    <body class="antialiased bg-app text-[#27292d]" x-data="{ open: false }">
        <div class="min-h-screen">
            <!-- Sidebar Navigation -->
            @include('layouts.navigation')

            <!-- Main Content Area -->
            <main class="lg:pl-72 transition-all duration-300">
                <!-- Mobile Navigation Overlay -->
                <div x-show="open" x-cloak class="fixed inset-0 z-40 lg:hidden bg-slate-900/60 backdrop-blur-sm transition-opacity" @click="open = false"></div>

                <!-- Page Content -->
                <div class="min-h-screen">
                    {{ $slot }}
                </div>
            </main>
        </div>
    </body>
</html>