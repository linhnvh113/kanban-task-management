import { PrismaClient } from '@prisma/client';

const prismaClientSingleton = () => new PrismaClient();

declare global {
  /* eslint-disable-next-line */
  var prismaGlobal: undefined | ReturnType<typeof prismaClientSingleton>;
}

/* eslint-disable-next-line */
const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

export default prisma;

/* eslint-disable-next-line */
if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma;
