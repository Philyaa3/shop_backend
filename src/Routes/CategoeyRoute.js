import express from "express";
import categoryController from "../controllers/categoryController.js";
import authMiddlware from "../Middleware/authMiddlware.js";

const categoryRoute = express.Router();

categoryRoute.get("/", categoryController.getAll)

export default categoryRoute