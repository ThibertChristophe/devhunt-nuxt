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
  reference: varchar({ length: 55 }),
  active: boolean().default(false).notNull(),
  salaryMin: integer('salary_min'),
  salaryMax: integer('salary_max'),
  company: varchar({ length: 256 }).notNull(),
  location: varchar({ length: 256 }).notNull(),
  createdAt: timestamp('created_at').defaultNow(),
})
export type Job = typeof jobs.$inferSelect


export const skills = pgTable('skills', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 256 }).notNull(),
  color: varchar({ length: 7 }).notNull(),
  createdAt: timestamp('created_at').defaultNow(),
})
export type Skill = typeof skills.$inferSelect