import prisma from "~/lib/prisma";

export default defineEventHandler(async (event) => {
  return {
    posts: await prisma.post.findMany(),
  };
});
