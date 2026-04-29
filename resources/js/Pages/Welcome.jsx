import { Link, Head } from '@inertiajs/react';
import ApplicationLogo from '@/Components/ApplicationLogo';

export default function Welcome({ auth }) {
    return (
        <div className="bg-brand-bg min-h-screen font-sans text-brand-dark selection:bg-brand-yellow selection:text-brand-dark">
            <Head title="Welcome" />
            
            {/* Navigation */}
            <nav className="max-w-7xl mx-auto px-6 lg:px-12 h-24 flex items-center justify-between">
                <Link href="/" className="flex items-center space-x-3 group">
                    <ApplicationLogo className="w-10 h-10" />
                </Link>

                <div className="flex items-center space-x-8">
                    {auth.user ? (
                        <Link href={route('dashboard')} className="text-[10px] font-black uppercase tracking-[0.2em] hover:text-brand-red transition-colors">Dashboard &rarr;</Link>
                    ) : (
                        <>
                            <Link href={route('login')} className="text-[10px] font-black uppercase tracking-[0.2em] hover:text-brand-red transition-colors">Login</Link>
                            <Link href={route('register')} className="bg-brand-dark text-white px-8 py-3.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] hover:bg-black transition-all shadow-xl shadow-brand-dark/20">Get Started</Link>
                        </>
                    )}
                </div>
            </nav>

            {/* Hero Section */}
            <main className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-32">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <div className="relative z-10 text-center lg:text-left">
                        <div className="inline-block px-4 py-1.5 bg-white rounded-full text-[9px] font-black uppercase tracking-[0.3em] text-brand-red shadow-sm mb-8 border border-brand-tan/20">
                            Powered by Gemini AI 2.5
                        </div>
                        <h1 className="text-6xl lg:text-8xl font-[950] leading-[0.85] tracking-tighter uppercase mb-10">
                            Build <span className="text-brand-red">High-End</span> Sales Pages.
                        </h1>
                        <p className="text-xl text-gray-500 font-bold uppercase tracking-tight leading-relaxed max-w-xl mb-12 opacity-70">
                            Transform raw product data into persuasive, high-converting sales copies in seconds.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
                            <Link href={route('register')} className="w-full sm:w-auto bg-brand-dark text-white px-12 py-6 rounded-full text-sm font-black uppercase tracking-[0.2em] hover:bg-black transition-all shadow-2xl shadow-brand-dark/20 hover:scale-105 active:scale-95">
                                Start Generating Now
                            </Link>
                            <div className="flex -space-x-3 overflow-hidden opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                                {[1,2,3,4].map(n => (
                                    <img key={n} className="inline-block h-10 w-10 rounded-full ring-4 ring-brand-bg" src={`https://i.pravatar.cc/100?img=${n+10}`} alt="" />
                                ))}
                                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-white ring-4 ring-brand-bg text-[10px] font-black text-brand-dark">1k+</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Visual Bento Preview */}
                    <div className="relative">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-yellow/10 rounded-full blur-[100px]"></div>
                        <div className="relative grid grid-cols-2 gap-6 p-4">
                            <div className="bg-brand-tan rounded-[2.5rem] p-8 h-64 shadow-xl transform -rotate-3 hover:rotate-0 transition-transform duration-700">
                                <div className="w-10 h-10 bg-brand-dark rounded-full mb-6"></div>
                                <div className="h-2 w-20 bg-brand-dark/10 rounded-full mb-3"></div>
                                <div className="h-2 w-32 bg-brand-dark/10 rounded-full"></div>
                            </div>
                            <div className="bg-brand-dark rounded-[2.5rem] p-8 h-80 shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-700 mt-12">
                                <div className="flex gap-1 mb-8">
                                    {[1,2,3].map(n => <div key={n} className="w-2.5 h-2.5 rounded-full bg-brand-yellow"></div>)}
                                </div>
                                <div className="space-y-6">
                                    <div className="h-4 w-full bg-white/5 rounded-full"></div>
                                    <div className="h-4 w-3/4 bg-white/5 rounded-full"></div>
                                    <div className="h-4 w-1/2 bg-white/5 rounded-full opacity-50"></div>
                                </div>
                            </div>
                            <div className="col-span-2 bg-white rounded-[2.5rem] p-10 shadow-2xl border border-brand-tan/10 transform -translate-y-6">
                                <div className="flex items-center justify-between mb-10">
                                    <div className="h-4 w-48 bg-brand-bg rounded-full"></div>
                                    <div className="w-12 h-12 bg-brand-red rounded-full flex items-center justify-center text-white shadow-lg">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                                    </div>
                                </div>
                                <div className="grid grid-cols-4 gap-6">
                                    {[1,2,3,4].map(n => <div key={n} className="h-14 bg-brand-bg rounded-[1rem] border border-brand-tan/10"></div>)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="py-20 text-center opacity-20">
                <p className="text-[10px] font-black uppercase tracking-[0.5em]">&copy; {new Date().getFullYear()} SalesGen AI. Crafted with Gemini API.</p>
            </footer>
        </div>
    );
}