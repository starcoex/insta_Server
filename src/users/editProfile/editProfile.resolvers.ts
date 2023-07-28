import bcrypt, { compareSync } from "bcrypt";
import jwt from "jsonwebtoken";
import prisma from "../../script";
import { Resolvers, ResolversParentTypes } from "../../__generates__/types";
import { protectedResolver } from "../../util/user.protect.Resover";
import GraphQLUpload from "graphql-upload/GraphQLUpload.mjs";
import Upload from "graphql-upload/Upload.mjs";

// args token 전송이 안됨

const resolverFn = async (
  _,
  { firstname, lastname, email, password: newPassword, bio, avatar },
  { dataSources }
) => {
  try {
    console.log(avatar);
    let checkPassword = null;
    if (newPassword) {
      checkPassword = bcrypt.hashSync(newPassword, 10);
    }

    const useredit = prisma.user.update({
      where: { id: dataSources.loginUser.id },
      data: {
        firstName: firstname,
        lastName: lastname,
        email,
        bio,
        avatar,
        password: newPassword ? checkPassword : null,
      },
    });

    return {
      code: 200,
      success: true,
      message: "User Edit Change.",
      user: useredit,
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
};

const resolvers = {
  // Upload: require("graphql-upload-minimal").GraphQLUpload,
  Upload: Upload,
  Mutation: {
    editProfileUser: protectedResolver(resolverFn),
  },
};

export default resolvers;
