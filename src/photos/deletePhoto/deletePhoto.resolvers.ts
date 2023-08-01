import { Resolvers } from "../../__generates__/types";
import prisma from "../../script";
import { deleteAwsS3 } from "../../util/aws.s3.upload";

const resolvers: Resolvers = {
  Mutation: {
    deletePhoto: async (parent, { id }, { dataSources }) => {
      const photo = await prisma.photo.findUnique({
        where: { id },
        select: {
          userId: true,
          file: true,
        },
      });

      if (!photo) {
        return {
          code: 404,
          success: false,
          message: "Photo not delete",
        };
      } else if (photo.userId !== dataSources.loginUser.id) {
        return {
          code: 404,
          success: false,
          message: "Not authorized",
        };
      } else if (photo.userId === dataSources.loginUser.id) {
        await prisma.photo.delete({
          where: {
            id,
          },
        });
        await deleteAwsS3(photo.file, "uploads");
        return {
          code: 200,
          success: true,
          message: "Delete Good",
        };
      }
    },
  },
};

export default resolvers;
