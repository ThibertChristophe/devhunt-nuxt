import prisma from '~/server/lib/prisma'

export default defineEventHandler(async (event) => {
  const id = parseInt(getRouterParam(event, 'id') || '')

  if (isNaN(id)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'ID invalide'
    })
  }

  const job = await prisma.job.findUnique({
    where: { id }
  })

  if (!job) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Job non trouvé'
    })
  }

  return job
})
