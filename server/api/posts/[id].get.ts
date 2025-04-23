import prisma from '~/server/lib/prisma'

export default defineEventHandler(async (event) => {
  const id = parseInt(getRouterParam(event, 'id') || '')

  if (isNaN(id)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'ID invalide'
    })
  }

  const post = await prisma.post.findUnique({
    where: { id }
  })

  if (!post) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Post non trouvé'
    })
  }

  return post
})
