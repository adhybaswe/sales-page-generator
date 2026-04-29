<x-guest-layout>
    <div>
        <h2 class="text-3xl font-black text-slate-900 tracking-tight uppercase leading-none mb-2">Register</h2>
        <p class="text-slate-500 font-medium mb-8">Mulai perjalanan bisnis Anda bersama kami.</p>
    </div>

    <form method="POST" action="{{ route('register') }}" class="space-y-5">
        @csrf

        <!-- Name -->
        <div>
            <label for="name" class="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">Full Name</label>
            <input id="name" class="block w-full px-6 py-3.5 bg-slate-50 border-none rounded-2xl focus:ring-4 focus:ring-violet-100 transition-all text-slate-900 font-semibold" 
                   type="text" name="name" :value="old('name')" required autofocus autocomplete="name" placeholder="Your Name" />
            <x-input-error :messages="$errors->get('name')" class="mt-2" />
        </div>

        <!-- Email Address -->
        <div>
            <label for="email" class="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">Email Address</label>
            <input id="email" class="block w-full px-6 py-3.5 bg-slate-50 border-none rounded-2xl focus:ring-4 focus:ring-violet-100 transition-all text-slate-900 font-semibold" 
                   type="email" name="email" :value="old('email')" required autocomplete="username" placeholder="name@example.com" />
            <x-input-error :messages="$errors->get('email')" class="mt-2" />
        </div>

        <!-- Password -->
        <div>
            <label for="password" class="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">Password</label>
            <input id="password" class="block w-full px-6 py-3.5 bg-slate-50 border-none rounded-2xl focus:ring-4 focus:ring-violet-100 transition-all text-slate-900 font-semibold"
                            type="password"
                            name="password"
                            required autocomplete="new-password" placeholder="••••••••" />
            <x-input-error :messages="$errors->get('password')" class="mt-2" />
        </div>

        <!-- Confirm Password -->
        <div>
            <label for="password_confirmation" class="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">Confirm Password</label>
            <input id="password_confirmation" class="block w-full px-6 py-3.5 bg-slate-50 border-none rounded-2xl focus:ring-4 focus:ring-violet-100 transition-all text-slate-900 font-semibold"
                            type="password"
                            name="password_confirmation" required autocomplete="new-password" placeholder="••••••••" />
            <x-input-error :messages="$errors->get('password_confirmation')" class="mt-2" />
        </div>

        <div class="pt-2">
            <button class="w-full flex justify-center items-center px-10 py-5 bg-violet-600 text-white rounded-2xl font-black shadow-xl shadow-violet-200 hover:bg-violet-700 hover:scale-[1.02] transition-all uppercase tracking-widest text-sm">
                {{ __('Create Account') }}
            </button>
        </div>

        <div class="text-center pt-4">
            <p class="text-slate-400 text-xs font-bold uppercase tracking-widest">
                Sudah punya akun? 
                <a href="{{ route('login') }}" class="text-violet-600 hover:text-violet-700 ml-1">Login Sekarang</a>
            </p>
        </div>
    </form>
</x-guest-layout>