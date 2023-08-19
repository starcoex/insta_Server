import { Resolvers } from "../../__generates__/types";
import prisma from "../../script";
import bcrypt from "bcrypt";

//Type CreateAccountResponse 이것으로 하면 existingUser 체크를 못함

const resolvers: Resolvers = {
  Mutation: {
    createAccount: async (
      _,
      { firstname, lastname, username, email, password },
      __
    ) => {
      try {
        //check if username or email are already on DB.
        const existingUser = await prisma.user.findFirst({
          where: {
            OR: [
              {
                userName: username,
              },
              { email },
            ],
          },
        });
        if (existingUser) {
          throw new Error("This username or password is already taken.");
        }

        const hashPassword = await bcrypt.hash(password, 10);
        const user = await prisma.user.create({
          data: {
            firstName: firstname,
            lastName: lastname,
            userName: username,
            email,
            password: hashPassword,
          },
        });
        return {
          code: 200,
          success: true,
          message: "Create User",
          user: user,
        };
      } catch (error) {
        return error;
        // return {
        //   code: error.extensions.response.status,
        //   success: false,
        //   message: error.extensions.response.body,
        //   user: null,
        // };
      }
    },
  },
};

export default resolvers;
