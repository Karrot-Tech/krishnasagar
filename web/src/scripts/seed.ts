
import { PrismaClient } from '@prisma/client';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import * as fs from 'fs';
import * as path from 'path';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const connectionString = (process.env.DATABASE_URL || '').trim().replace(/^"(.*)"$/, '$1');
if (!connectionString) {
    throw new Error('DATABASE_URL is missing');
}

const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
    console.log('Starting seed...');

    // Cleanup existing data
    console.log('Cleaning up existing data...');
    await prisma.leela.deleteMany({});
    await prisma.glossary.deleteMany({});
    console.log('Cleanup completed.');

    // Path to data
    const dataDir = path.join(process.cwd(), 'src/data');

    // Seed Leelas
    const leelas = JSON.parse(fs.readFileSync(path.join(dataDir, 'leela_articles.json'), 'utf-8'));
    console.log(`Seeding ${leelas.length} leelas...`);
    for (const item of leelas) {
        await prisma.leela.upsert({
            where: { id: item.id.toString() },
            update: {
                title_english: item.title_english,
                // title_hindi removed
                // chapter removed
                transcript: item.transcript,
                story: item.story,
                doubt: item.doubt,
                revelation: item.revelation,
                scriptural_refs: item.scriptural_refs,
                youtube_id: item.youtube_id,
                description: item.description,
                keywords: item.keywords || [],
                social_tags: item.social_tags || [],
                orderId: item.id,
            },
            create: {
                id: item.id.toString(),
                title_english: item.title_english,
                // title_hindi removed
                // chapter removed
                transcript: item.transcript,
                story: item.story,
                doubt: item.doubt,
                revelation: item.revelation,
                scriptural_refs: item.scriptural_refs,
                youtube_id: item.youtube_id,
                description: item.description,
                keywords: item.keywords || [],
                social_tags: item.social_tags || [],
                orderId: item.id,
            },
        });
    }



    // Seed Glossary
    const glossary = JSON.parse(fs.readFileSync(path.join(dataDir, 'glossary.json'), 'utf-8'));
    console.log(`Seeding ${glossary.length} glossary terms...`);
    for (const item of glossary) {
        // Since glossary doesn't have an ID in JSON, we'll use term as a key or just create
        // Actually best to create a unique way, but for now we'll just use term+chapter
        const termId = `${item.term}-${item.chapter}`.toLowerCase().replace(/[^a-z0-9]/g, '-');
        await prisma.glossary.upsert({
            where: { id: termId },
            update: {
                term: item.term,
                chapter: item.chapter?.toString(),
                definition_en: item.definition_en,
                definition_es: item.definition_es,
                definition_hi: item.definition_hi,
            },
            create: {
                id: termId,
                term: item.term,
                chapter: item.chapter?.toString(),
                definition_en: item.definition_en,
                definition_es: item.definition_es,
                definition_hi: item.definition_hi,
            },
        });
    }

    console.log('Seed completed successfully.');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
