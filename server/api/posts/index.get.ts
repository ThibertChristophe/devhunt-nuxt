import prisma from "~/lib/prisma";

export default defineEventHandler(async (event) => {
  return {
    jobs: await prisma.job.findMany(),
  };
});
