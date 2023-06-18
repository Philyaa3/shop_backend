import express from "express";
import SubscriptionModel from "../Models/SubscribeModel.js";


const subscribeRoute = express.Router()

subscribeRoute.post('/', async (req, res) => {
    const { email } = req.body;

    try {
        // Create a new subscription document
        const subscription = new SubscriptionModel({ email });

        // Save the subscription to the database
        await subscription.save();

        res.status(201).json({ message: 'Subscription successful' });
    } catch (error) {
        console.error('Subscription error:', error);
        res.status(500).json({ error: 'An error occurred while subscribing' });
    }
})


export default subscribeRoute