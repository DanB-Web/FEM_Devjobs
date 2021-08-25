import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

export const client = new ApolloClient({
    link: new HttpLink({
      uri: process.env.GRAPHQL_URL,
      headers: {
        'x-hasura-admin-secret' : process.env.GRAPHQL_SECRET
      }
    }),
      cache: new InMemoryCache()
  })