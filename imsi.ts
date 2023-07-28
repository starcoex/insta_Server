// import gql from "graphql-tag";

const { makeExecutableSchema } = require("@graphql-tools/schema");

// export const typeDefs = gql`
//   type Query {
//     movie(id: Int!): Movie
//     movies: [Movie]
//   }

//   type Mutation {
//     createMovie(title: String!, year: Int!, genre: String): Movie
//     deleteMovie(id: Int!): Movie
//     updateMovie(id: Int!, year: Int!): Movie
//   }

//   type Movie {
//     id: Int!
//     title: String!
//     year: Int!
//     genre: String
//     createdAt: String!
//     updatedAt: String!
//   }
// `;

// import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
const path = require("path");
const { loadFilesSync } = require("@graphql-tools/load-files");
const { mergeSchemas } = require("@graphql-tools/schema");
const { mergeTypeDefs, mergeResolvers } = require("@graphql-tools/merge");

// const typeDefs = loadSchemaSync(`${__dirname}/**/*.typeDefs.ts`, {
//   loaders: [new GraphQLFileLoader()],
// });

const typesArray = loadFilesSync(path.join(__dirname, "./**/*.typeDefs"), {
  extensions: ["ts", "graphql"],
});
const typeDefs = mergeTypeDefs(typesArray);
const resoversArray = loadFilesSync(
  path.join(__dirname, "./**/*.{queries, mutation}"),
  {
    extensions: ["ts", "tsx"],
  }
);
const resolvers = mergeResolvers(resoversArray);
const schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;
