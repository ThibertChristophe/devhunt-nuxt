import { pgTable, text, integer } from "drizzle-orm/pg-core"

export const candidates = pgTable('candidates', {
  id: integer('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  password: text('password').notNull(),
  avatar: text('avatar'),
  createdAt: integer('created_at').notNull(),
})


