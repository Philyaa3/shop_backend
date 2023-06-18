import express from 'express';
import multer from 'multer'
import asyncHandler from 'express-async-handler';
import Product from '../Models/ProductModel.js';

const productRoute = express.Router();
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});

const upload = multer({ storage });

// GET ALL PRODUCT
productRoute.get(
  '/',
  asyncHandler(async (req, res) => {
    const products = await Product.find();
    // console.log(products)
    res.json(products);
  })
);

// GET SINGLE PRODUCT
productRoute.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404);
      throw new Error('Product not found');
    }
  }),
    // UPDATE PRODUCT
    productRoute.post(
        '/:id/edit',
        upload.single('image'),
        asyncHandler(async (req, res) => {
            const { id } = req.params;
            const { name, description, cost } = req.body;

            const updatedProduct = {
                name: name,
                description: description,
                cost: cost,
            };

            if (req.file) {
                updatedProduct.image = `/uploads/${req.file.filename}`; // Set the image path
            }

            const product = await Product.findByIdAndUpdate(id, updatedProduct, { new: true });

            if (product) {
                res.json(product);
            } else {
                res.status(404);
                throw new Error('Product not found');
            }
        })
    ),
);
export default productRoute;
