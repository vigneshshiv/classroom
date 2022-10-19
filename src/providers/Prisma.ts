/**
 * Prisma
 */
import { PrismaClient } from '@prisma/client';

declare global {
  var prisma: PrismaClient | undefined;
}

const prisma = (global.prisma = globalThis.prisma || new PrismaClient());
if (!Object.is(process.env.NODE_ENV, 'production')) globalThis.prisma = prisma;

export default prisma;
