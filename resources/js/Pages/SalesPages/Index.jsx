import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import PageHeader from '@/Components/PageHeader';

export default function Index({ salesPages, status }) {
    const { delete: destroy } = useForm();

    const handleDelete = (id) => {
        if (confirm('Delete this sales page?')) {
            destroy(route('sales-pages.destroy', id));
        }
    };

    return (
        <AuthenticatedLayout>
            <Head title="Saved Sales Pages" />

            <PageHeader 
                title="Saved Pages"
                subtitle="Manage and preview the sales pages you've created."
            />

            <div className="py-12 px-6 lg:px-12 bg-brand-bg min-h-screen">
                <div className="max-w-[1400px] mx-auto">
                    {status && (
                        <div className="mb-8 bg-emerald-50 border border-emerald-100 text-emerald-700 px-6 py-4 rounded-3xl flex items-center shadow-sm">
                            <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                            <span className="font-bold">{status}</span>
                        </div>
                    )}

                    {salesPages.length === 0 ? (
                        <div className="bg-white rounded-[2.5rem] border border-brand-tan/20 p-32 text-center shadow-sm text-slate-900">
                            <div className="bg-brand-bg w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 text-brand-tan">
                                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                            </div>
                            <h3 className="text-xl font-[900] uppercase text-brand-dark tracking-tighter">No pages yet</h3>
                            <p className="text-gray-400 mt-2 mb-10 font-bold text-[10px] uppercase tracking-widest">Select a product and start generating now.</p>
                            <Link href={route('products.index')} className="px-10 py-5 bg-brand-dark text-white rounded-full font-black shadow-xl shadow-brand-dark/20 hover:bg-black transition-all uppercase tracking-[0.2em] text-xs">
                                Go to Products &rarr;
                            </Link>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                            {salesPages.map((page) => (
                                <div key={page.id} className="bg-white rounded-[2.5rem] border border-brand-tan/10 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 p-10 flex flex-col group relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-36 h-36 bg-brand-bg rounded-bl-[5rem] -mr-10 -mt-10 group-hover:bg-brand-tan transition-colors duration-500 text-slate-900"></div>
                                    
                                    <div className="relative z-10 flex flex-col h-full text-slate-900">
                                        <div className="flex justify-between items-start mb-8">
                                            <div className="px-4 py-1.5 bg-brand-dark text-brand-yellow rounded-full text-[9px] font-black uppercase tracking-[0.2em] shadow-lg shadow-brand-dark/10">
                                                {page.theme}
                                            </div>
                                            <button onClick={() => handleDelete(page.id)} className="text-slate-300 hover:text-brand-red transition-colors">
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                            </button>
                                        </div>

                                        <h3 className="font-[950] text-xl text-brand-dark mb-3 leading-tight group-hover:text-brand-red transition-colors line-clamp-2 uppercase tracking-tight">{page.headline}</h3>
                                        <p className="text-[11px] text-gray-400 mb-10 flex items-center font-black uppercase tracking-[0.2em]">
                                            <span className="w-2.5 h-2.5 bg-brand-yellow rounded-full mr-3 border-2 border-white shadow-sm"></span>
                                            {page.product?.name}
                                        </p>

                                        <div className="mt-auto pt-8 border-t border-brand-bg flex items-center justify-between">
                                            <span className="text-[9px] font-black text-gray-300 uppercase tracking-widest">{new Date(page.created_at).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                                            <div className="flex items-center space-x-3 text-slate-900 font-bold uppercase">
                                                <a href={route('sales-pages.export', page.id)} className="w-11 h-11 flex items-center justify-center bg-white text-gray-400 hover:text-emerald-600 rounded-full shadow-sm hover:shadow-xl transition-all border border-brand-tan/10" title="Export HTML">
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                                                </a>
                                                <Link href={route('sales-pages.show', page.id)} className="px-6 py-3 bg-brand-dark text-brand-yellow text-[9px] font-black rounded-full hover:bg-black transition-all shadow-xl shadow-brand-dark/20 uppercase tracking-[0.2em]">
                                                    Preview
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}