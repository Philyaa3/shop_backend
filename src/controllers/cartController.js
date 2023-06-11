import CartItem from "../Models/CartItemModel.js";

class CartController {
    async getAll(req, res) {
        const cartItems = await CartItem.find({"userId": req.params.userId});
        // console.log(comments)
        res.json(cartItems);
    }

    async addItem(req, res) {
        const {item} = req.body
        // console.log(item.userId + " " + item.product._id)
        const candidate = await CartItem.findOne({"userId": item.userId, "product._id": item.product._id})
        if (candidate)
            return  res.status(200).json({message: "Item is already exists"})

        const cartItem = new CartItem({userId: item.userId, count: item.count, product: item.product})
        await cartItem.save()
        res.status(200).json({message: "Item was successfully added"})

    }

    async deleteItem(req, res) {
        try {
            await CartItem.deleteOne({"userId": req.params.userId, "product._id": req.params.itemId})
            res.status(200).json({message: "Item was successfully deleted"})
        }catch (e) {
            res.status(400).json({message: "Item wasn't successfully deleted"})
        }


    }
    async clearCart(req, res) {
        console.log("TEST")
        await CartItem.deleteMany({"userId": req.params.userId})
        res.status(200).json({message: "Cart was successful cleared"})
    }

    async increment(req, res) {
        const modifiedItem = await CartItem.findOne({"userId": req.params.userId, "product._id": req.params.itemId})
        await CartItem.updateOne(modifiedItem, {$set: {"count": modifiedItem.count + 1}}, {upsert: true})
        res.status(200).json({message: "Item was successfully modified"})
    }

    async decrement(req, res) {
        const modifiedItem = await CartItem.findOne({"userId": req.params.userId, "product._id": req.params.itemId})
        await CartItem.updateOne(modifiedItem, {$set: {"count": modifiedItem.count - 1}}, {upsert: true})
        res.status(200).json({message: "Item was successfully modified"})
    }
}

export default new CartController();