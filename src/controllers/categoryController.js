import Category from "../Models/CategoryMode.js";

class CategoryController {
    async getAll(req, res) {
        const categories = await Category.find();
        res.json(categories)
    }
}
export default new CategoryController()