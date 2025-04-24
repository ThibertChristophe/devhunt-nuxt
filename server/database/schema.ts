import { pgTable, text, integer, varchar, timestamp, boolean } from "drizzle-orm/pg-core"

export const candidates = pgTable('candidates', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 256 }).notNull(),
  email: varchar({ length: 256 }).notNull().unique(),
  password: varchar({ length: 25 }).notNull(),
  avatar: text(),
  createdAt: timestamp('created_at').defaultNow(),
})
export type Candidate = typeof candidates.$inferSelect


export const jobs = pgTable('jobs', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  title: varchar({ length: 256 }).notNull(),
  description: text(),
  active: boolean().default(false).notNull(),
  minSalary: integer('min_salary'),
  maxSalary: integer('max_salary'),
  createdAt: timestamp('created_at').defaultNow(),
})
export type Job = typeof jobs.$inferSelect
