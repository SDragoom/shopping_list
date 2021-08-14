import mongoose from 'mongoose'

const schema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: ['user id is required to register a product', true]
  },
  name: {
    type: String,
    required: ['name prop is required', true]
  },
  type: {
    type: String,
    required: ['type prop is required', true]
  },
  qty: {
    type: Number,
    required: ['quantity prop is required', true]
  },
})

export default mongoose.model('Product', schema)