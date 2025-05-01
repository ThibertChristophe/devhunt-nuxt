
import { relations } from "drizzle-orm"
import { pgTable, text, integer, varchar, timestamp, boolean, primaryKey } from "drizzle-orm/pg-core"

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
  description: text().notNull(),
  reference: varchar({ length: 55 }),
  active: boolean().default(false).notNull(),
  salaryMin: integer('salary_min'),
  salaryMax: integer('salary_max'),
  company: varchar({ length: 256 }).notNull(),
  location: varchar({ length: 256 }).notNull(),
  deadline: timestamp('deadline').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
})
export type Job = typeof jobs.$inferSelect
export type JobWithSkills = Job & {
  skills: Skill[];
};
export const jobsRelations = relations(jobs, ({ many }) => ({
  jobsToSkills: many(jobsToSkills),
}));


export const skills = pgTable('skills', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 256 }).notNull(),
  color: varchar({ length: 7 }).notNull(),
  createdAt: timestamp('created_at').defaultNow(),
})
export type Skill = typeof skills.$inferSelect
export const skillsRelations = relations(skills, ({ many }) => ({
  jobsToSkills: many(jobsToSkills),
}));


export const jobsToSkills = pgTable(
  'jobs_to_skills',
  {
    jobId: integer('job_id')
      .notNull()
      .references(() => jobs.id),
    skillId: integer('skill_id')
      .notNull()
      .references(() => skills.id),
  },
  (t) => [
    primaryKey({ columns: [t.jobId, t.skillId] })
  ],
);
export const jobsToSkillsRelations = relations(jobsToSkills, ({ one }) => ({
  skill: one(skills, {
    fields: [jobsToSkills.skillId],
    references: [skills.id],
  }),
  job: one(jobs, {
    fields: [jobsToSkills.jobId],
    references: [jobs.id],
  }),
}));