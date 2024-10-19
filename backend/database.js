import mongoose from 'mongoose';
import dotenv from "dotenv";

dotenv.config({ path: './dotenv.env' });

const dataBseConnectn = async () => {
  try {
    await mongoose.connect(process.env.DBlocal);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
};

export default dataBseConnectn;