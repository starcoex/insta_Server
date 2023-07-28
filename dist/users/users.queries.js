import prisma from "../script";
const Query = {
    Query: {
        user: (_, { id }, __) => {
            return prisma.user.findUnique({ where: { id } });
        },
        users: (_, __, ___) => {
            return prisma.user.findMany();
        },
        seeProfile: (_, { username }, __) => {
            return prisma.user.findUnique({
                where: {
                    userName: username,
                },
            });
        },
    },
};
export default Query;
