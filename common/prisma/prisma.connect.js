import "dotenv/config";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { PrismaClient } from "./generated/prisma/index.js";
import { DATABASE_URL } from "../constants/app.constants.js";

const url = new URL(DATABASE_URL);
console.log({url, });

const adapter = new PrismaMariaDb({
    host: url.hostname,
    user: url.username,
    password: url.password,
    database: url.pathname.substring(1),
    port: url.port,
    connectionLimit: 5,
});
const prisma = new PrismaClient({ adapter });


try {
  const result = await prisma.$queryRaw`SELECT 1+1 AS result`;
  console.log("[PRISMA] Query result:", result);
  console.log('[PRISMA] Connection has been established successfully.');
} catch (error) {
  console.error('[PRIMSA] Unable to connect to the database:', error);
}
export default prisma ;
