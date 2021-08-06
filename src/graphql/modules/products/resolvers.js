import Product from '../../../models/Product'
import User from '../../../models/User'

export default  {
  Product: {
    user: (product) => User.findById(product.user_id)
  },
  Query: {
    products: async () => {
      const allProducts = await Product.find()

      return allProducts
    },
    filteredProducts: () => {
      return Product.find()
    },
    product: (_, { id }) => {
      return Product.findById(id);
    }
  },
  Mutation: {
    createProduct: async (_, { data }) => {
      const { _id: id } = await Product.create({ ...data })

      return { id, ...data }
    },
    updateProduct: (_, { id, data }) => Product.findByIdAndUpdate(id, data, { new: true, useFindAndModify: true }),
    deleteProduct: async (_, { id }) => {
      const product = await Product.findById(id)
      await Product.findByIdAndDelete(id, { useFindAndModify: true })
      return { id: product._id, ...product._doc }
    },
  }
}