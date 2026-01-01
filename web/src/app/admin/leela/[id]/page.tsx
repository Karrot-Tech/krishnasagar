
import prisma from '@/lib/db';
import LeelaForm from '@/components/admin/LeelaForm';
import { notFound, redirect } from 'next/navigation';

export default async function AdminLeelaEditPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    // Redirect 'new' to AI Generator page
    if (id === 'new') {
        redirect('/admin/leela/generate');
    }

    const leela = await prisma.leela.findUnique({
        where: { id }
    });
    if (!leela) notFound();

    return (
        <div className="max-w-6xl mx-auto p-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-8">
                Edit Leela
            </h1>
            <LeelaForm leela={leela} />
        </div>
    );
}
