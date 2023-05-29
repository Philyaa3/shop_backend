import express from 'express';
import User from './src/Models/UserModel.js';
import Product from './src/Models/ProductModel.js';
import users from './src/data/users.js';
import products from './src/data/Products.js';
import asyncHandler from 'express-async-handler';

const ImportData = express.Router();

ImportData.post(
  '/user',
  asyncHandler(async (req, res) => {
    await User.deleteOne({});
    const importUser = await User.insertMany(users);
    res.send({ importUser });
  }),
);

ImportData.post(
  '/products',
  asyncHandler(async (req, res) => {
    await Product.deleteOne({});
    const importProducts = await Product.insertMany(products);
    res.send({ importProducts });
  }),
);

export default ImportData;
