import { pgTable, text, integer } from "drizzle-orm/pg-core"

export const candidates = pgTable('candidates', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: text().notNull(),
  email: text().notNull().unique(),
  password: text().notNull(),
  avatar: text(),
  createdAt: timestamp().defaultNow(),
})


