<x-guest-layout>
    <!-- Session Status -->
    <x-auth-session-status class="mb-4" :status="session('status')" />

    <div>
        <h2 class="text-3xl font-black text-slate-900 tracking-tight uppercase leading-none mb-2">Login</h2>
        <p class="text-slate-500 font-medium mb-8">Selamat datang kembali! Silakan masuk ke akun Anda.</p>
    </div>

    <form method="POST" action="{{ route('login') }}" class="space-y-6">
        @csrf

        <!-- Email Address -->
        <div>
            <label for="email" class="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">Email Address</label>
            <input id="email" class="block w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-4 focus:ring-violet-100 transition-all text-slate-900 font-semibold" 
                   type="email" name="email" :value="old('email')" required autofocus autocomplete="username" placeholder="name@example.com" />
            <x-input-error :messages="$errors->get('email')" class="mt-2" />
        </div>

        <!-- Password -->
        <div>
            <div class="flex justify-between items-center mb-2">
                <label for="password" class="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Password</label>
                @if (Route::has('password.request'))
                    <a class="text-[10px] font-bold text-violet-600 hover:text-violet-500 uppercase tracking-wider" href="{{ route('password.request') }}">
                        Forgot?
                    </a>
                @endif
            </div>
            <input id="password" class="block w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-4 focus:ring-violet-100 transition-all text-slate-900 font-semibold"
                            type="password"
                            name="password"
                            required autocomplete="current-password" placeholder="••••••••" />
            <x-input-error :messages="$errors->get('password')" class="mt-2" />
        </div>

        <!-- Remember Me -->
        <div class="flex items-center">
            <input id="remember_me" type="checkbox" class="rounded-lg border-slate-200 text-violet-600 shadow-sm focus:ring-violet-500" name="remember">
            <span class="ms-3 text-sm font-bold text-slate-500 uppercase tracking-widest text-[10px]">{{ __('Remember me') }}</span>
        </div>

        <div class="pt-2">
            <button class="w-full flex justify-center items-center px-10 py-5 bg-violet-600 text-white rounded-2xl font-black shadow-xl shadow-violet-200 hover:bg-violet-700 hover:scale-[1.02] transition-all uppercase tracking-widest text-sm">
                {{ __('Sign In') }}
            </button>
        </div>

        <div class="text-center pt-4">
            <p class="text-slate-400 text-xs font-bold uppercase tracking-widest">
                Belum punya akun? 
                <a href="{{ route('register') }}" class="text-violet-600 hover:text-violet-700 ml-1">Daftar Sekarang</a>
            </p>
        </div>
    </form>
</x-guest-layout>