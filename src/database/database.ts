import pkg from "@prisma/client";
import "dotenv/config";

const { PrismaClient } = pkg;
export const prisma = new PrismaClient();
