import mongoose from 'mongoose'

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: ['name prop is required', true]
  },
  email: {
    type: String,
    required: false
  },
  phone: {
    type: String,
    required: false
  },
})

export default mongoose.model('User', schema)
