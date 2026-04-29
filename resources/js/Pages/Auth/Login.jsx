import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            {status && (
                <div className="mb-4 text-sm font-medium text-green-600">
                    {status}
                </div>
            )}

            <div>
                <h2 className="text-4xl font-[950] text-brand-dark tracking-tighter uppercase leading-none mb-3">Login</h2>
                <p className="text-gray-400 font-bold text-[10px] uppercase tracking-[0.2em] mb-10 text-brand-dark opacity-60 text-inherit">Welcome back! Please sign in to your account.</p>
            </div>

            <form onSubmit={submit} className="space-y-6">
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
                    <div className="flex justify-between items-center mb-3">
                        <label className="block text-[9px] font-black text-gray-400 uppercase tracking-[0.3em]">Password</label>
                        {canResetPassword && (
                            <Link href={route('password.request')} className="text-[9px] font-black text-brand-red uppercase tracking-widest hover:opacity-70 transition-opacity">
                                Forgot Password?
                            </Link>
                        )}
                    </div>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="w-full px-6 py-4 bg-brand-bg border-none rounded-2xl focus:ring-4 focus:ring-brand-yellow/20 transition-all text-brand-dark font-bold placeholder-gray-300"
                        autoComplete="current-password"
                        onChange={(e) => setData('password', e.target.value)}
                        placeholder="••••••••"
                        required
                    />
                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="flex items-center">
                    <input
                        type="checkbox"
                        name="remember"
                        checked={data.remember}
                        onChange={(e) => setData('remember', e.target.checked)}
                        className="rounded-lg border-brand-tan text-brand-dark shadow-sm focus:ring-brand-yellow"
                    />
                    <span className="ms-3 text-[9px] font-black text-gray-400 uppercase tracking-[0.2em]">Remember me</span>
                </div>

                <div className="pt-4">
                    <button
                        type="submit"
                        disabled={processing}
                        className="w-full flex justify-center items-center px-10 py-5 bg-brand-dark text-white rounded-2xl font-[900] shadow-xl shadow-brand-dark/20 hover:bg-black hover:scale-[1.02] transition-all uppercase tracking-[0.2em] text-xs disabled:opacity-50"
                    >
                        Sign In &rarr;
                    </button>
                </div>

                <div className="text-center pt-8 border-t border-brand-bg">
                    <p className="text-gray-400 text-[9px] font-black uppercase tracking-[0.2em]">
                        Don't have an account? 
                        <Link href={route('register')} className="text-brand-red hover:opacity-70 ml-2">Register Now</Link>
                    </p>
                </div>
            </form>
        </GuestLayout>
    );
}