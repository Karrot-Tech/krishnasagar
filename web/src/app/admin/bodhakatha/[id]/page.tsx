
import prisma from '@/lib/db';
import BodhakathaForm from '@/components/admin/BodhakathaForm';
import { notFound } from 'next/navigation';

export default async function AdminBodhakathaEditPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    let bodhakatha = null;
    if (id !== 'new') {
        bodhakatha = await prisma.bodhakatha.findUnique({
            where: { id }
        });
        if (!bodhakatha) notFound();
    }

    return (
        <div>
            <h1 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight mb-6 md:mb-8">
                {id === 'new' ? 'Add New Bodhakatha' : 'Edit Bodhakatha'}
            </h1>
            <BodhakathaForm bodhakatha={bodhakatha} />
        </div>
    );
}
