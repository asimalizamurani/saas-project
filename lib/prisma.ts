import { PrismaClient } from "@prisma/client";


const prismaClientSingleTon = () => {
    return new PrismaClient()
}

type prismaClientSingleton = ReturnType<typeof prismaClientSingleTon>;

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient | undefined };

const prisma = globalForPrisma.prisma ??  prismaClientSingleTon();

export default prisma

if(process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma
