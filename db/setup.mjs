import postgres from "postgres";
import fs from "fs/promises";
import bcrypt from "bcrypt";
import NextEnv from "@next/env";

const projectDir = process.cwd();
NextEnv.loadEnvConfig(projectDir);

// Configure postgres with more detailed options
const sql = postgres(process.env.POSTGRES_URL, { ssl: "require" });

async function setup() {
  try {
    console.log("Connecting to database...");

    // Test connection
    const result = await sql`SELECT 1 AS connected`;
    console.log("Database connection successful:", result);

    // read schema.sql file using fs
    console.log("Reading schema file...");
    const schema = await fs.readFile("db/schema.sql", "utf-8");

    // execute schema.sql
    console.log("Executing schema...");
    await sql.unsafe(schema);
    console.log("Schema executed successfully");

    // read seed.sql file using fs
    console.log("Reading schema file...");
    const seed = await fs.readFile("db/seed.sql", "utf-8");

    // execute seed.sql
    console.log("Executing seed...");
    await sql.unsafe(seed);
    console.log("Seed executed successfully");

    // create a user
    console.log("Creating user...");
    const password = await bcrypt.hash("password", 10);
    await sql`INSERT INTO
    users (first_name, last_name, email, password)
    VALUES ('Testino', 'Diprueba', 'testino@mail.com', ${password})`;
    console.log("User created successfully");
  } catch (error) {
    console.error("Database setup failed:", error);
    process.exit(1);
  } finally {
    await sql.end();
    console.log("Database connection closed");
  }
}

setup();
