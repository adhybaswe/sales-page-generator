import { Link } from '@inertiajs/react';
import ApplicationLogo from '@/Components/ApplicationLogo';

export default function GuestLayout({ children }) {
    return (
        <div className="min-h-screen bg-white font-sans text-brand-dark flex overflow-hidden">
            {/* Left Side: Form Area */}
            <div className="flex flex-col justify-center flex-1 px-8 py-16 sm:px-12 lg:flex-none lg:px-24 xl:px-32 bg-white z-20 relative">
                <div className="w-full max-w-sm mx-auto lg:w-96">
                    <div className="mb-12">
                        <Link href="/" className="inline-flex items-center space-x-3 group">
                            <ApplicationLogo className="w-16 h-16" />
                        </Link>
                    </div>

                    <div className="mt-8">
                        {children}
                    </div>
                </div>
                
                {/* Subtle background element for left side */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-red via-brand-yellow to-brand-dark opacity-10"></div>
            </div>

            {/* Right Side: High-End Visual Panel */}
            <div className="relative hidden w-0 flex-1 lg:block overflow-hidden bg-brand-dark">
                {/* Custom Mesh Gradient Effect */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-red/10 rounded-full blur-[150px] animate-pulse"></div>
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-yellow/5 rounded-full blur-[120px] animate-bounce" style={{animationDuration: '10s'}}></div>
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
                </div>

                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-24">
                    <div className="relative w-full max-w-2xl text-center">
                        {/* Floating UI Mockup Concept */}
                        <div className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[3.5rem] p-12 shadow-[0_32px_80px_rgba(0,0,0,0.4)] transform -rotate-2 mb-20">
                            <div className="flex items-center space-x-4 mb-10 opacity-40">
                                <div className="flex space-x-2">
                                    <div className="w-3 h-3 bg-brand-red rounded-full"></div>
                                    <div className="w-3 h-3 bg-brand-yellow rounded-full"></div>
                                    <div className="w-3 h-3 bg-emerald-400 rounded-full"></div>
                                </div>
                                <div className="h-3 w-48 bg-white/10 rounded-full"></div>
                            </div>
                            
                            <div className="space-y-8">
                                <div className="h-16 w-full bg-gradient-to-r from-white/10 to-transparent rounded-[1.5rem]"></div>
                                <div className="grid grid-cols-3 gap-6">
                                    <div className="h-40 bg-white/5 rounded-[2rem] border border-white/5"></div>
                                    <div className="h-40 bg-white/5 rounded-[2rem] border border-white/5 shadow-2xl shadow-brand-red/10"></div>
                                    <div className="h-40 bg-white/5 rounded-[2rem] border border-white/5"></div>
                                </div>
                            </div>

                            {/* Floating "Badge" Elements */}
                            <div className="absolute -top-16 -right-12 bg-white p-8 rounded-[2.5rem] shadow-2xl transform rotate-6 scale-110">
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-brand-bg rounded-full flex items-center justify-center text-brand-red border border-brand-red/10">
                                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                                    </div>
                                    <div className="text-left">
                                        <div className="text-[10px] font-black text-gray-300 uppercase tracking-widest leading-none mb-1.5">Conversion</div>
                                        <div className="text-2xl font-[950] text-brand-dark leading-none tracking-tighter">+124%</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6 max-w-lg mx-auto">
                            <h2 className="text-5xl font-[950] text-white tracking-tighter uppercase leading-[0.95]">Craft Your Vision<br/>Into Reality.</h2>
                            <p className="text-gray-400 text-lg font-bold italic opacity-60 leading-relaxed">
                                "The most powerful AI sales companion for modern entrepreneurs."
                            </p>
                        </div>
                    </div>
                </div>
                
                {/* Bottom branding footer */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center space-x-12 opacity-20 grayscale brightness-200">
                    <span className="text-xs font-black uppercase tracking-[0.4em] text-white">Trustpilot ★★★★★</span>
                </div>
            </div>
        </div>
    );
}