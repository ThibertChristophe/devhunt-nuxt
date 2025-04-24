import { drizzle } from 'drizzle-orm/node-postgres';

import * as schema from '../database/schema'
export { sql, eq, and, or, ilike, asc } from 'drizzle-orm'

export const tables = schema

export function useDrizzle() {
  return drizzle(process.env.DATABASE_URL!, { schema });
}


