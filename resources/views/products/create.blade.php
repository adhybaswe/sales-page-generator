<x-app-layout>
    <div class="py-12 bg-[#fcfcfd] min-h-screen">
        <div class="max-w-4xl mx-auto sm:px-6 lg:px-8">
            
            <div class="mb-8 flex items-center justify-between">
                <div>
                    <h2 class="font-black text-3xl text-slate-900 leading-tight">
                        {{ __('Add New Product') }}
                    </h2>
                    <p class="text-slate-500 mt-1">Berikan detail produkmu untuk hasil copywriting yang maksimal.</p>
                </div>
                <a href="{{ route('products.index') }}" class="text-slate-400 hover:text-slate-600 transition">
                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </a>
            </div>

            <div class="bg-white rounded-[2.5rem] shadow-xl shadow-slate-200/60 border border-slate-100 overflow-hidden">
                <div class="p-10">
                    <form method="POST" action="{{ route('products.store') }}" class="space-y-8">
                        @csrf

                        <!-- Product Name -->
                        <div class="group">
                            <label for="name" class="block text-sm font-black text-slate-700 uppercase tracking-widest mb-3">Product Name</label>
                            <input id="name" name="name" type="text" 
                                class="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-4 focus:ring-violet-100 transition-all text-slate-900 font-medium placeholder-slate-300" 
                                placeholder="Contoh: EcoClean Smart Bottle"
                                value="{{ old('name') }}" required autofocus />
                            <x-input-error class="mt-2" :messages="$errors->get('name')" />
                        </div>

                        <!-- Description -->
                        <div>
                            <label for="description" class="block text-sm font-black text-slate-700 uppercase tracking-widest mb-3">Short Description</label>
                            <textarea id="description" name="description" rows="3"
                                class="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-4 focus:ring-violet-100 transition-all text-slate-900 font-medium placeholder-slate-300" 
                                placeholder="Apa kegunaan utama produk ini?"
                                required>{{ old('description') }}</textarea>
                            <x-input-error class="mt-2" :messages="$errors->get('description')" />
                        </div>

                        <!-- Features -->
                        <div>
                            <label for="features" class="block text-sm font-black text-slate-700 uppercase tracking-widest mb-3">Key Features</label>
                            <textarea id="features" name="features" rows="4"
                                class="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-4 focus:ring-violet-100 transition-all text-slate-900 font-medium placeholder-slate-300" 
                                placeholder="Pisahkan dengan koma atau baris baru (Contoh: Baterai 24 jam, Anti karat)"
                                required>{{ old('features') }}</textarea>
                            <p class="mt-2 text-xs text-slate-400 italic">Tips: Masukkan fitur yang paling disukai pengguna.</p>
                            <x-input-error class="mt-2" :messages="$errors->get('features')" />
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <!-- Target Audience -->
                            <div>
                                <label for="target_audience" class="block text-sm font-black text-slate-700 uppercase tracking-widest mb-3">Target Audience</label>
                                <input id="target_audience" name="target_audience" type="text" 
                                    class="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-4 focus:ring-violet-100 transition-all text-slate-900 font-medium placeholder-slate-300" 
                                    placeholder="Contoh: Freelancer, Emak-emak"
                                    value="{{ old('target_audience') }}" required />
                                <x-input-error class="mt-2" :messages="$errors->get('target_audience')" />
                            </div>

                            <!-- Price -->
                            <div>
                                <label for="price" class="block text-sm font-black text-slate-700 uppercase tracking-widest mb-3">Price (Rp)</label>
                                <input id="price" name="price" type="number" 
                                    class="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-4 focus:ring-violet-100 transition-all text-slate-900 font-medium placeholder-slate-300" 
                                    placeholder="0"
                                    value="{{ old('price') }}" required />
                                <x-input-error class="mt-2" :messages="$errors->get('price')" />
                            </div>
                        </div>

                        <!-- USP -->
                        <div>
                            <label for="usp" class="block text-sm font-black text-slate-700 uppercase tracking-widest mb-3">Unique Selling Point (USP)</label>
                            <textarea id="usp" name="usp" rows="3"
                                class="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-4 focus:ring-violet-100 transition-all text-slate-900 font-medium placeholder-slate-300" 
                                placeholder="Kenapa harus beli di kamu? Bukan di kompetitor?"
                                required>{{ old('usp') }}</textarea>
                            <x-input-error class="mt-2" :messages="$errors->get('usp')" />
                        </div>

                        <div class="pt-6 flex items-center justify-between border-t border-slate-50">
                            <a href="{{ route('products.index') }}" class="text-slate-400 font-bold hover:text-slate-600 transition">Cancel</a>
                            <button type="submit" class="px-10 py-4 bg-violet-600 text-white rounded-2xl font-bold shadow-xl shadow-violet-200 hover:bg-violet-700 hover:scale-105 transition-all">
                                Save Product &rarr;
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</x-app-layout>