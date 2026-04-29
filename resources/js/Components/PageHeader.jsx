import { Link } from '@inertiajs/react';

export default function PageHeader({ title, subtitle, action, showSearch = true, backAction }) {
    return (
        <header className="z-40 bg-brand-bg px-4 sm:px-6 lg:px-12 py-6 lg:py-8 flex flex-col md:flex-row md:items-center justify-between gap-6 shrink-0 border-b border-brand-tan/10">
            <div className="flex items-center space-x-4 lg:space-x-6 overflow-hidden">
                {backAction && (
                    <Link href={backAction} className="w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center bg-white text-gray-400 hover:text-brand-dark rounded-full shadow-sm transition-all shrink-0 border border-brand-tan/10">
                        <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"></path></svg>
                    </Link>
                )}
                <div className="overflow-hidden">
                    <h2 className="font-[800] text-2xl md:text-4xl text-brand-dark leading-[0.9] uppercase tracking-tighter truncate">
                        {title}
                    </h2>
                    {subtitle && (
                        <p className="text-gray-500 text-[9px] md:text-xs font-black uppercase tracking-[0.3em] mt-2 lg:mt-3 truncate opacity-50 italic">
                            {subtitle}
                        </p>
                    )}
                </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
                {showSearch && (
                    <div className="bg-white rounded-full px-5 py-3 lg:px-6 lg:py-4 flex items-center shadow-sm w-full md:w-80 border border-brand-tan/20">
                        <svg className="w-4 h-4 lg:w-5 lg:h-5 text-gray-300 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        <input type="text" placeholder="Search data..." className="border-none bg-transparent focus:ring-0 text-xs lg:text-sm w-full p-0 font-black text-brand-dark placeholder-gray-300 outline-none uppercase tracking-widest" />
                    </div>
                )}
                
                {action && (
                    <div className="shrink-0 w-full sm:w-auto">
                        {action}
                    </div>
                )}
            </div>
        </header>
    );
}