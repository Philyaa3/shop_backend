import express from 'express';
import dotenv from 'dotenv';
import connectDatabase from './src/config/MongoDB.js';
import ImportData from './DataImport.js';
import productRoute from './src/Routes/ProductRoutes.js';
import { notFound, errorHandler } from './src/Middleware/Errors.js';
import userRouter from './src/Routes/UserRoutes.js';
import cors from "cors";
import commRoute from "./src/Routes/CommentsRoutes.js";

dotenv.config();
connectDatabase();
const app = express();
app.use(express.json());
app.use(cors({origin: "*"}))


// API
app.use('/api/import', ImportData);
app.use('/api/products', productRoute);
app.use('/api/users', userRouter);
app.use('/api/comments', commRoute)

// ERROR HANDLER
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 1000;

app.listen(PORT, console.log(`server run in port ${PORT}`));
