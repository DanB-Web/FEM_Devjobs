import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

export const client = new ApolloClient({
    link: new HttpLink({
      uri: 'https://dba-dev-jobs.hasura.app/v1/graphql',
      headers: {
        'x-hasura-admin-secret' : 'wEqjLTN3F95fAvyvN3V9lxGKhL2e8Xn2mF0QB3HB8gfbs1aMq84FNOF28aE8nlop'
      }
    }),
      cache: new InMemoryCache()
  })