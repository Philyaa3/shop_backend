import HistoryOrder from "../Models/HistoryOrderModel.js";

class HistoryController{
    async getAllByUserId(req, res) {
        const history = await HistoryOrder.find({"userId": req.params.userId})
        res.json(history)
    }
    async saveItem(req, res){
        const {item} = req.body
        const historyItem = new HistoryOrder(item)
        await historyItem.save()
        res.status(200).json({message: "History order was updated"})
    }
    async getAll(req, res) {
        const history = await HistoryOrder.find()
        res.json(history)
    }
}

export default new HistoryController()