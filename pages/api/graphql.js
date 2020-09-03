import { ApolloServer } from 'apollo-server-micro';
import { schema } from '../../src/schema';

const server = new ApolloServer({
  schema
})

const handler = server.createHandler({
  path: '/api/graphql'
})

// dont parse the body, next. apollo got this
export const config = {
  api: {
    bodyParser: false
  }
}

export default handler;