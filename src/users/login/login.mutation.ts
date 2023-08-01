import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import prisma from "../../script";
import { Resolvers } from "../../__generates__/types";
const Mutation: Resolvers = {
  Mutation: {
    //@ts-ignore
    login: async (_, { username, password }, context) => {
      try {
        const { dataSources } = context;
        //find user with args.username
        const user = await prisma.user.findFirst({
          where: { userName: username },
        });
        const token = jwt.sign({ id: user.id }, process.env.PRIVATE_KEY);
        if (!user) {
          return {
            code: 404,
            success: false,
            message: "User not found",
            user: null,
          };
        }
        //check password with args.password
        const comparePassword = bcrypt.compareSync(password, user.password);
        if (!comparePassword) {
          return {
            code: 404,
            success: false,
            message: "Incorrect password",
            user: null,
          };
        }
        return {
          code: 200,
          success: true,
          message: "Login Success",
          token: token,
          user,
        };
      } catch (error) {
        return {
          code: error.extensions.response.status,
          success: false,
          message: error.extensions.response.body,
          user: null,
        };
      }
    },
  },
};

export default Mutation;
