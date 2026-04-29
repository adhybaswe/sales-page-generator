import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import Modal from '@/Components/Modal';
import { useState } from 'react';

export default function Dashboard({ stats, auth }) {
    const user = auth.user;
    const [showPricing, setShowPricing] = useState(false);

    return (
        <AuthenticatedLayout>
            <Head title="Dashboard" />

            <div className="py-6 lg:py-10 font-sans text-brand-dark bg-brand-bg min-h-screen px-4 sm:px-6 lg:px-10">
                <div className="max-w-[1300px] mx-auto">
                    
                    {/* Unique Dashboard Header */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 lg:mb-12 gap-6">
                        <div>
                            <h1 className="text-3xl md:text-5xl font-[900] tracking-tighter mb-1 text-brand-dark uppercase leading-none">Hi, {user.name.split(' ')[0]}!</h1>
                            <p className="text-gray-400 text-[10px] md:text-xs font-black uppercase tracking-[0.3em] opacity-50 italic">Let's take a look at your activity today</p>
                        </div>
                        <div className="flex flex-col sm:flex-row items-center gap-4">
                            <div className="bg-white rounded-full px-5 py-3 flex items-center shadow-sm w-full sm:w-72 border border-brand-tan/20">
                                <svg className="w-4 h-4 text-gray-300 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                <input type="text" placeholder="Search data..." className="border-none bg-transparent focus:ring-0 text-xs w-full p-0 font-black text-brand-dark placeholder-gray-300 outline-none uppercase tracking-widest" />
                            </div>
                            <button 
                                onClick={() => setShowPricing(true)}
                                className="bg-brand-dark text-white px-8 py-4 rounded-full text-[9px] font-[950] uppercase tracking-[0.2em] shadow-xl shadow-brand-dark/20 hover:bg-black transition-all hover:scale-105 shrink-0 w-full sm:w-auto"
                            >
                                Upgrade Plan
                            </button>
                        </div>
                    </div>

                    {/* Main Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8">
                        
                        {/* Top Left: Tan Card */}
                        <div className="lg:col-span-7 bg-brand-tan rounded-[2rem] lg:rounded-[2.5rem] p-6 lg:p-10 relative overflow-hidden flex flex-col shadow-sm group min-h-[400px] lg:min-h-[440px]">
                            {/* Decorative Background Element */}
                            <div className="absolute top-[-10%] right-[-10%] w-48 lg:w-72 h-48 lg:h-72 bg-brand-yellow rounded-full blur-[50px] lg:blur-[80px] opacity-60 z-0"></div>
                            
                            <div className="flex justify-between items-start relative z-10 mb-6">
                                <h3 className="font-[900] text-xl lg:text-3xl text-brand-dark max-w-[260px] leading-[1.1] uppercase tracking-tighter">Your Sales Pages Results for Today</h3>
                                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-brand-dark rounded-full flex items-center justify-center text-brand-yellow shadow-xl transform group-hover:rotate-12 transition-transform shrink-0">
                                    <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path></svg>
                                </div>
                            </div>
                            
                            {/* Stats Circles Container */}
                            <div className="flex-1 flex items-center justify-center relative">
                                <div className="relative w-full max-w-[280px] aspect-square flex items-center justify-center">
                                    {/* Products Circle (Smaller, Dark) */}
                                    <div className="absolute top-[10%] left-0 lg:left-[5%] w-24 h-24 lg:w-32 lg:h-32 bg-brand-dark rounded-full flex items-center justify-center z-20 shadow-xl border-4 lg:border-6 border-brand-tan transform hover:scale-105 transition-transform duration-500">
                                        <div className="text-center text-white">
                                            <div className="font-[950] text-2xl lg:text-4xl leading-none">{stats.products_count}</div>
                                            <div className="text-[8px] lg:text-[10px] text-gray-400 font-black uppercase tracking-widest mt-1">Products</div>
                                        </div>
                                    </div>
                                    
                                    {/* Pages Circle (Larger, Yellow) */}
                                    <div className="absolute bottom-[5%] right-0 lg:right-[5%] w-36 h-36 lg:w-48 lg:h-48 bg-brand-yellow rounded-full flex items-center justify-center z-10 shadow-xl border-4 lg:border-6 border-brand-tan transform hover:scale-105 transition-transform duration-500">
                                        <div className="text-center text-brand-dark">
                                            <div className="font-[950] text-5xl lg:text-7xl leading-none tracking-tighter">{stats.pages_count}</div>
                                            <div className="text-[9px] lg:text-[11px] font-black uppercase tracking-[0.2em] mt-2 lg:mt-3">Pages</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="relative z-10 mt-auto pt-4">
                                <div className="flex flex-col sm:flex-row gap-3 sm:gap-8">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-1.5 bg-brand-dark rounded-full"></div>
                                        <span className="text-[9px] lg:text-[10px] font-black uppercase tracking-widest text-brand-dark/60">Total Products</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-1.5 bg-brand-yellow rounded-full border border-brand-dark/10"></div>
                                        <span className="text-[9px] lg:text-[10px] font-black uppercase tracking-widest text-brand-dark/60">Sales Pages Created</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Top Right: Dark Card */}
                        <div className="lg:col-span-5 bg-brand-dark rounded-[2rem] lg:rounded-[2.5rem] p-6 lg:p-10 text-white flex flex-col relative overflow-hidden shadow-xl min-h-[400px] lg:min-h-[440px]">
                            <div className="flex justify-between items-center mb-6 lg:mb-8 relative z-10">
                                <h3 className="font-[950] text-lg lg:text-xl uppercase tracking-tighter">Activity Days</h3>
                                <div className="bg-white/10 px-4 py-2 rounded-full text-[9px] lg:text-[10px] text-gray-300 flex items-center font-black uppercase tracking-widest hover:bg-white/20 transition-all cursor-pointer">
                                    June <svg className="w-3 h-3 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path></svg>
                                </div>
                            </div>
                            
                            <div className="grid grid-cols-7 gap-1 lg:gap-2 mb-auto text-center text-[8px] lg:text-[10px] font-black text-gray-500 uppercase tracking-widest relative z-10">
                                <div>M</div><div>T</div><div>W</div><div>T</div><div>F</div><div>S</div><div>S</div>
                                
                                {/* Generate 30 days for June */}
                                {Array.from({ length: 30 }, (_, i) => i + 1).map((day) => {
                                    const isCurrent = day === 10;
                                    const isDone = [1, 2, 3, 5, 8, 9].includes(day);
                                    
                                    return (
                                        <div key={day} className="mt-2 lg:mt-3">
                                            <div className={`w-7 h-7 lg:w-9 lg:h-9 mx-auto rounded-full flex items-center justify-center transition-all ${
                                                isCurrent 
                                                    ? 'bg-brand-yellow text-brand-dark font-[950] shadow-lg shadow-brand-yellow/20 scale-110 lg:scale-125 z-20 relative' 
                                                    : isDone 
                                                        ? 'bg-brand-yellow/20 text-brand-yellow border border-brand-yellow/30' 
                                                        : 'text-gray-500 hover:bg-white/5'
                                            }`}>
                                                {day}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                            
                            <div className="flex flex-wrap items-center gap-4 lg:gap-6 mt-6 lg:mt-8 text-[8px] lg:text-[9px] font-black uppercase tracking-[0.3em] relative z-10 border-t border-white/5 pt-6">
                                <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-brand-yellow shadow-[0_0_8px_rgba(255,204,0,0.4)]"></div> Today</div>
                                <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-brand-yellow/30 border border-brand-yellow/50"></div> Activity</div>
                                <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full border border-gray-600"></div> Planned</div>
                            </div>
                        </div>

                        {/* Bottom Left: White Card (Goal) */}
                        <div className="lg:col-span-4 bg-white rounded-[2rem] lg:rounded-[2.5rem] p-6 lg:p-10 shadow-sm flex flex-col justify-between border border-brand-tan/10 min-h-[400px] lg:min-h-[440px]">
                            <div className="flex items-center justify-between mb-6 lg:mb-10">
                                <div>
                                    <h3 className="font-[950] text-brand-dark text-lg lg:text-xl uppercase tracking-tighter">Goal</h3>
                                    <p className="text-[8px] lg:text-[9px] text-gray-400 font-black uppercase tracking-[0.3em] mt-2">Targeted Metrics</p>
                                </div>
                            </div>
                            
                            <div className="flex items-center justify-center mb-6 lg:mb-10 relative scale-100 lg:scale-110">
                                <div className="relative w-36 h-36 lg:w-44 lg:h-44 flex items-center justify-center">
                                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                                        <circle cx="50" cy="50" r="42" fill="none" stroke="#f4f2ec" strokeWidth="10" strokeLinecap="round" />
                                        <circle cx="50" cy="50" r="42" fill="none" stroke="#ff6b6b" strokeWidth="10" strokeDasharray="264" strokeDashoffset="80" strokeLinecap="round" />
                                    </svg>
                                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                                        <div className="text-[8px] lg:text-[9px] text-gray-400 font-black uppercase mb-1">Generated</div>
                                        <div className="text-2xl lg:text-3xl font-[950] text-brand-dark tracking-tighter">8.500</div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="flex items-center justify-between mt-auto">
                                <span className="text-[8px] lg:text-[9px] font-black uppercase tracking-widest text-brand-dark/40">Adjust Goal</span>
                                <button className="w-9 h-9 lg:w-11 lg:h-11 bg-brand-dark text-brand-yellow rounded-full flex items-center justify-center shadow-xl transition-transform hover:scale-110">
                                    <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path></svg>
                                </button>
                            </div>
                        </div>

                        {/* Bottom Right: White Card (Activity) */}
                        <div className="lg:col-span-8 bg-white rounded-[2rem] lg:rounded-[2.5rem] p-6 lg:p-10 shadow-sm flex flex-col border border-brand-tan/10">
                            <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-8 lg:mb-10 text-brand-dark gap-4">
                                <h3 className="font-[950] text-lg lg:text-xl uppercase tracking-tighter">Recent Pages</h3>
                                <Link href={route('products.create')} className="flex items-center text-[8px] lg:text-[9px] font-black uppercase tracking-[0.2em] group transition-all">
                                    Add New Product <span className="ml-3 lg:ml-4 w-7 h-7 lg:w-9 lg:h-9 bg-brand-dark text-white rounded-full flex items-center justify-center text-base lg:text-lg leading-none group-hover:bg-brand-red transition-colors shadow-xl">+</span>
                                </Link>
                            </div>
                            
                            <div className="space-y-3 lg:space-y-4">
                                {stats.recent_pages.slice(0, 4).map((page, i) => (
                                    <div key={page.id} className="flex flex-col md:flex-row md:items-center bg-brand-bg/40 p-4 lg:p-5 rounded-[1.5rem] lg:rounded-[2rem] group hover:bg-brand-bg transition-all gap-4 lg:gap-5 border border-transparent hover:border-brand-tan/30">
                                        <div className="flex items-center flex-1 min-w-0">
                                            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-brand-tan rounded-full flex items-center justify-center mr-3 lg:mr-5 shrink-0 overflow-hidden border-2 border-white shadow-lg">
                                                 <img src={`https://ui-avatars.com/api/?name=${page.product?.name}&background=dbd5c4&color=27292d&bold=true`} alt="Avatar" className="w-full h-full object-cover" />
                                            </div>
                                            <div className="min-w-0">
                                                <h4 className="font-[950] text-brand-dark text-sm lg:text-base truncate uppercase tracking-tight group-hover:text-brand-red transition-colors leading-none">{page.headline}</h4>
                                                <p className="text-[9px] lg:text-[10px] text-gray-400 font-black uppercase tracking-widest mt-2">Product: {page.product?.name}</p>
                                            </div>
                                        </div>
                                        
                                        <div className="flex items-center md:ml-auto shrink-0">
                                            <Link href={route('sales-pages.show', page.id)} className="text-gray-300 hover:text-brand-dark transition-all w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center bg-white rounded-full shadow-md border border-brand-tan/10">
                                                <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path></svg>
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Pricing Modal */}
            <Modal show={showPricing} onClose={() => setShowPricing(false)} maxWidth="2xl">
                <div className="p-8 lg:p-12 bg-brand-bg relative overflow-hidden">
                    {/* Decorative Background */}
                    <div className="absolute top-[-20%] right-[-20%] w-64 h-64 bg-brand-yellow rounded-full blur-[80px] opacity-30 z-0"></div>
                    
                    <div className="relative z-10">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl lg:text-4xl font-[950] text-brand-dark uppercase tracking-tighter leading-none mb-4">Choose Your Plan</h2>
                            <p className="text-gray-400 text-[10px] font-black uppercase tracking-[0.3em]">Scalable solutions for your business</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Pro Plan */}
                            <div className="bg-white rounded-[2.5rem] p-8 border-2 border-brand-tan/20 flex flex-col hover:border-brand-yellow transition-all group">
                                <div className="mb-6">
                                    <span className="bg-brand-tan/30 text-brand-dark text-[8px] font-black uppercase tracking-widest px-3 py-1 rounded-full">Pro Plan</span>
                                    <div className="mt-4 flex items-baseline">
                                        <span className="text-4xl font-[950] tracking-tighter">$29</span>
                                        <span className="text-gray-400 text-[10px] font-black uppercase tracking-widest ml-2">/month</span>
                                    </div>
                                </div>
                                <ul className="space-y-4 mb-10 flex-1">
                                    {['Unlimited Sales Pages', 'AI Headline Generator', 'Custom Branding', 'Priority Support'].map((feature, i) => (
                                        <li key={i} className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-brand-dark/70">
                                            <svg className="w-4 h-4 text-brand-yellow" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <button className="w-full bg-brand-dark text-white py-4 rounded-full text-[10px] font-[950] uppercase tracking-[0.2em] group-hover:bg-brand-yellow group-hover:text-brand-dark transition-all">
                                    Get Started
                                </button>
                            </div>

                            {/* Enterprise Plan */}
                            <div className="bg-brand-dark rounded-[2.5rem] p-8 flex flex-col shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4">
                                    <div className="bg-brand-yellow text-brand-dark text-[8px] font-[950] uppercase tracking-widest px-3 py-1 rounded-full">Best Value</div>
                                </div>
                                <div className="mb-6 relative z-10">
                                    <span className="bg-white/10 text-gray-300 text-[8px] font-black uppercase tracking-widest px-3 py-1 rounded-full">Enterprise</span>
                                    <div className="mt-4 flex items-baseline text-white">
                                        <span className="text-4xl font-[950] tracking-tighter">$99</span>
                                        <span className="text-gray-400 text-[10px] font-black uppercase tracking-widest ml-2">/month</span>
                                    </div>
                                </div>
                                <ul className="space-y-4 mb-10 flex-1 relative z-10">
                                    {['Everything in Pro', 'Custom Domain', 'Dedicated Account Manager', '24/7 Phone Support'].map((feature, i) => (
                                        <li key={i} className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-gray-300">
                                            <svg className="w-4 h-4 text-brand-yellow" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 10-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <button className="w-full bg-brand-yellow text-brand-dark py-4 rounded-full text-[10px] font-[950] uppercase tracking-[0.2em] hover:bg-white transition-all relative z-10">
                                    Contact Sales
                                </button>
                            </div>
                        </div>

                        <button 
                            onClick={() => setShowPricing(false)}
                            className="mt-8 text-[9px] font-black uppercase tracking-[0.3em] text-gray-400 hover:text-brand-dark transition-colors block mx-auto"
                        >
                            No thanks, maybe later
                        </button>
                    </div>
                </div>
            </Modal>
        </AuthenticatedLayout>
    );
}