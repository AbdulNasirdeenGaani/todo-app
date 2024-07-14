import mongoose from "mongoose";

const connectToMongoDb = async () => {
  try {
    await mongoose.connect(process.env.CONNECTION_URL);
    console.log("Database connected successfully");
  } catch (error) {
    console.log(error);
  }
};

export default connectToMongoDb;
