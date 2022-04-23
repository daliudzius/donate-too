import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client'

const graphqlServer = process.env.HASURA_GRAPHQL_URI

export default new ApolloClient({
   link: new HttpLink({
      uri: graphqlServer,
      headers: {
         'x-hasura-admin-secret': process.env.HASURA_ADMIN_SECRET,
      },
   }),
   cache: new InMemoryCache(),
})
