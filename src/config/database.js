import pg from "pg";
import dotenv from "dotenv";
dotenv.config();

const { Pool } = pg;

const configDatabase = {
  connectionString: process.env.DATABASE_URL,
};

if (true) configDatabase.ssl = true;

const db = new Pool(configDatabase);

export default db;