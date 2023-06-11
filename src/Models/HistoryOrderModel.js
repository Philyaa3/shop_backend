import mongoose from "mongoose";

const historyOrderSchema = mongoose.Schema({
        userId: {
            type: String,
            required: true
        },
        order: [{
            type: mongoose.Schema.Types.Mixed,
            required: true
        }],
        total: {
            type: Number,
            required: true
        },
        status: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    })
const HistoryOrder = mongoose.model("HistoryOrder", historyOrderSchema)

export default HistoryOrder