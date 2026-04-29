import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function Dashboard({ stats, auth }) {
    const user = auth.user;

    return (
        <AuthenticatedLayout>
            <Head title="Dashboard" />

            <div className="py-8 lg:py-12 font-sans text-brand-dark bg-brand-bg min-h-screen px-6 lg:px-12">
                <div className="max-w-[1400px] mx-auto">
                    
                    {/* Unique Dashboard Header */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-16 gap-8">
                        <div>
                            <h1 className="text-4xl md:text-6xl font-[900] tracking-tighter mb-2 text-brand-dark uppercase leading-none">Hi, {user.name.split(' ')[0]}!</h1>
                            <p className="text-gray-400 text-sm md:text-base font-black uppercase tracking-[0.3em] opacity-50 italic">Let's take a look at your activity today</p>
                        </div>
                        <div className="flex flex-col sm:flex-row items-center gap-5">
                            <div className="bg-white rounded-full px-8 py-4 flex items-center shadow-sm w-full sm:w-80 border border-brand-tan/20">
                                <svg className="w-5 h-5 text-gray-300 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                <input type="text" placeholder="Search data..." className="border-none bg-transparent focus:ring-0 text-sm w-full p-0 font-black text-brand-dark placeholder-gray-300 outline-none uppercase tracking-widest" />
                            </div>
                            <button className="bg-brand-dark text-white px-10 py-5 rounded-full text-[10px] font-[950] uppercase tracking-[0.2em] shadow-2xl shadow-brand-dark/30 hover:bg-black transition-all hover:scale-105 shrink-0 w-full sm:w-auto">
                                Upgrade Plan
                            </button>
                        </div>
                    </div>

                    {/* Main Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                        
                        {/* Top Left: Tan Card */}
                        <div className="lg:col-span-7 bg-brand-tan rounded-[3.5rem] p-12 relative overflow-hidden flex flex-col justify-between min-h-[440px] shadow-sm group">
                            <div className="flex justify-between items-start relative z-10">
                                <h3 className="font-[900] text-3xl text-brand-dark max-w-[280px] leading-tight uppercase tracking-tighter">Your Sales Pages Results for Today</h3>
                                <div className="w-14 h-14 bg-brand-dark rounded-full flex items-center justify-center text-brand-yellow shadow-2xl transform group-hover:rotate-12 transition-transform">
                                    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path></svg>
                                </div>
                            </div>
                            
                            <div className="absolute top-[25%] left-[25%] w-32 h-32 bg-brand-dark rounded-full flex items-center justify-center z-20 shadow-2xl border-4 border-brand-tan hover:scale-110 transition-transform">
                                <div className="text-center text-white">
                                    <div className="font-[950] text-3xl leading-none">{stats.products_count}</div>
                                    <div className="text-[9px] text-gray-400 font-black uppercase tracking-widest mt-1">Products</div>
                                </div>
                            </div>
                            
                            <div className="absolute top-[5%] right-[5%] w-96 h-96 bg-brand-yellow rounded-full blur-[80px] opacity-70 z-0 animate-pulse"></div>
                            <div className="absolute top-[35%] right-[20%] w-52 h-52 bg-brand-yellow rounded-full flex items-center justify-center z-20 shadow-2xl border-4 border-brand-tan hover:scale-110 transition-transform">
                                <div className="text-center text-brand-dark">
                                    <div className="font-[950] text-6xl leading-none tracking-tighter">{stats.pages_count}</div>
                                    <div className="text-[10px] font-black uppercase tracking-[0.2em] mt-3">Pages</div>
                                </div>
                            </div>
                            
                            <div className="relative z-10 mt-auto">
                                <div className="flex flex-col gap-5">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-2.5 bg-brand-yellow rounded-full"></div>
                                        <span className="text-[10px] font-black uppercase tracking-widest text-brand-dark/60">Total Products</span>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-2.5 bg-brand-red rounded-full"></div>
                                        <span className="text-[10px] font-black uppercase tracking-widest text-brand-dark/60">Sales Pages Created</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Top Right: Dark Card */}
                        <div className="lg:col-span-5 bg-brand-dark rounded-[3.5rem] p-12 text-white flex flex-col relative overflow-hidden shadow-2xl min-h-[440px]">
                            <div className="flex justify-between items-center mb-12 relative z-10">
                                <h3 className="font-[950] text-2xl uppercase tracking-tighter">Activity Days</h3>
                                <div className="bg-white/10 px-5 py-2.5 rounded-full text-xs text-gray-300 flex items-center font-black uppercase tracking-widest hover:bg-white/20 transition-all">
                                    June <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path></svg>
                                </div>
                            </div>
                            
                            <div className="grid grid-cols-7 gap-4 mb-auto text-center text-[12px] font-black text-gray-500 uppercase tracking-widest relative z-10">
                                <div>M</div><div>T</div><div>W</div><div>T</div><div>F</div><div>S</div><div>S</div>
                                <div className="mt-4"><div className="w-10 h-10 mx-auto rounded-full flex items-center justify-center text-gray-500">6</div></div>
                                <div className="mt-4"><div className="w-10 h-10 mx-auto rounded-full flex items-center justify-center text-gray-500">7</div></div>
                                <div className="mt-4"><div className="w-10 h-10 mx-auto rounded-full flex items-center justify-center text-gray-500">8</div></div>
                                <div className="mt-4"><div className="w-10 h-10 mx-auto rounded-full border-2 border-gray-700 flex items-center justify-center text-gray-400">9</div></div>
                                <div className="mt-4"><div className="w-12 h-12 mx-auto rounded-full bg-brand-yellow text-brand-dark font-[950] flex items-center justify-center shadow-2xl shadow-brand-yellow/30 scale-125">10</div></div>
                                <div className="mt-4"><div className="w-10 h-10 mx-auto rounded-full flex items-center justify-center text-gray-500">11</div></div>
                                <div className="mt-4"><div className="w-10 h-10 mx-auto rounded-full flex items-center justify-center text-gray-500">12</div></div>
                            </div>
                            
                            <div className="flex flex-wrap items-center gap-8 mt-12 text-[10px] font-black uppercase tracking-[0.3em] relative z-10">
                                <div className="flex items-center gap-3"><div className="w-3 h-3 rounded-full border-2 border-brand-yellow shadow-[0_0_10px_rgba(255,204,0,0.5)]"></div> Current</div>
                                <div className="flex items-center gap-3"><div className="w-3 h-3 rounded-full bg-brand-yellow"></div> Done</div>
                            </div>
                        </div>

                        {/* Bottom Left: White Card (Goal) */}
                        <div className="lg:col-span-4 bg-white rounded-[3.5rem] p-12 shadow-sm flex flex-col justify-between border border-brand-tan/10 min-h-[440px]">
                            <div className="flex items-center justify-between mb-12">
                                <div>
                                    <h3 className="font-[950] text-brand-dark text-2xl uppercase tracking-tighter">Goal</h3>
                                    <p className="text-[10px] text-gray-400 font-black uppercase tracking-[0.3em] mt-3">Targeted Metrics</p>
                                </div>
                            </div>
                            
                            <div className="flex items-center justify-center mb-12 relative scale-125">
                                <div className="relative w-48 h-48 flex items-center justify-center">
                                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                                        <circle cx="50" cy="50" r="42" fill="none" stroke="#f4f2ec" strokeWidth="12" strokeLinecap="round" />
                                        <circle cx="50" cy="50" r="42" fill="none" stroke="#ff6b6b" strokeWidth="12" strokeDasharray="264" strokeDashoffset="80" strokeLinecap="round" />
                                    </svg>
                                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                                        <div className="text-[10px] text-gray-400 font-black uppercase mb-1">Generated</div>
                                        <div className="text-4xl font-[950] text-brand-dark tracking-tighter">8.500</div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="flex items-center justify-between mt-auto">
                                <span className="text-[10px] font-black uppercase tracking-widest text-brand-dark/40">Adjust Goal</span>
                                <button className="w-12 h-12 bg-brand-dark text-brand-yellow rounded-full flex items-center justify-center shadow-2xl transition-transform hover:scale-110">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path></svg>
                                </button>
                            </div>
                        </div>

                        {/* Bottom Right: White Card (Activity) */}
                        <div className="lg:col-span-8 bg-white rounded-[3.5rem] p-12 shadow-sm flex flex-col border border-brand-tan/10">
                            <div className="flex justify-between items-center mb-12 text-brand-dark">
                                <h3 className="font-[950] text-2xl uppercase tracking-tighter">Recent Pages</h3>
                                <Link href={route('products.create')} className="flex items-center text-[10px] font-black uppercase tracking-[0.2em] group transition-all">
                                    Add New Product <span className="ml-5 w-10 h-10 bg-brand-dark text-white rounded-full flex items-center justify-center text-xl leading-none group-hover:bg-brand-red transition-colors shadow-2xl">+</span>
                                </Link>
                            </div>
                            
                            <div className="space-y-6">
                                {stats.recent_pages.slice(0, 4).map((page, i) => (
                                    <div key={page.id} className="flex flex-col sm:flex-row sm:items-center bg-brand-bg/40 p-6 rounded-[2.5rem] group hover:bg-brand-bg transition-all gap-6 border border-transparent hover:border-brand-tan/30">
                                        <div className="flex items-center flex-1 min-w-0">
                                            <div className="w-14 h-14 bg-brand-tan rounded-full flex items-center justify-center mr-6 shrink-0 overflow-hidden border-2 border-white shadow-xl">
                                                 <img src={`https://ui-avatars.com/api/?name=${page.product?.name}&background=dbd5c4&color=27292d&bold=true`} alt="Avatar" className="w-full h-full object-cover" />
                                            </div>
                                            <div className="min-w-0">
                                                <h4 className="font-[950] text-brand-dark text-lg truncate uppercase tracking-tight group-hover:text-brand-red transition-colors leading-none">{page.headline}</h4>
                                                <p className="text-[11px] text-gray-400 font-black uppercase tracking-widest mt-3">Product: {page.product?.name}</p>
                                            </div>
                                        </div>
                                        
                                        <div className="flex items-center gap-10 sm:ml-auto shrink-0 justify-between sm:justify-end w-full sm:w-auto">
                                            <div className="flex items-center gap-8">
                                                <div className="text-[10px] text-gray-400 font-black uppercase tracking-widest">Score: <span className="text-brand-dark">{(4 - i) * 2 + 2}/10</span></div>
                                                <div className="flex gap-2">
                                                    {[1,2,3,4,5,6,7,8,9,10].map(n => (
                                                        <div key={n} className={`w-1.5 h-5 rounded-full ${n <= ((4-i)*2 + 2) ? 'bg-brand-red' : 'bg-gray-200'}`}></div>
                                                    ))}
                                                </div>
                                            </div>
                                            <Link href={route('sales-pages.show', page.id)} className="text-gray-300 hover:text-brand-dark transition-all w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-lg border border-brand-tan/10">
                                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path></svg>
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}