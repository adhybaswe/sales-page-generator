import { useState } from 'react';
import { Link, usePage } from '@inertiajs/react';

export default function AuthenticatedLayout({ children }) {
    const user = usePage().props.auth.user;
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className="min-h-screen bg-brand-bg text-brand-dark flex overflow-hidden font-sans">
            {/* Mobile Sidebar Overlay */}
            <div 
                className={`fixed inset-0 z-[60] bg-brand-dark/40 backdrop-blur-sm transition-opacity lg:hidden ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setIsMobileMenuOpen(false)}
            ></div>

            {/* Sidebar (Desktop & Mobile) - Floating Pill Style */}
            <aside className={`fixed inset-y-0 left-0 w-32 z-[70] transition-transform duration-300 transform lg:translate-x-0 flex flex-col items-center py-6 gap-6 ${isMobileMenuOpen ? 'translate-x-0 bg-brand-bg' : '-translate-x-full'}`}>
                
                {/* Logo Capsule */}
                <div className="bg-white rounded-[2rem] p-3 shadow-sm hover:scale-105 transition-transform">
                    <Link href="/dashboard" className="w-12 h-12 flex flex-col items-center justify-center">
                        <svg className="w-8 h-8 text-brand-dark" viewBox="0 0 24 24" fill="currentColor">
                           <path d="M12 2L2 22h20L12 2zm0 4.2l6.9 13.8H5.1L12 6.2z"/>
                        </svg>
                        <span className="text-[9px] font-[900] tracking-widest mt-1 uppercase">Be.</span>
                    </Link>
                </div>

                {/* Main Navigation Capsule */}
                <nav className="bg-white flex-1 w-[88px] rounded-[3rem] shadow-sm py-6 flex flex-col items-center space-y-4">
                    <div className="text-[8px] font-black text-gray-300 uppercase tracking-widest mb-1 opacity-50">Main</div>
                    
                    <Link href={route('dashboard')} className={`w-14 h-14 rounded-full flex items-center justify-center transition-all ${route().current('dashboard') ? 'bg-brand-dark text-brand-yellow shadow-md shadow-brand-dark/20 scale-105' : 'text-gray-400 hover:text-brand-dark hover:bg-gray-50'}`}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                    </Link>

                    <Link href={route('products.index')} className={`w-14 h-14 rounded-full flex items-center justify-center transition-all ${route().current('products.*') ? 'bg-brand-dark text-brand-yellow shadow-md shadow-brand-dark/20 scale-105' : 'text-gray-400 hover:text-brand-dark hover:bg-gray-50'}`}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
                    </Link>

                    <Link href={route('sales-pages.index')} className={`w-14 h-14 rounded-full flex items-center justify-center transition-all ${route().current('sales-pages.*') ? 'bg-brand-dark text-brand-yellow shadow-md shadow-brand-dark/20 scale-105' : 'text-gray-400 hover:text-brand-dark hover:bg-gray-50'}`}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                    </Link>
                    
                    <div className="w-8 h-[2px] bg-brand-bg my-2 rounded-full"></div>
                    <div className="text-[8px] font-black text-gray-300 uppercase tracking-widest mb-1 opacity-50">Acc</div>

                    <Link href={route('profile.edit')} className={`w-14 h-14 rounded-full flex items-center justify-center transition-all ${route().current('profile.edit') ? 'bg-brand-dark text-brand-yellow shadow-md shadow-brand-dark/20 scale-105' : 'text-gray-400 hover:text-brand-dark hover:bg-gray-50'}`}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                    </Link>
                </nav>

                {/* Profile/Logout Capsule */}
                <div className="bg-white w-[88px] rounded-[3rem] shadow-sm py-4 flex flex-col items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-brand-bg border border-gray-100 overflow-hidden mb-2 shadow-inner">
                        <img src={`https://ui-avatars.com/api/?name=${user.name}&background=dbd5c4&color=27292d&bold=true`} alt="Avatar" className="w-full h-full object-cover" />
                    </div>
                    <Link href={route('logout')} method="post" as="button" className="w-12 h-12 rounded-full bg-brand-bg flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path strokeLinecap="round" stroke-linejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                    </Link>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 lg:ml-32 min-h-screen relative flex flex-col h-screen overflow-y-auto overflow-x-hidden scroll-smooth">
                {/* Mobile Top Header */}
                <header className="lg:hidden h-20 bg-brand-bg/80 backdrop-blur-md px-6 flex justify-between items-center sticky top-0 z-50 shrink-0">
                    <div className="flex items-center space-x-2">
                        <svg className="w-6 h-6 text-brand-dark" viewBox="0 0 24 24" fill="currentColor">
                           <path d="M12 2L2 22h20L12 2zm0 4.2l6.9 13.8H5.1L12 6.2z"/>
                        </svg>
                        <span className="font-black tracking-tighter text-brand-dark uppercase">Be.</span>
                    </div>
                    <button 
                        onClick={() => setIsMobileMenuOpen(true)}
                        className="p-3 text-gray-500 bg-white shadow-sm rounded-full"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path strokeLinecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                    </button>
                </header>

                {/* Content Container */}
                <div className="flex-1">
                    {children}
                </div>
            </main>
        </div>
    );
}