import { useDrizzle } from "~/server/utils/drizzle"
import { z } from 'zod'

const jobSchema = z.object({
    id: z.coerce.number(),
})

export default defineEventHandler(async (event) => {
    const result = await getValidatedRouterParams(event, jobSchema.safeParse)

    if (!result.success)
        throw result.error.issues

    /*const job = await useDrizzle().select().from(tables.jobs)
        .where(eq(tables.jobs.id, result.data.id))*/
    const job = await useDrizzle().query.jobs.findFirst({ where: (job, { eq }) => (eq(job.id, result.data.id)) })
    return job
})
