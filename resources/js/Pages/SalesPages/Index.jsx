import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import PageHeader from '@/Components/PageHeader';
import Modal from '@/Components/Modal';
import DangerButton from '@/Components/DangerButton';
import SecondaryButton from '@/Components/SecondaryButton';
import { useState } from 'react';

export default function Index({ salesPages, status }) {
    const [confirmingDeletion, setConfirmingDeletion] = useState(false);
    const [pageToDelete, setPageToDelete] = useState(null);

    const { delete: destroy, processing } = useForm();

    const confirmDeletion = (id) => {
        setPageToDelete(id);
        setConfirmingDeletion(true);
    };

    const deletePage = () => {
        destroy(route('sales-pages.destroy', pageToDelete), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onFinish: () => setPageToDelete(null),
        });
    };

    const closeModal = () => {
        setConfirmingDeletion(false);
    };

    return (
        <AuthenticatedLayout>
            <Head title="Saved Sales Pages" />

            <PageHeader 
                title="Saved Pages"
                subtitle="Manage and preview the sales pages you've created."
            />

            <div className="py-6 lg:py-12 px-4 sm:px-6 lg:px-12 bg-brand-bg min-h-screen">
                <div className="max-w-[1400px] mx-auto">
                    {status && (
                        <div className="mb-8 bg-emerald-50 border border-emerald-100 text-emerald-700 px-6 py-4 rounded-2xl lg:rounded-3xl flex items-center shadow-sm text-sm">
                            <svg className="w-5 h-5 mr-3 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                            <span className="font-bold">{status}</span>
                        </div>
                    )}

                    {salesPages.length === 0 ? (
                        <div className="bg-white rounded-[2rem] lg:rounded-[3rem] border border-brand-tan/20 p-16 lg:p-32 text-center shadow-sm text-brand-dark">
                            <div className="bg-brand-bg w-16 h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-tan">
                                <svg className="w-8 h-8 lg:w-10 lg:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                            </div>
                            <h3 className="text-lg lg:text-xl font-[900] uppercase text-brand-dark tracking-tighter">No pages yet</h3>
                            <p className="text-gray-400 mt-2 mb-8 font-black text-[9px] lg:text-[10px] uppercase tracking-widest">Select a product and start generating now.</p>
                            <Link href={route('products.index')} className="inline-block px-8 py-4 bg-brand-dark text-white rounded-full font-[950] shadow-xl shadow-brand-dark/20 hover:bg-black transition-all uppercase tracking-[0.2em] text-[10px]">
                                Go to Products &rarr;
                            </Link>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                            {salesPages.map((page) => (
                                <div key={page.id} className="bg-white rounded-[2rem] border border-brand-tan/10 shadow-sm hover:shadow-xl transition-all duration-300 p-6 lg:p-8 flex flex-col group relative overflow-hidden h-full">
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-brand-bg rounded-bl-[3rem] -mr-6 -mt-6 group-hover:bg-brand-tan transition-colors duration-300"></div>
                                    
                                    <button 
                                        onClick={() => confirmDeletion(page.id)} 
                                        className="absolute top-5 right-5 z-20 w-8 h-8 lg:w-9 lg:h-9 flex items-center justify-center rounded-full bg-white/90 backdrop-blur-sm text-gray-300 hover:text-brand-red hover:bg-white transition-all shadow-sm border border-brand-tan/10 hover:shadow-md active:scale-90"
                                        title="Delete Page"
                                    >
                                        <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                    </button>

                                    <div className="relative z-10 flex flex-col h-full">
                                        <div className="flex justify-between items-start mb-6 lg:mb-8">
                                            <div className="px-3 py-1 bg-brand-dark text-brand-yellow rounded-full text-[8px] lg:text-[9px] font-black uppercase tracking-[0.2em] shadow-lg shadow-brand-dark/10 shrink-0">
                                                {page.theme}
                                            </div>
                                        </div>

                                        <h3 className="font-[950] text-base lg:text-lg text-brand-dark mb-2 leading-tight group-hover:text-brand-red transition-colors line-clamp-2 uppercase tracking-tight">{page.headline}</h3>
                                        <p className="text-[9px] lg:text-[10px] text-gray-400 mb-8 flex items-center font-black uppercase tracking-[0.2em]">
                                            <span className="w-2 h-2 bg-brand-yellow rounded-full mr-2 border-2 border-white shadow-sm shrink-0"></span>
                                            <span className="truncate">{page.product?.name}</span>
                                        </p>

                                        <div className="mt-auto pt-6 border-t border-brand-bg flex flex-wrap items-center justify-between gap-4">
                                            <span className="text-[8px] lg:text-[9px] font-black text-gray-300 uppercase tracking-widest">{new Date(page.created_at).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                                            <div className="flex items-center space-x-2">
                                                <a href={route('sales-pages.export', page.id)} className="w-9 h-9 lg:w-10 lg:h-10 flex items-center justify-center bg-white text-gray-400 hover:text-emerald-600 rounded-full shadow-sm hover:shadow-md transition-all border border-brand-tan/10" title="Export HTML">
                                                    <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                                                </a>
                                                <Link href={route('sales-pages.show', page.id)} className="px-5 py-2.5 lg:px-6 lg:py-3 bg-brand-dark text-brand-yellow text-[8px] lg:text-[9px] font-black rounded-full hover:bg-black transition-all shadow-lg shadow-brand-dark/10 uppercase tracking-[0.2em]">
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

            <Modal show={confirmingDeletion} onClose={closeModal}>
                <div className="p-10 text-brand-dark">
                    <h2 className="text-2xl font-[950] uppercase tracking-tighter leading-none mb-4">
                        Confirm Deletion
                    </h2>

                    <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-8 italic opacity-60">
                        Are you sure you want to delete this sales page? 
                        This action cannot be undone and all data will be permanently removed.
                    </p>

                    <div className="flex justify-end gap-5">
                        <SecondaryButton onClick={closeModal} className="rounded-full px-10 py-3 uppercase tracking-[0.2em] text-[10px] font-black border-brand-tan/30 hover:bg-brand-bg transition-all">
                            Cancel
                        </SecondaryButton>

                        <DangerButton
                            className="rounded-full px-10 py-3 uppercase tracking-[0.2em] text-[10px] font-black shadow-xl shadow-brand-red/20 hover:scale-105 transition-all"
                            disabled={processing}
                            onClick={deletePage}
                        >
                            Delete Page
                        </DangerButton>
                    </div>
                </div>
            </Modal>
        </AuthenticatedLayout>
    );
}