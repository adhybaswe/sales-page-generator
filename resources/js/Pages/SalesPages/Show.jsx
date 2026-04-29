import { Head, Link, router } from '@inertiajs/react';
import { useState } from 'react';

export default function Show({ salesPage }) {
    const [isRegenerating, setIsRegenerating] = useState(false);
    const [regeneratingSection, setRegeneratingSection] = useState(null);

    const themes = {
        'default': {
            'primary': 'bg-indigo-600',
            'primary_text': 'text-indigo-600',
            'primary_hover': 'hover:bg-indigo-700',
            'bg_hero': 'bg-gradient-to-br from-indigo-50 via-white to-blue-50',
            'accent_bg': 'bg-indigo-100',
            'accent_text': 'text-indigo-600',
            'bg_body': 'bg-gray-50',
            'bg_card': 'bg-white',
            'text_main': 'text-gray-900',
            'text_muted': 'text-gray-600',
            'border': 'border-gray-100',
            'shadow': 'shadow-indigo-200'
        },
        'professional': {
            'primary': 'bg-emerald-600',
            'primary_text': 'text-emerald-600',
            'primary_hover': 'hover:bg-emerald-700',
            'bg_hero': 'bg-gradient-to-br from-emerald-50 via-white to-slate-50',
            'accent_bg': 'bg-emerald-100',
            'accent_text': 'text-emerald-600',
            'bg_body': 'bg-slate-50',
            'bg_card': 'bg-white',
            'text_main': 'text-slate-900',
            'text_muted': 'text-slate-600',
            'border': 'border-slate-100',
            'shadow': 'shadow-emerald-200'
        },
        'luxury': {
            'primary': 'bg-amber-500',
            'primary_text': 'text-amber-500',
            'primary_hover': 'hover:bg-amber-600',
            'bg_hero': 'bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900',
            'accent_bg': 'bg-slate-800',
            'accent_text': 'text-amber-500',
            'bg_body': 'bg-slate-950',
            'bg_card': 'bg-slate-900',
            'text_main': 'text-slate-100',
            'text_muted': 'text-slate-400',
            'border': 'border-slate-800',
            'shadow': 'shadow-black'
        },
        'playful': {
            'primary': 'bg-pink-500',
            'primary_text': 'text-pink-500',
            'primary_hover': 'hover:bg-pink-600',
            'bg_hero': 'bg-gradient-to-br from-yellow-50 via-white to-pink-50',
            'accent_bg': 'bg-orange-100',
            'accent_text': 'text-pink-500',
            'bg_body': 'bg-orange-50/30',
            'bg_card': 'bg-white',
            'text_main': 'text-gray-900',
            'text_muted': 'text-gray-600',
            'border': 'border-orange-100',
            'shadow': 'shadow-pink-200'
        },
        'future': {
            'primary': 'bg-cyan-500',
            'primary_text': 'text-cyan-400',
            'primary_hover': 'hover:bg-cyan-600',
            'bg_hero': 'bg-[#0a0a0c]',
            'accent_bg': 'bg-cyan-500/10',
            'accent_text': 'text-cyan-400',
            'bg_body': 'bg-[#0a0a0c]',
            'bg_card': 'bg-[#111114]',
            'text_main': 'text-white',
            'text_muted': 'text-slate-400',
            'border': 'border-slate-800',
            'shadow': 'shadow-cyan-900/20'
        }
    };

    const t = themes[salesPage.theme] || themes.default;
    const isFuture = salesPage.theme === 'future';

    const handleRegenerate = (sectionName) => {
        setRegeneratingSection(sectionName);
        setIsRegenerating(true);
        
        router.post(route('sales-pages.regenerate', salesPage.id), {
            section: sectionName
        }, {
            preserveScroll: true,
            onFinish: () => {
                setRegeneratingSection(null);
                setIsRegenerating(false);
            },
        });
    };

    const MagicButton = ({ section }) => (
        <button 
            onClick={(e) => { e.stopPropagation(); handleRegenerate(section); }}
            disabled={isRegenerating}
            className={`absolute top-4 right-4 p-3 bg-violet-600 text-white rounded-full opacity-0 group-hover/section:opacity-100 transition-all hover:scale-110 shadow-2xl z-40 disabled:opacity-50 flex items-center justify-center`}
            title="Regenerate this section"
        >
            {regeneratingSection === section ? (
                <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
            ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            )}
        </button>
    );

    const sectionClasses = "relative group/section transition-all duration-500 border-4 border-transparent hover:border-violet-600/20 hover:bg-violet-600/[0.01] rounded-[2.5rem] overflow-hidden cursor-default";

    return (
        <div className={`antialiased font-sans ${t.bg_body} ${t.text_main} min-h-screen relative scroll-smooth`}>
            <Head title={salesPage.headline} />

            {/* Global Loading Overlay */}
            {isRegenerating && (
                <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[200] bg-brand-dark text-brand-yellow px-8 py-4 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.3)] font-black text-[10px] uppercase tracking-[0.2em] flex items-center border border-white/10 backdrop-blur-md">
                    <svg className="w-5 h-5 mr-4 animate-spin text-brand-yellow" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                    Gemini AI is crafting new copy...
                </div>
            )}

            {/* Admin Bar */}
            <div className="fixed bottom-6 lg:bottom-10 left-1/2 -translate-x-1/2 z-[60] flex space-x-2 lg:space-x-3 bg-brand-dark/90 backdrop-blur-xl p-1.5 lg:p-2 rounded-full shadow-2xl border border-white/10 w-[calc(100%-2rem)] max-w-sm lg:w-auto">
                <Link href={route('sales-pages.index')} className="flex-1 lg:flex-none bg-white/5 text-white px-4 lg:px-8 py-3 rounded-full hover:bg-white/10 transition flex items-center justify-center text-[9px] lg:text-[10px] font-[900] uppercase tracking-widest leading-none">
                    Dashboard
                </Link>
                <a href={route('sales-pages.export', salesPage.id)} className="flex-1 lg:flex-none bg-emerald-600 text-white px-4 lg:px-8 py-3 rounded-full shadow-xl hover:bg-emerald-700 transition flex items-center justify-center text-[9px] lg:text-[10px] font-[900] uppercase tracking-widest leading-none whitespace-nowrap">
                    Export HTML
                </a>
            </div>

            {/* Navigation */}
            <nav className={`${t.bg_card} border-b ${t.border} py-4 lg:py-6 px-6 lg:px-10 fixed w-full z-50 top-0 shadow-sm ${isFuture ? 'bg-opacity-80 backdrop-blur-xl' : ''}`}>
                <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
                    <div className={`font-[950] text-xl lg:text-2xl ${t.primary_text} uppercase tracking-tighter text-center sm:text-left break-words max-w-full`}>{salesPage.product.name}</div>
                    <div className="flex items-center space-x-4 lg:space-x-8">
                        <div className="hidden md:flex space-x-10 text-[10px] font-black uppercase tracking-[0.3em] opacity-30 font-bold">
                            <a href="#benefits" className="hover:opacity-100 transition-opacity">Benefits</a>
                            <a href="#features" className="hover:opacity-100 transition-opacity">Features</a>
                            <a href="#faq" className="hover:opacity-100 transition-opacity">FAQ</a>
                        </div>
                        <a href="#pricing" className={`${t.primary} ${isFuture ? 'text-black' : 'text-white'} px-6 lg:px-8 py-2.5 lg:py-3 rounded-full font-black ${t.primary_hover} transition-all text-[10px] uppercase tracking-widest shadow-lg shadow-brand-dark/10 whitespace-nowrap`}>Get Started</a>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <div className="max-w-[1400px] mx-auto px-4 lg:px-12 pt-32 pb-10">
                <section className={`${t.bg_hero} relative rounded-[2rem] lg:rounded-[3rem] overflow-hidden ${sectionClasses} pt-24 lg:pt-32 pb-16 lg:pb-24 px-6 lg:px-10`}>
                    <MagicButton section="headline" />
                    {isFuture && (
                        <>
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent"></div>
                            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
                        </>
                    )}
                    
                    <div className="max-w-5xl mx-auto text-center relative z-10">
                        <h1 className={`text-4xl md:text-7xl font-[950] tracking-tighter mb-8 leading-[0.95] uppercase ${isFuture ? 'bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-500' : ''}`}>
                            {salesPage.content.headline}
                        </h1>
                        <p className={`text-lg md:text-2xl ${t.text_muted} mb-12 max-w-4xl mx-auto leading-relaxed font-bold uppercase tracking-tight opacity-70`}>
                            {salesPage.content.sub_headline}
                        </p>
                        <div className="flex justify-center">
                            <a href="#pricing" className={`${t.primary} ${isFuture ? 'text-black' : 'text-white'} px-10 py-5 rounded-[2rem] text-lg font-black ${t.primary_hover} shadow-2xl ${t.shadow} transition-all hover:scale-105 active:scale-95 uppercase tracking-widest`}>
                                {salesPage.content.cta_text}
                            </a>
                        </div>
                    </div>
                </section>
            </div>

            {/* Problem & Solution */}
            <div className="max-w-[1400px] mx-auto px-4 lg:px-12 py-6 lg:py-10">
                <section className={`${sectionClasses} p-6 lg:p-16`}>
                    <MagicButton section="problem_statement" />
                    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 lg:gap-12">
                        <div className={`${salesPage.theme === 'luxury' || isFuture ? 'bg-red-950/10 border-red-900/30 text-red-200' : 'bg-red-50 border-red-100 text-red-700'} p-8 lg:p-10 rounded-[2.5rem] border relative overflow-hidden group/item`}>
                             <div className="absolute top-0 right-0 p-6 opacity-5 group-hover/item:scale-150 transition-transform">
                                <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path></svg>
                            </div>
                            <h2 className={`text-2xl md:text-3xl font-[950] mb-6 uppercase tracking-tighter ${isFuture ? 'text-red-400' : ''}`}>The Problem</h2>
                            <p className="leading-relaxed text-lg font-bold opacity-80 uppercase tracking-tight">{salesPage.content.problem_statement}</p>
                        </div>
                        <div className={`${salesPage.theme === 'luxury' || isFuture ? 'bg-cyan-950/10 border-cyan-900/30 text-cyan-100' : 'bg-emerald-50 border-emerald-100 text-emerald-700'} p-8 lg:p-10 rounded-[2.5rem] border relative group/sol overflow-hidden group/item`}>
                            <MagicButton section="solution_statement" />
                            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover/item:scale-150 transition-transform">
                                <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                            </div>
                            <h2 className={`text-2xl md:text-3xl font-[950] mb-6 uppercase tracking-tighter ${isFuture ? 'text-cyan-400' : ''}`}>The Solution</h2>
                            <p className="leading-relaxed text-lg font-bold opacity-80 uppercase tracking-tight">{salesPage.content.solution_statement}</p>
                        </div>
                    </div>
                </section>
            </div>

            {/* Benefits */}
            <div className="max-w-[1400px] mx-auto px-4 lg:px-12 py-6 lg:py-10 text-center">
                <section id="benefits" className={`${isFuture ? 'bg-[#0d0d10]' : ''} ${sectionClasses} p-6 lg:p-16`}>
                    <MagicButton section="benefits" />
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-[950] mb-12 lg:mb-20 uppercase tracking-tighter">Why Choose Us?</h2>
                        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 text-left">
                            {salesPage.content.benefits.map((benefit, i) => (
                                <div key={i} className={`${t.bg_card} p-8 lg:p-10 rounded-[2.5rem] border ${t.border} group/card relative overflow-hidden shadow-sm`}>
                                    <div className="absolute top-0 right-0 w-20 h-20 bg-brand-bg/50 rounded-bl-[3rem] -mr-4 -mt-4 group-hover/card:bg-violet-600/10 transition-colors"></div>
                                    <div className={`w-14 h-14 ${t.accent_bg} ${t.accent_text} rounded-[1.5rem] flex items-center justify-center mb-8 shadow-lg relative z-10 font-bold`}>
                                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                                    </div>
                                    <p className="text-xl font-[900] leading-[1.2] uppercase tracking-tighter relative z-10">{benefit}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>

            {/* Features */}
            <div className="max-w-[1400px] mx-auto px-4 lg:px-12 py-6 lg:py-10">
                <section id="features" className={`${sectionClasses} p-6 lg:p-16`}>
                    <MagicButton section="detailed_features" />
                    <div className="max-w-6xl mx-auto text-center">
                        <h2 className="text-3xl md:text-5xl font-[950] mb-16 lg:mb-24 uppercase tracking-tighter">Core Features</h2>
                        <div className="space-y-24 lg:space-y-32">
                            {salesPage.content.detailed_features.map((feature, i) => (
                                <div key={i} className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 lg:gap-16 text-left`}>
                                    <div className="flex-1">
                                        <div className={`text-[11px] font-black ${t.accent_text} uppercase tracking-[0.5em] mb-4`}>Feature // 0{i + 1}</div>
                                        <h3 className="text-3xl md:text-4xl font-[950] mb-6 leading-[1] uppercase tracking-tighter">{feature.title}</h3>
                                        <p className={`${t.text_muted} text-lg leading-relaxed font-bold uppercase tracking-tight opacity-70`}>{feature.description}</p>
                                    </div>
                                    <div className={`flex-1 w-full aspect-video ${isFuture ? 'bg-gradient-to-br from-slate-800 to-slate-900' : 'bg-white shadow-xl'} rounded-[2.5rem] lg:rounded-[3rem] flex items-center justify-center border-4 ${t.border} relative group/img`}>
                                        <div className="absolute inset-0 bg-brand-dark/5 group-hover/img:bg-transparent transition-colors duration-700"></div>
                                        <span className="font-black uppercase tracking-[0.5em] text-[10px] opacity-10 relative z-10">Visual Asset</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>

            {/* Pricing Section */}
            <div className="max-w-[1400px] mx-auto px-4 lg:px-12 py-6 lg:py-10">
                <section id="pricing" className={`relative overflow-hidden ${sectionClasses} py-16 lg:py-24`}>
                    <MagicButton section="cta_text" />
                    {isFuture && (
                        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-cyan-500/5 to-transparent"></div>
                    )}
                    <div className={`max-w-2xl mx-auto ${t.bg_card} rounded-[2.5rem] lg:rounded-[3rem] shadow-[0_50px_100px_rgba(0,0,0,0.1)] overflow-hidden border-2 border-${t.primary.replace('bg-', '')} relative z-10 transform hover:scale-[1.01] transition-transform duration-700`}>
                        <div className={`${t.primary} py-6 px-10 text-center text-${isFuture ? 'black' : 'white'} font-black uppercase tracking-[0.4em] text-[10px]`}>
                            Limited Time Availability
                        </div>
                        <div className="p-8 lg:p-16 text-center">
                            <h2 className="text-3xl font-[950] mb-6 uppercase tracking-tighter">{salesPage.product.name}</h2>
                            <div className="text-6xl md:text-7xl font-[1000] mb-10 tracking-tighter leading-none text-brand-dark">
                                <span className="text-3xl font-bold opacity-20 mr-2">Rp</span>
                                {new Intl.NumberFormat('id-ID').format(salesPage.product.price)}
                            </div>
                            <ul className="text-left space-y-6 mb-12 max-w-sm mx-auto">
                                {salesPage.content.benefits.slice(0, 3).map((benefit, i) => (
                                    <li key={i} className={`flex items-start ${t.text_muted} font-black text-[10px] uppercase tracking-widest leading-relaxed`}>
                                        <svg className={`w-5 h-5 ${t.accent_text} mr-4 shrink-0`} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3"><path strokeLinecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path></svg>
                                        {benefit}
                                    </li>
                                ))}
                            </ul>
                            <a href="#" className={`block w-full ${t.primary} text-${isFuture ? 'black' : 'white'} py-6 lg:py-8 rounded-[2rem] text-2xl font-[1000] ${t.primary_hover} transition-all shadow-2xl ${t.shadow} uppercase tracking-widest active:scale-95`}>
                                {salesPage.content.cta_text}
                            </a>
                        </div>
                    </div>
                </section>
            </div>

            {/* FAQ */}
            <div className="max-w-[1400px] mx-auto px-4 lg:px-12 py-6 lg:py-10">
                <section id="faq" className={`${sectionClasses} p-6 lg:p-16`}>
                    <MagicButton section="faq" />
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-[950] text-center mb-16 lg:mb-24 uppercase tracking-tighter">FAQ</h2>
                        <div className="grid gap-6 lg:gap-8">
                            {salesPage.content.faq.map((item, i) => (
                                <div key={i} className={`${t.bg_card} p-8 lg:p-10 rounded-[2.5rem] border ${t.border} shadow-sm group/faq relative overflow-hidden`}>
                                    <h3 className="text-xl md:text-2xl font-[950] mb-4 flex items-center uppercase tracking-tighter group-hover/faq:text-violet-600 transition-colors">
                                        <span className={`w-8 h-8 rounded-lg ${t.accent_bg} ${t.accent_text} flex items-center justify-center mr-4 text-[10px] font-black`}>Q</span>
                                        {item.question}
                                    </h3>
                                    <p className={`${t.text_muted} text-lg leading-relaxed font-bold pl-12 uppercase tracking-tight opacity-70`}>{item.answer}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>

            <footer className={`py-40 px-6 border-t ${t.border} text-center opacity-20`}>
                <div className={`font-[1000] text-3xl mb-6 tracking-tighter ${t.primary_text} uppercase`}>{salesPage.product.name}</div>
                <p className="text-[10px] font-black uppercase tracking-[0.5em]">&copy; {new Date().getFullYear()} All Rights Reserved.</p>
            </footer>
        </div>
    );
}