import { ilike, tables, useDrizzle, asc } from "~/server/utils/drizzle"
import { z } from 'zod'

const jobSchema = z.object({
    search: z.string().optional(),
    page: z.coerce.number(),
})
const PAGE_SIZE = 6

export default defineEventHandler<{ query: { search: string, page: number } }>(async (event) => {
    const result = await getValidatedQuery(event, jobSchema.safeParse); // result.data
    //const query = getQuery(event)
    //const result = await readValidatedBody(event, userSchema.safeParse) // or `.parse` to directly throw an error

    if (!result.success)
        throw result.error.issues

    const jobs = await useDrizzle().select().from(tables.jobs)
        .where(result.data.search ? ilike(tables.jobs.description, `%${result.data.search}%`) : undefined)
        .orderBy(asc(tables.jobs.createdAt))
        .limit(PAGE_SIZE)
        .offset((result.data.page - 1) * PAGE_SIZE);

    const res = {
        jobs: jobs,
        pagination: {
            current_page: result.data.page,
            total_count: 2
        }
    }
    return res
})
