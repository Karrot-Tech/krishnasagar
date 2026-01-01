/**
 * Batch Generate Leela Content
 * 
 * This script generates structured Leela content from YouTube transcripts
 * using the AI Agent API at /api/agent/generate-leela
 * 
 * Usage: node scripts/batch-generate-leela.js
 */

const fs = require('fs');
const path = require('path');

// Configuration
const API_URL = 'http://localhost:3000/api/agent/generate-leela';
const TRANSCRIPTS_PATH = path.join(__dirname, '../../data/raw-upstream-data/yt-transcripts-data.json');
const OUTPUT_PATH = path.join(__dirname, '../src/data/leela_articles.json');

// Rate limiting: delay between API calls (ms)
const DELAY_BETWEEN_CALLS = 3000;

// Damu Anna entry to preserve (from existing data)
const DAMU_ANNA_ENTRY = {
    "id": 100,
    "title_english": "The Story of Damu Anna Kasar",
    "youtube_id": "test-damu-anna",
    "youtube_url": "https://www.youtube.com/watch?v=test-damu-anna",
    "description": "The miraculous story of Damu Anna Kasar and his encounter with Sai Baba.",
    "keywords": ["Damu Anna", "Kasar", "miracle", "Sai Baba"],
    "social_tags": ["#DamuAnna", "#SaiBaba", "#Miracle"],
    "story": "## Leela\n\nIn the village of Shirdi, there lived a devout goldsmith named **Damu Anna Kasar**...",
    "doubt": "❓ **Doubt**\n\nDamu Anna questioned: *\"How can a simple fakir know the innermost thoughts of my heart?\"*",
    "revelation": "💡 **Revelation**\n\n*   Baba demonstrated that He is not bound by physical form\n*   The Sadguru sees all, knows all",
    "scriptural_refs": "📖 Sai Satcharitra Chapter 10"
};

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function generateContent(youtubeId, title, transcript) {
    console.log(`\n🔄 Generating content for: ${title}`);
    console.log(`   YouTube ID: ${youtubeId}`);

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                youtube_id: youtubeId,
                title: title,
                transcript: transcript
            })
        });

        if (!response.ok) {
            const error = await response.json();
            console.error(`   ❌ Error: ${error.error}`);
            return null;
        }

        const content = await response.json();
        console.log(`   ✅ Generated successfully!`);
        return content;
    } catch (error) {
        console.error(`   ❌ Network error: ${error.message}`);
        return null;
    }
}

function extractYoutubeId(url) {
    const match = url.match(/[?&]v=([^&]+)/);
    return match ? match[1] : null;
}

async function main() {
    console.log('='.repeat(60));
    console.log('🚀 Batch Leela Content Generator');
    console.log('='.repeat(60));

    // Load transcripts
    console.log('\n📂 Loading transcripts...');
    if (!fs.existsSync(TRANSCRIPTS_PATH)) {
        console.error('❌ Transcripts file not found:', TRANSCRIPTS_PATH);
        process.exit(1);
    }

    const transcripts = JSON.parse(fs.readFileSync(TRANSCRIPTS_PATH, 'utf-8'));
    console.log(`   Found ${transcripts.length} transcripts`);

    // Load existing articles to resume
    let leelaArticles = [DAMU_ANNA_ENTRY];
    if (fs.existsSync(OUTPUT_PATH)) {
        const existing = JSON.parse(fs.readFileSync(OUTPUT_PATH, 'utf-8'));
        if (existing.length > 1) {
            leelaArticles = existing;
            console.log(`   Resuming from ${leelaArticles.length} existing articles`);
        }
    }

    let nextId = leelaArticles.length > 0 ? Math.max(...leelaArticles.map(a => a.id)) + 1 : 101;
    const startIndex = leelaArticles.length - 1; // Subtract 1 (DAMU_ANNA_ENTRY)

    // Process each transcript
    for (let i = startIndex; i < transcripts.length; i++) {
        const t = transcripts[i];
        const youtubeId = extractYoutubeId(t.URL);

        if (!youtubeId) {
            console.log(`⚠️ Skipping (no valid URL): ${t.Title}`);
            continue;
        }

        // Generate content
        const content = await generateContent(youtubeId, t.Title, t.Transcript);

        if (content && content.rejected) {
            console.log(`   ⚠️ Skipped: ${content.reason || 'Transcript rejected'}`);
            continue;
        }

        if (content && content.story) {
            // Create article entry
            const article = {
                id: nextId++,
                title_english: content.suggested_title || t.Title || `Leela ${nextId}`,
                youtube_id: youtubeId,
                youtube_url: `https://www.youtube.com/watch?v=${youtubeId}`,
                description: (content.story || '').substring(0, 200) + '...',
                keywords: content.keywords || ['Sai Baba', 'Shirdi', 'Leela'],
                social_tags: content.social_tags || ['#SaiBaba', '#SaiLeela', '#Shirdi'],
                story: content.story,
                doubt: content.doubt,
                revelation: content.revelation,
                scriptural_refs: content.scriptural_refs
            };

            leelaArticles.push(article);
            console.log(`   📝 Added article ID ${article.id}: ${article.title_english}`);

            // Progress Save (every 2 articles)
            if (leelaArticles.length % 2 === 0) {
                console.log(`   💾 Auto-saving progress...`);
                fs.writeFileSync(OUTPUT_PATH, JSON.stringify(leelaArticles, null, 2), 'utf-8');
            }
        }

        // Rate limiting
        if (i < transcripts.length - 1) {
            console.log(`   ⏱️ Waiting ${DELAY_BETWEEN_CALLS / 1000}s before next call... (${i + 1}/${transcripts.length})`);
            await sleep(DELAY_BETWEEN_CALLS);
        }
    }

    // Write output
    console.log('\n📝 Writing output file...');
    fs.writeFileSync(OUTPUT_PATH, JSON.stringify(leelaArticles, null, 2), 'utf-8');
    console.log(`   ✅ Saved ${leelaArticles.length} articles to ${OUTPUT_PATH}`);

    console.log('\n' + '='.repeat(60));
    console.log('✨ Batch generation complete!');
    console.log('='.repeat(60));
    console.log('\nNext steps:');
    console.log('1. Review the generated content in src/data/leela_articles.json');
    console.log('2. Run: npx tsx src/scripts/seed.ts');
    console.log('3. Verify in browser: http://localhost:3001/leela');
}

main().catch(console.error);
