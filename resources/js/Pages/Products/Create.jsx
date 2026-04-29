import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import PageHeader from '@/Components/PageHeader';

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        description: '',
        features: '',
        target_audience: '',
        price: '',
        usp: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('products.store'));
    };

    return (
        <AuthenticatedLayout>
            <Head title="Add New Product" />

            <PageHeader 
                title="Add New Product"
                subtitle="Provide your product details for the best copywriting results."
                backAction={route('products.index')}
                showSearch={false}
            />

            <div className="py-6 lg:py-12 px-4 md:px-6 lg:px-12 bg-brand-bg min-h-screen">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-[2rem] lg:rounded-[2.5rem] shadow-xl shadow-brand-dark/5 border border-brand-tan/10 overflow-hidden">
                        <div className="p-6 md:p-12 lg:p-16 text-brand-dark">
                            <form onSubmit={submit} className="space-y-8 lg:space-y-12">
                                <div className="group">
                                    <label className="block text-[10px] font-[900] text-gray-400 uppercase tracking-[0.2em] mb-3 lg:mb-4">Product Name</label>
                                    <input 
                                        type="text" 
                                        value={data.name}
                                        onChange={e => setData('name', e.target.value)}
                                        className="w-full px-6 py-4 lg:px-8 lg:py-5 bg-brand-bg/50 border-none rounded-[1.25rem] lg:rounded-[1.5rem] focus:ring-4 focus:ring-brand-yellow/20 transition-all text-brand-dark font-[800] text-lg lg:text-xl placeholder-gray-300" 
                                        placeholder="e.g. EcoClean Smart Bottle"
                                        required 
                                    />
                                    {errors.name && <div className="text-brand-red text-[10px] mt-2 font-bold uppercase tracking-wider">{errors.name}</div>}
                                </div>

                                <div>
                                    <label className="block text-[10px] font-[900] text-gray-400 uppercase tracking-[0.2em] mb-3 lg:mb-4">Short Description</label>
                                    <textarea 
                                        rows="3"
                                        value={data.description}
                                        onChange={e => setData('description', e.target.value)}
                                        className="w-full px-6 py-4 lg:px-8 lg:py-5 bg-brand-bg/50 border-none rounded-[1.25rem] lg:rounded-[1.5rem] focus:ring-4 focus:ring-brand-yellow/20 transition-all text-brand-dark font-bold text-sm lg:text-base placeholder-gray-300 leading-relaxed" 
                                        placeholder="What is the main purpose of this product?"
                                        required 
                                    />
                                    {errors.description && <div className="text-brand-red text-[10px] mt-2 font-bold uppercase tracking-wider">{errors.description}</div>}
                                </div>

                                <div>
                                    <label className="block text-[10px] font-[900] text-gray-400 uppercase tracking-[0.2em] mb-3 lg:mb-4">Key Features</label>
                                    <textarea 
                                        rows="4"
                                        value={data.features}
                                        onChange={e => setData('features', e.target.value)}
                                        className="w-full px-6 py-4 lg:px-8 lg:py-5 bg-brand-bg/50 border-none rounded-[1.25rem] lg:rounded-[1.5rem] focus:ring-4 focus:ring-brand-yellow/20 transition-all text-brand-dark font-bold text-sm lg:text-base placeholder-gray-300 leading-relaxed" 
                                        placeholder="Separate with commas or new lines"
                                        required 
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
                                    <div>
                                        <label className="block text-[10px] font-[900] text-gray-400 uppercase tracking-[0.2em] mb-3 lg:mb-4">Target Audience</label>
                                        <input 
                                            type="text" 
                                            value={data.target_audience}
                                            onChange={e => setData('target_audience', e.target.value)}
                                            className="w-full px-6 py-4 lg:px-8 lg:py-5 bg-brand-bg/50 border-none rounded-[1.25rem] lg:rounded-[1.5rem] focus:ring-4 focus:ring-brand-yellow/20 transition-all text-brand-dark font-bold text-sm lg:text-base placeholder-gray-300" 
                                            placeholder="e.g. Freelancers, Agency"
                                            required 
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-[10px] font-[900] text-gray-400 uppercase tracking-[0.2em] mb-3 lg:mb-4">Price (IDR)</label>
                                        <input 
                                            type="number" 
                                            value={data.price}
                                            onChange={e => setData('price', e.target.value)}
                                            className="w-full px-6 py-4 lg:px-8 lg:py-5 bg-brand-bg/50 border-none rounded-[1.25rem] lg:rounded-[1.5rem] focus:ring-4 focus:ring-brand-yellow/20 transition-all text-brand-dark font-bold text-sm lg:text-base placeholder-gray-300" 
                                            placeholder="0"
                                            required 
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-[10px] font-[900] text-gray-400 uppercase tracking-[0.2em] mb-3 lg:mb-4">Unique Selling Point</label>
                                    <textarea 
                                        rows="3"
                                        value={data.usp}
                                        onChange={e => setData('usp', e.target.value)}
                                        className="w-full px-6 py-4 lg:px-8 lg:py-5 bg-brand-bg/50 border-none rounded-[1.25rem] lg:rounded-[1.5rem] focus:ring-4 focus:ring-brand-yellow/20 transition-all text-brand-dark font-bold text-sm lg:text-base placeholder-gray-300 leading-relaxed" 
                                        placeholder="Why should they choose you over competitors?"
                                        required 
                                    />
                                </div>

                                <div className="pt-8 lg:pt-10 flex flex-col md:flex-row items-center justify-between gap-6 lg:gap-8 border-t border-brand-bg">
                                    <Link href={route('products.index')} className="text-gray-400 font-black uppercase tracking-widest text-[10px] hover:text-brand-dark transition-colors order-last md:order-first">Cancel Process</Link>
                                    <button 
                                        type="submit" 
                                        disabled={processing}
                                        className="w-full md:w-auto px-10 lg:px-12 py-4 lg:py-5 bg-brand-dark text-brand-yellow rounded-full font-black shadow-2xl shadow-brand-dark/20 hover:bg-black hover:scale-105 active:scale-95 transition-all uppercase tracking-widest text-[10px] lg:text-xs disabled:opacity-50"
                                    >
                                        Save Product &rarr;
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}