import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';
import PageHeader from '@/Components/PageHeader';

export default function Edit({ mustVerifyEmail, status }) {
    return (
        <AuthenticatedLayout>
            <Head title="Profile" />

            <PageHeader 
                title="Account Settings"
                subtitle="Manage your profile information and account security."
                showSearch={false}
            />

            <div className="py-12 px-6 lg:px-12 bg-brand-bg min-h-screen">
                <div className="mx-auto max-w-7xl space-y-10">
                    <div className="bg-white p-10 shadow-xl shadow-brand-dark/5 rounded-[2.5rem] border border-brand-tan/10 text-brand-dark">
                        <UpdateProfileInformationForm
                            mustVerifyEmail={mustVerifyEmail}
                            status={status}
                            className="max-w-xl"
                        />
                    </div>

                    <div className="bg-white p-10 shadow-xl shadow-brand-dark/5 rounded-[2.5rem] border border-brand-tan/10 text-brand-dark">
                        <UpdatePasswordForm className="max-w-xl" />
                    </div>

                    <div className="bg-white p-10 shadow-xl shadow-brand-dark/5 rounded-[2.5rem] border border-brand-tan/10 text-brand-dark">
                        <DeleteUserForm className="max-w-xl" />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}