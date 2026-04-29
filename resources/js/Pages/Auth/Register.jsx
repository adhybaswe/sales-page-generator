import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Register" />

            <div>
                <h2 className="text-4xl font-[950] text-brand-dark tracking-tighter uppercase leading-none mb-3">Register</h2>
                <p className="text-gray-400 font-bold text-[10px] uppercase tracking-[0.2em] mb-10 text-brand-dark opacity-60">Start your amazing business journey with SalesGen AI.</p>
            </div>

            <form onSubmit={submit} className="space-y-5">
                <div>
                    <label className="block text-[9px] font-black text-gray-400 uppercase tracking-[0.3em] mb-3">Full Name</label>
                    <input
                        id="name"
                        name="name"
                        value={data.name}
                        className="w-full px-6 py-4 bg-brand-bg border-none rounded-2xl focus:ring-4 focus:ring-brand-yellow/20 transition-all text-brand-dark font-bold placeholder-gray-300"
                        autoComplete="name"
                        onChange={(e) => setData('name', e.target.value)}
                        placeholder="Your Full Name"
                        required
                    />
                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div>
                    <label className="block text-[9px] font-black text-gray-400 uppercase tracking-[0.3em] mb-3">Email Address</label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="w-full px-6 py-4 bg-brand-bg border-none rounded-2xl focus:ring-4 focus:ring-brand-yellow/20 transition-all text-brand-dark font-bold placeholder-gray-300"
                        autoComplete="username"
                        onChange={(e) => setData('email', e.target.value)}
                        placeholder="name@example.com"
                        required
                    />
                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div>
                    <label className="block text-[9px] font-black text-gray-400 uppercase tracking-[0.3em] mb-3">Password</label>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="w-full px-6 py-4 bg-brand-bg border-none rounded-2xl focus:ring-4 focus:ring-brand-yellow/20 transition-all text-brand-dark font-bold placeholder-gray-300"
                        autoComplete="new-password"
                        onChange={(e) => setData('password', e.target.value)}
                        placeholder="••••••••"
                        required
                    />
                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div>
                    <label className="block text-[9px] font-black text-gray-400 uppercase tracking-[0.3em] mb-3">Confirm Password</label>
                    <input
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="w-full px-6 py-4 bg-brand-bg border-none rounded-2xl focus:ring-4 focus:ring-brand-yellow/20 transition-all text-brand-dark font-bold placeholder-gray-300"
                        autoComplete="new-password"
                        onChange={(e) => setData('password_confirmation', e.target.value)}
                        placeholder="••••••••"
                        required
                    />
                    <InputError message={errors.password_confirmation} className="mt-2" />
                </div>

                <div className="pt-4">
                    <button
                        type="submit"
                        disabled={processing}
                        className="w-full flex justify-center items-center px-10 py-5 bg-brand-dark text-white rounded-2xl font-[900] shadow-xl shadow-brand-dark/20 hover:bg-black hover:scale-[1.02] transition-all uppercase tracking-[0.2em] text-xs disabled:opacity-50"
                    >
                        Create Account &rarr;
                    </button>
                </div>

                <div className="text-center pt-8 border-t border-brand-bg">
                    <p className="text-gray-400 text-[9px] font-black uppercase tracking-[0.2em]">
                        Already have an account? 
                        <Link href={route('login')} className="text-brand-red hover:opacity-70 ml-2">Login Now</Link>
                    </p>
                </div>
            </form>
        </GuestLayout>
    );
}