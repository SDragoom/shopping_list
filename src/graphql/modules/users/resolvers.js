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
    },
    updateUser: (_, { id, data }) => User.findByIdAndUpdate(id, data, { new: true, useFindAndModify: true }),
    deleteUser: async (_, { id }) => {
      const user = await User.findById(id)
      await User.findByIdAndDelete(id, { useFindAndModify: true })
      return { id: user._id, ...user._doc }
    }
  },
};