import Product from '../../../models/Product'
import User from '../../../models/User'

import path from 'path'


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
    }
  }
}