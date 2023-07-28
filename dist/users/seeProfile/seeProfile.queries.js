import prisma from "../../script";
const Query = {
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
export default Query;
