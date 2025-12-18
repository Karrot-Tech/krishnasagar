
'use server';

import prisma from '@/lib/db';
import { revalidatePath } from 'next/cache';
import { isAdmin } from '@/lib/auth';

// Leela Actions
export async function saveLeela(data: any) {
    if (!await isAdmin()) throw new Error('Unauthorized');
    const { id, ...rest } = data;
    if (id && id !== 'new') {
        await prisma.leela.update({
            where: { id },
            data: rest
        });
    } else {
        await prisma.leela.create({
            data: rest
        });
    }
    revalidatePath('/leela');
    revalidatePath('/admin/leela');
}

export async function deleteLeela(id: string) {
    if (!await isAdmin()) throw new Error('Unauthorized');
    await prisma.leela.delete({ where: { id } });
    revalidatePath('/leela');
    revalidatePath('/admin/leela');
    revalidatePath('/admin/leela', 'layout');
}

// Bodhakatha Actions
export async function saveBodhakatha(data: any) {
    if (!await isAdmin()) throw new Error('Unauthorized');
    const { id, ...rest } = data;
    if (id && id !== 'new') {
        await prisma.bodhakatha.update({
            where: { id },
            data: rest
        });
    } else {
        await prisma.bodhakatha.create({
            data: rest
        });
    }
    revalidatePath('/bodhakatha');
    revalidatePath('/admin/bodhakatha');
}

export async function deleteBodhakatha(id: string) {
    if (!await isAdmin()) throw new Error('Unauthorized');
    await prisma.bodhakatha.delete({ where: { id } });
    revalidatePath('/bodhakatha');
    revalidatePath('/admin/bodhakatha');
    revalidatePath('/admin/bodhakatha', 'layout');
}

// Glossary Actions
export async function saveGlossary(data: any) {
    if (!await isAdmin()) throw new Error('Unauthorized');
    const { id, ...rest } = data;
    if (id && id !== 'new') {
        await prisma.glossary.update({
            where: { id },
            data: rest
        });
    } else {
        await prisma.glossary.create({
            data: rest
        });
    }
    revalidatePath('/glossary');
    revalidatePath('/admin/glossary');
}

export async function deleteGlossary(id: string) {
    if (!await isAdmin()) throw new Error('Unauthorized');
    await prisma.glossary.delete({ where: { id } });
    revalidatePath('/glossary');
    revalidatePath('/admin/glossary');
    revalidatePath('/admin/glossary', 'layout');
}
