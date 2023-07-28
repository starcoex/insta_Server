import prisma from "../script";
const Mutation = {
    Mutation: {
        deleteUser: (_, { id }, __) => {
            return prisma.user.delete({ where: { id } });
        },
    },
};
export default Mutation;
