import mongoose from "mongoose";

const commentSchema = mongoose.Schema(
    {
        _id: {
            type: String,
            required: true
        },
        userId: {
            type: String,
            required: true
        },
        itemId: {
          type: String,
          required: true
        },
        text: {
            type: String,
            required: true
        },
        rating: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true
    }
)
const Comment = mongoose.model('Comment', commentSchema);

export default Comment;