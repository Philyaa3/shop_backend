import mongoose from "mongoose";

const categorySchema = mongoose.Schema({
        title: {
            type: String
        },
        value: {
            type: String
        }
    },
    {
        timestamps: true
    }
)

const Category = mongoose.model('Category', categorySchema);

export default Category;