import { GraphQLClient } from 'graphql-request'

export const client = new GraphQLClient('https://api.github.com/graphql', {
  headers: {
    authorization: `bearer ${process.env.GH_PERSONAL_ACCESS_TOKEN}`,
  },
  jsonSerializer: JSON,
})
