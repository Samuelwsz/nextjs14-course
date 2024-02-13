import mongoose from "mongoose"

const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGO_URI
    if (!mongoURI) {
      throw new Error("MONGO_URI environment variable is not defined.")
    }

    await mongoose.connect(mongoURI)
    console.log(`Successfully connected to MongoDB 👍`)
  } catch (error: any) {
    console.error(`ERROR: ${error.message}`)
    process.exit(1)
  }
}

export default connectDB
