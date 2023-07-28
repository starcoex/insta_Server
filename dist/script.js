import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() { }
main()
    .then(async () => {
    await prisma.$disconnect();
})
    .catch(async (err) => {
    console.log(err);
    await prisma.$disconnect();
    process.exit(1);
});
export default prisma;
