import mongoose from "mongoose";
import Product from "./ProductModel.js";

const cartItemSchema = mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    count: {
      type: Number,
      required: true
    },
    product: {
        type: mongoose.Schema.Types.Mixed,
        required: true
    }
})
const CartItem = mongoose.model('CartItem', cartItemSchema);

export default CartItem;