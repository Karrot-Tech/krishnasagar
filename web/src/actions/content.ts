
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

export async function getLeelasPaged(page: number = 1, pageSize: number = 20) {
    if (!await isAdmin()) throw new Error('Unauthorized');
    const skip = (page - 1) * pageSize;
    const [items, total] = await Promise.all([
        prisma.leela.findMany({
            skip,
            take: pageSize,
            orderBy: { orderId: 'asc' }
        }),
        prisma.leela.count()
    ]);
    return { items, total, hasMore: total > skip + items.length };
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

export async function getGlossaryPaged(page: number = 1, pageSize: number = 20) {
    if (!await isAdmin()) throw new Error('Unauthorized');
    const skip = (page - 1) * pageSize;
    const [items, total] = await Promise.all([
        prisma.glossary.findMany({
            skip,
            take: pageSize,
            orderBy: { term: 'asc' }
        }),
        prisma.glossary.count()
    ]);
    return { items, total, hasMore: total > skip + items.length };
}

// Public Fetchers (No Auth Required)
export async function getPublicLeelas(page: number = 1, pageSize: number = 10) {
    const skip = (page - 1) * pageSize;
    const [items, total] = await Promise.all([
        prisma.leela.findMany({
            skip,
            take: pageSize,
            orderBy: { orderId: 'asc' }
        }),
        prisma.leela.count()
    ]);
    return {
        items: items.map((item: any) => ({
            ...item,
            createdAt: item.createdAt?.toISOString(),
            updatedAt: item.updatedAt?.toISOString()
        })),
        total,
        hasMore: total > skip + items.length
    };
}

export async function getAdminDashboardStats() {
    if (!await isAdmin()) throw new Error('Unauthorized');

    const [leelaCount, glossaryCount, ticketCount, openTickets] = await Promise.all([
        prisma.leela.count(),
        prisma.glossary.count(),
        prisma.ticket.count(),
        prisma.ticket.count({ where: { status: 'OPEN' } })
    ]);

    return {
        leelaCount,
        glossaryCount,
        ticketCount,
        openTickets
    };
}
