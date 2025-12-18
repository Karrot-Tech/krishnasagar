const { Client } = require('pg');

async function checkTables() {
    const connectionString = "postgresql://neondb_owner:npg_yiB8ARS9mdVz@ep-withered-sun-ahfl7pwa-pooler.c-3.us-east-1.aws.neon.tech/neondb?sslmode=require";
    const client = new Client({ connectionString });

    try {
        await client.connect();
        const res = await client.query("SELECT table_name FROM information_schema.tables WHERE table_schema='public';");
        console.log('Tables found in Sage Vyasa DB:', res.rows.map(r => r.table_name));
        await client.end();
    } catch (err) {
        console.error('Connection error:', err);
        process.exit(1);
    }
}

checkTables();
