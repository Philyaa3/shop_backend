import express from "express";
import authMiddlware from "../Middleware/authMiddlware.js";
import cartController from "../controllers/cartController.js"

const cartRoute = express.Router();

//GET ALL CART ITEMS
cartRoute.get(
    '/:userId', authMiddlware, cartController.getAll
)
//ADD ITEM TO CART
cartRoute.post(
    '/', authMiddlware, cartController.addItem
)
cartRoute.delete(
    '/clear/:userId', authMiddlware, cartController.clearCart
)
//DELETE ITEM FROM CART
cartRoute.delete(
    '/:userId/:itemId', authMiddlware, cartController.deleteItem
)

cartRoute.put(
    '/increment/:userId/:itemId', authMiddlware, cartController.increment
)
cartRoute.put(
    '/decrement/:userId/:itemId', authMiddlware, cartController.decrement
)
export default cartRoute;