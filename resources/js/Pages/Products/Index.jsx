import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { useState } from 'react';
import PageHeader from '@/Components/PageHeader';
import Modal from '@/Components/Modal';
import DangerButton from '@/Components/DangerButton';
import SecondaryButton from '@/Components/SecondaryButton';

export default function Index({ products, status }) {
    const [loading, setLoading] = useState(false);
    const [confirmingProductDeletion, setConfirmingProductDeletion] = useState(false);
    const [productToDelete, setProductToDelete] = useState(null);
    
    const { delete: destroy, post, processing } = useForm();

    const handleGenerate = (e, productId) => {
        e.preventDefault();
        const theme = e.target.theme.value;
        setLoading(true);
        post(route('sales-pages.generate', productId), {
            data: { theme },
            onFinish: () => setLoading(false),
        });
    };

    const confirmProductDeletion = (product) => {
        setProductToDelete(product);
        setConfirmingProductDeletion(true);
    };

    const deleteProduct = () => {
        destroy(route('products.destroy', productToDelete.id), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onFinish: () => setProductToDelete(null),
        });
    };

    const closeModal = () => {
        setConfirmingProductDeletion(false);
    };

    return (
        <AuthenticatedLayout>
            <Head title="My Products" />

            <PageHeader 
                title="My Products"
                subtitle="Manage and generate sales pages."
                action={
                    <Link href={route('products.create')} className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 bg-brand-dark border border-transparent rounded-full font-black text-[10px] text-white uppercase tracking-[0.2em] hover:bg-black transition shadow-2xl shadow-brand-dark/20 hover:scale-105 active:scale-95">
                        + Add Product
                    </Link>
                }
            />

            {/* Loading Overlay */}
            {loading && (
                <div className="fixed inset-0 z-[200] flex items-center justify-center bg-brand-dark/60 backdrop-blur-md text-white p-6">
                    <div className="text-center">
                        <div className="relative w-20 h-24 mx-auto mb-6">
                            <div className="absolute inset-0 border-4 border-white/20 rounded-full"></div>
                            <div className="absolute inset-0 border-4 border-t-brand-yellow rounded-full animate-spin"></div>
                        </div>
                        <h3 className="text-xl font-black mb-2 tracking-tight uppercase">AI is working...</h3>
                    </div>
                </div>
            )}

            <div className="py-6 lg:py-12 px-4 sm:px-6 lg:px-12 bg-brand-bg min-h-screen">
                <div className="max-w-[1400px] mx-auto">
                    {status && (
                        <div className="mb-8 bg-emerald-50 border border-emerald-100 text-emerald-700 px-6 py-4 rounded-2xl lg:rounded-3xl flex items-center shadow-sm text-sm">
                            <svg className="w-5 h-5 mr-3 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                            <span className="font-bold">{status}</span>
                        </div>
                    )}

                    {/* Desktop Table View */}
                    <div className="hidden lg:block bg-white rounded-[3rem] shadow-xl shadow-brand-dark/5 border border-brand-tan/10 overflow-hidden">
                        <table className="w-full divide-y divide-brand-bg table-fixed">
                            <thead className="bg-brand-bg/30 text-brand-dark">
                                <tr>
                                    <th className="w-1/2 px-10 py-8 text-left text-[10px] font-black text-gray-400 uppercase tracking-widest">Product Info</th>
                                    <th className="w-1/4 px-10 py-8 text-left text-[10px] font-black text-gray-400 uppercase tracking-widest">Price</th>
                                    <th className="px-10 py-8 text-right text-[10px] font-black text-gray-400 uppercase tracking-widest">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="bg-transparent divide-y divide-brand-bg/50">
                                {products.map((product) => (
                                    <tr key={product.id} className="hover:bg-brand-bg/10 transition-colors group">
                                        <td className="px-10 py-10">
                                            <div className="flex flex-col gap-3">
                                                <div className="font-[950] uppercase tracking-tighter text-xl text-brand-dark group-hover:text-brand-red transition-colors leading-none truncate">{product.name}</div>
                                                <div className="text-xs text-gray-400 truncate w-full font-bold uppercase tracking-widest leading-none italic opacity-70">{product.description}</div>
                                                
                                                <div className="flex flex-wrap items-center gap-3 mt-1">
                                                    {product.target_audience.split(/[,]+/).slice(0, 3).map((tag, idx) => (
                                                        <span key={idx} className="bg-brand-bg/50 text-brand-dark px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest border border-brand-tan/10 leading-none">
                                                            {tag.trim()}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-10 py-10 font-[1000] text-xl text-brand-dark leading-none tracking-tighter">
                                            <span className="text-xs font-bold opacity-30 mr-1 italic">Rp</span>{new Intl.NumberFormat('id-ID').format(product.price)}
                                        </td>
                                        <td className="px-10 py-10 text-right">
                                            <div className="flex items-center justify-end space-x-5 text-brand-dark font-bold uppercase">
                                                <form onSubmit={(e) => handleGenerate(e, product.id)} className="flex items-center">
                                                    <div className="flex p-1.5 bg-brand-bg rounded-full border border-brand-tan/10 shadow-inner overflow-hidden">
                                                        <select name="theme" className="text-[10px] font-black uppercase tracking-wider bg-transparent border-none focus:ring-0 py-1 pl-4 pr-10 text-gray-500 cursor-pointer">
                                                            <option value="default">Indigo</option>
                                                            <option value="professional">Pro</option>
                                                            <option value="luxury">Luxury</option>
                                                            <option value="playful">Playful</option>
                                                            <option value="future">Future</option>
                                                        </select>
                                                        <button type="submit" disabled={loading} className="px-6 py-2 bg-brand-dark text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg hover:bg-black transition-all disabled:opacity-50">
                                                            Generate
                                                        </button>
                                                    </div>
                                                </form>
                                                <div className="flex items-center space-x-2">
                                                    <Link href={route('products.edit', product.id)} className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-gray-400 hover:text-brand-dark shadow-sm border border-brand-tan/20 transition-all hover:shadow-md">
                                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                                                    </Link>
                                                    <button onClick={() => confirmProductDeletion(product)} className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-gray-200 hover:text-brand-red shadow-sm border border-brand-tan/20 transition-all hover:shadow-md">
                                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Mobile Card View */}
                    <div className="lg:hidden space-y-6">
                        {products.map((product) => (
                            <div key={product.id} className="bg-white rounded-[2rem] p-6 shadow-xl shadow-brand-dark/5 border border-brand-tan/10">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="min-w-0 flex-1">
                                        <h3 className="font-[950] uppercase tracking-tighter text-lg text-brand-dark truncate">{product.name}</h3>
                                        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest leading-none italic opacity-70 mt-1 truncate">{product.description}</p>
                                    </div>
                                    <div className="ml-4 font-[1000] text-lg text-brand-dark leading-none tracking-tighter">
                                        <span className="text-[10px] font-bold opacity-30 mr-1 italic">Rp</span>{new Intl.NumberFormat('id-ID').format(product.price)}
                                    </div>
                                </div>

                                <div className="flex flex-wrap items-center gap-2 mb-6">
                                    {product.target_audience.split(/[,]+/).slice(0, 3).map((tag, idx) => (
                                        <span key={idx} className="bg-brand-bg/50 text-brand-dark px-2.5 py-1 rounded-full text-[8px] font-black uppercase tracking-widest border border-brand-tan/10 leading-none">
                                            {tag.trim()}
                                        </span>
                                    ))}
                                </div>

                                <div className="space-y-4">
                                    <form onSubmit={(e) => handleGenerate(e, product.id)} className="w-full">
                                        <div className="flex p-1 bg-brand-bg rounded-full border border-brand-tan/10 shadow-inner overflow-hidden">
                                            <select name="theme" className="text-[10px] font-black uppercase tracking-wider bg-transparent border-none focus:ring-0 py-2 pl-4 pr-8 text-gray-500 cursor-pointer flex-1">
                                                <option value="default">Indigo</option>
                                                <option value="professional">Pro</option>
                                                <option value="luxury">Luxury</option>
                                                <option value="playful">Playful</option>
                                                <option value="future">Future</option>
                                            </select>
                                            <button type="submit" disabled={loading} className="px-6 py-2 bg-brand-dark text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg active:scale-95 transition-all">
                                                Generate
                                            </button>
                                        </div>
                                    </form>

                                    <div className="flex items-center gap-3">
                                        <Link href={route('products.edit', product.id)} className="flex-1 py-3 flex items-center justify-center gap-2 rounded-full bg-white text-gray-400 hover:text-brand-dark border border-brand-tan/20 font-black text-[9px] uppercase tracking-widest transition-all">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                                            Edit
                                        </Link>
                                        <button onClick={() => confirmProductDeletion(product)} className="flex-1 py-3 flex items-center justify-center gap-2 rounded-full bg-white text-gray-200 hover:text-brand-red border border-brand-tan/20 font-black text-[9px] uppercase tracking-widest transition-all">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Modal show={confirmingProductDeletion} onClose={closeModal}>
                <div className="p-10 text-brand-dark">
                    <h2 className="text-2xl font-[950] uppercase tracking-tighter leading-none mb-4">
                        Confirm Deletion
                    </h2>

                    <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-8 italic opacity-60">
                        Are you sure you want to delete <span className="text-brand-red">"{productToDelete?.name}"</span>? 
                        This action cannot be undone and all related sales pages will be permanently removed.
                    </p>

                    <div className="flex justify-end gap-5">
                        <SecondaryButton onClick={closeModal} className="rounded-full px-10 py-3 uppercase tracking-[0.2em] text-[10px] font-black border-brand-tan/30 hover:bg-brand-bg transition-all">
                            Cancel
                        </SecondaryButton>

                        <DangerButton
                            className="rounded-full px-10 py-3 uppercase tracking-[0.2em] text-[10px] font-black shadow-xl shadow-brand-red/20 hover:scale-105 transition-all"
                            disabled={processing}
                            onClick={deleteProduct}
                        >
                            Delete Product
                        </DangerButton>
                    </div>
                </div>
            </Modal>
        </AuthenticatedLayout>
    );
}