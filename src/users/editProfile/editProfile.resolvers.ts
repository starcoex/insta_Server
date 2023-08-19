import bcrypt, { compareSync } from "bcrypt";
import jwt from "jsonwebtoken";
import prisma from "../../script";
import fs from "fs-extra";
import { Resolvers, ResolversParentTypes } from "../../__generates__/types";
import { protectedResolver } from "../../util/user.protect.Resover";
import { GraphQLUpload, Upload } from "graphql-upload-minimal";
import { uploadAwsS3 } from "../../util/aws.s3.upload";
// import GraphQLUpload from "graphql-upload/GraphQLUpload.mjs";
// import Upload from "graphql-upload/Upload.mjs";

// args token 전송이 안됨

// const resolverFn = async (
//   _,
//   { firstname, lastname, email, password: newPassword, bio, avatar },
//   { dataSources }
// ) => {
//   try {
//     let checkPassword = null;
//     if (newPassword) {
//       checkPassword = bcrypt.hashSync(newPassword, 10);
//     }

//     const useredit = prisma.user.update({
//       where: { id: dataSources.loginUser.id },
//       data: {
//         firstName: firstname,
//         lastName: lastname,
//         email,
//         bio,
//         avatar,
//         password: newPassword ? checkPassword : null,
//       },
//     });

//     return {
//       code: 200,
//       success: true,
//       message: "User Edit Change.",
//       user: useredit,
//     };
//   } catch (error) {
//     return error;
//     // return {
//     //   code: error.extensions.response.status,
//     //   success: false,
//     //   message: error.extensions.response.body,
//     //   user: null,
//     // };
//   }
// };

// const Mutation = {
//   // Upload: require("graphql-upload-minimal").GraphQLUpload,
//   // Upload: GraphQLUpload,
//   Mutation: {
//     editProfileUser: protectedResolver(resolverFn),
//   },
// };

const resolvers: Resolvers = {
  Upload: GraphQLUpload,
  Mutation: {
    editProfileUser: async (
      _,
      { firstname, lastname, email, password: newPassword, bio, avatar },
      { dataSources }
    ) => {
      console.log(avatar);
      try {
        let avatarUrl = null;
        if (avatar) {
          avatarUrl = await uploadAwsS3(
            avatar,
            dataSources.loginUser.id,
            "avatars"
          );
          // avatarUrl = await uploadStarFtp(avatar, dataSources.loginUser.id);
          // avatarUrl = await uploadStarBasicFtp(
          //   avatar,
          //   dataSources.loginUser.id,
          //   "avatars"
          // );

          //@ts-ignore
          // const { filename, createReadStream } = await avatar;
          // console.log(filename, createReadStream);
          // const newFilename = `${
          //   dataSources.loginUser.id
          // }-${Date.now()}-${filename}`;
          // const avatarStream = createReadStream();
          // const writeStream = fs.createWriteStream(
          //   process.cwd() + "/uploads" + newFilename
          // dataSources.loginUser.id +
          // Date.now() +
          // filename
          // );
          // avatarStream.pipe(writeStream);
          // avatarUrl = `http:localhost:4000/static/${newFilename}`;
        }

        let checkPassword = null;
        if (newPassword) {
          checkPassword = bcrypt.hashSync(newPassword, 10);
        }

        const useredit = await prisma.user.update({
          where: { id: dataSources.loginUser.id },
          data: {
            firstName: firstname,
            lastName: lastname,
            email,
            bio,
            ...(avatarUrl && { avatar: avatarUrl }),
            ...(newPassword && { password: newPassword }),
            // password: newPassword ? checkPassword : null,
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
    },
  },
};
// const Mutation = {
//   // Upload: require("graphql-upload-minimal").GraphQLUpload,
//   Upload: GraphQLUpload,
//   Mutation: {
//     editProfileUser: protectedResolver(
//       async (
//         _,
//         { firstname, lastname, email, password: newPassword, bio, avatar },
//         { dataSources }
//       ) => {
//         try {
//           let checkPassword = null;
//           if (newPassword) {
//             checkPassword = bcrypt.hashSync(newPassword, 10);
//           }

//           const useredit = prisma.user.update({
//             where: { id: dataSources.loginUser.id },
//             data: {
//               firstName: firstname,
//               lastName: lastname,
//               email,
//               bio,
//               avatar,
//               password: newPassword ? checkPassword : null,
//             },
//           });

//           return {
//             code: 200,
//             success: true,
//             message: "User Edit Change.",
//             user: useredit,
//           };
//         } catch (error) {
//           return error;
//           // return {
//           //   code: error.extensions.response.status,
//           //   success: false,
//           //   message: error.extensions.response.body,
//           //   user: null,
//           // };
//         }
//       }
//     ),
//   },
// };

export default resolvers;
