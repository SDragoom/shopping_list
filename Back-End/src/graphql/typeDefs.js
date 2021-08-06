import { mergeTypes, fileLoader } from 'merge-graphql-schemas'
import path from 'path'

const typeGql = fileLoader(path.join(__dirname, 'modules', '**', '*.gql'));
const typeGraphql = fileLoader(path.join(__dirname, 'modules', '**', '*.graphql'));

const typeArray = [...typeGql, typeGraphql];

const typeDefs = mergeTypes(typeArray)

export default typeDefs

