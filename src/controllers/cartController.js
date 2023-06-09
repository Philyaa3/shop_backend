import CartItem from "../Models/CartItemModel.js";

class CartController {
    async getAll(req, res) {
        const cartItems = await CartItem.find({"userId": req.params.userId});
        // console.log(comments)
        res.json(cartItems);
    }

    async addItem(req, res) {
        const {item} = req.body
        console.log(item)
        const cartItem = new CartItem({userId: item.userId, count: item.count, product: item.product})
        await cartItem.save()
        res.status(200).json({message: "Item was successfully added"})
    }

    async deleteItem(req, res) {
        await CartItem.deleteOne({"userId": req.params.userId, "product._id": req.params.itemId})
        res.status(200).json({message: "Item was successfully deleted"})
    }

    async increment(req, res){
        const modifiedItem = await CartItem.findOne({"userId": req.params.userId, "product._id": req.params.itemId})
        await CartItem.updateOne(modifiedItem, {$set: {"count": modifiedItem.count + 1}}, {upsert: true})
        res.status(200).json({message: "Item was successfully modified"})
    }

    async decrement(req, res){
        const modifiedItem = await CartItem.findOne({"userId": req.params.userId, "product._id": req.params.itemId})
        await CartItem.updateOne(modifiedItem, {$set: {"count": modifiedItem.count - 1}}, {upsert: true})
        res.status(200).json({message: "Item was successfully modified"})
    }
}

export default new CartController();