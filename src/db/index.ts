import 'dotenv/config';
import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL is not defined');
}

const sql = neon(process.env.DATABASE_URL);
export const index = drizzle(sql);
// pool is not used for neon-http, but exported as null or undefined to keep index.ts compatible
export const pool = undefined;
