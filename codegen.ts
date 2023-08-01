import type { CodegenConfig } from "@graphql-codegen/cli";
import { DateTimeResolver } from "graphql-scalars";
import Upload from "graphql-upload/Upload.mjs";
import GraphQLUpload from "graphql-upload/GraphQLUpload.mjs";

const config: CodegenConfig = {
  schema: "./src/**/*.typeDefs.ts",
  generates: {
    "./src/__generates__/types.ts": {
      plugins: ["typescript", "typescript-resolvers"],
      config: {
        contextType: "../context#DataSourceContext",
        mappers: {
          Photo: "../models#PhotoModel",
          isCommentMe: "../models#CommentModel",
        },
        scalars: {
          DateTime: DateTimeResolver.extensions.codegenScalarType,
          Upload: GraphQLUpload,
        },
      },
    },
  },
};

export default config;
