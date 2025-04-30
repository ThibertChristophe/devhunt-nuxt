import { ilike, tables, useDrizzle, asc } from "~/server/utils/drizzle"
import { z } from 'zod'

const jobSchema = z.object({
    search: z.string().optional(),
    page: z.coerce.number(),
})
const PAGE_SIZE = 6

export default defineEventHandler(async (event) => {
    const result = await getValidatedQuery(event, jobSchema.safeParse); // result.data
    //const query = getQuery(event)
    //const result = await readValidatedBody(event, userSchema.safeParse) // or `.parse` to directly throw an error

    if (!result.success)
        throw result.error.issues

    const jobsWithSkills = await useDrizzle()
        .select({
            job: tables.jobs,
            skill: tables.skills // Assurez-vous que `tables.skills` est correctement défini
        })
        .from(tables.jobs)
        .leftJoin(tables.jobsToSkills, eq(tables.jobs.id, tables.jobsToSkills.jobId))
        .leftJoin(tables.skills, eq(tables.jobsToSkills.skillId, tables.skills.id))
        .where(result.data.search ? ilike(tables.jobs.title, `%${result.data.search}%`) : undefined)
        .orderBy(asc(tables.jobs.createdAt))
        .limit(PAGE_SIZE)
        .offset((result.data.page - 1) * PAGE_SIZE);

    // Regrouper les compétences par job
    const jobsMap = new Map();
    jobsWithSkills.forEach(({ job, skill }) => {
        if (!jobsMap.has(job.id)) {
            jobsMap.set(job.id, { ...job, skills: [] });
        }
        if (skill) {
            jobsMap.get(job.id).skills.push(skill);
        }
    });

    const jobs = Array.from(jobsMap.values());


    const res = {
        jobs: jobs,
        pagination: {
            totalCount: 2
        }
    }
    return res
})
