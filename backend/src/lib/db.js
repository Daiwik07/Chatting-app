import mongoose from "mongoose";
import Message from "../models/message.model.js"; // Import the Message model

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`✅ MongoDB connected: ${conn.connection.host}`);

    // Drop unique index on receiverId if it exists
    try {
      await Message.collection.dropIndex("receiverId_1");
      console.log("✅ Dropped unique index on receiverId");
    } catch (err) {
      if (err.codeName !== "IndexNotFound") {
        console.error("⚠️ Error dropping index:", err);
      }
    }
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
  }
};
