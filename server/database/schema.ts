import { pgTable, text, integer } from "drizzle-orm/pg-core"

export const candidates = pgTable('candidates', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 256 }).notNull(),
  email: varchar({ length: 256 }).notNull().unique(),
  password: varchar({ length: 25 }).notNull(),
  avatar: text(),
  createdAt: timestamp().defaultNow(),
})


