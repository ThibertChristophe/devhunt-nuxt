import { tables, useDrizzle } from "~/server/utils/drizzle"

export default eventHandler(async () => {
  const candidates = await useDrizzle().select().from(tables.candidates)

  return candidates
})
