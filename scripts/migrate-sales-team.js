/* eslint-disable @typescript-eslint/no-require-imports */
const { Client } = require("pg");

const client = new Client({
  connectionString:
    "postgresql://postgres:8exng8sfQ2EGee5Y@db.qtssdcytplgputcvdrhe.supabase.co:5432/postgres",
  ssl: { rejectUnauthorized: false },
});

async function migrate() {
  await client.connect();
  console.log("✅ Connected to Supabase PostgreSQL");

  await client.query(`
    ALTER TABLE leads ADD COLUMN IF NOT EXISTS assigned_to text DEFAULT NULL;
  `);
  console.log("✅ Column 'assigned_to' added to leads");

  await client.query(`
    CREATE TABLE IF NOT EXISTS sales_team (
      id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
      name text NOT NULL,
      created_at timestamptz DEFAULT now()
    );
  `);
  console.log("✅ Table 'sales_team' created (or already exists)");

  await client.query(`
    INSERT INTO sales_team (name)
    SELECT 'Michael' WHERE NOT EXISTS (SELECT 1 FROM sales_team WHERE name = 'Michael');
  `);
  await client.query(`
    INSERT INTO sales_team (name)
    SELECT 'Manuel' WHERE NOT EXISTS (SELECT 1 FROM sales_team WHERE name = 'Manuel');
  `);
  console.log("✅ Sales team members Michael & Manuel inserted (if not already present)");

  await client.end();
}

migrate().catch((err) => {
  console.error("❌ Migration failed:", err.message);
  process.exit(1);
});
