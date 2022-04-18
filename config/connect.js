const mongoose = require('mongoose')

const connectDb = async() => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
    console.log('MongoDB connected')
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

module.exports = connectDb