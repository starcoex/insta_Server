import prisma from "../../script";
const resolvers = {
    Query: {
        seeProfile: (_, { username }, __) => {
            return prisma.user.findUnique({
                where: {
                    userName: username,
                },
            });
        },
    },
};
export default resolvers;
