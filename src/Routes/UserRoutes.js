import express from 'express';
import controller from "../controllers/authController.js";
import {check} from "express-validator";
import authMiddleware from "../Middleware/authMiddlware.js";

const authRouter = express.Router();
// LOGIN
authRouter.post('/registration',[
    check("username", "Incorrect username input").notEmpty(),
    check("password", "The password must be longer than 8 symbols").isLength({min: 8})
], controller.registration)
authRouter.post('/login', controller.login)
authRouter.get('/users', authMiddleware, controller.testToken)

export default authRouter;
