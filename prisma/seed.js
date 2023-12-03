const { PrismaClient } = require("./generated/client");

const prisma = new PrismaClient();

async function main() {
    await prisma.plans.create({
        data: {
            title: "Penggemar Baru",
            slug: "free"
        }
    })
}

main()
    .catch((e) => {
        throw e;
    })
    .finally(async () => {
        await prisma.$disconnect();
    });