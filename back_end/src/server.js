import { ApolloServer } from 'apollo-server'
import typeDefs from './graphql/typeDefs'
import resolvers from './graphql/resolvers'
import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost:27017/shopping_list', { useUnifiedTopology: true, useNewUrlParser: true })

const server = new ApolloServer({
  resolvers,
  typeDefs,
})

server.listen().then(({url}) => console.log(`Started server in the ${url}`))
