import { ilike, tables, useDrizzle, asc } from "~/server/utils/drizzle"

export default eventHandler<{ query: { query: string, page: number } }>(async (event) => {
    const query = getQuery(event)
    const pageSize = 6

    //const jobs = await useDrizzle().select().from(tables.jobs).where(ilike(tables.jobs.description, `%${query.query}%`))
    const jobs = await useDrizzle().select().from(tables.jobs)
        .where(query.query ? ilike(tables.jobs.description, `%${query.query}%`) : undefined)
        .orderBy(asc(tables.jobs.createdAt))
        .limit(pageSize)
        .offset((query.page - 1) * pageSize);

    const res = {
        jobs: jobs,
        pagination: {
            current_page: query.page,
            total_count: 2
        }
    }
    return res
})
