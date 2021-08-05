import User from '../../../models/User'

export default {
  Query: {
    users: () => User.find(),
    user: (_, { id }) => User.findById(id)
  },
  Mutation: {
    createUser: async (_, { data }) => {
      const { _id: id } = await User.create({ ...data })

      return { id, ...data }
    }
  }
}