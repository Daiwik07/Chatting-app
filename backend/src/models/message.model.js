import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
    {
        senderId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
        receiverId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
        text: { type: String, required: true },
        image: { type: String },
    },
    { timestamps: true }
);

// Ensure receiverId is indexed but NOT unique
messageSchema.index({ receiverId: 1 }, { unique: false, sparse: true });

const Message = mongoose.model("Message", messageSchema);
export default Message;
