import express from 'express';
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import cors from "cors"
import {  Login, Register, getCurrentUser,} from "./Controolers/User.Controolers.js"
import { addProduct, addToCart, allProduct, getYourProducts, updateYourProduct } from './Controolers/Product.controller.js';
import { checkSeller } from './Meedlewares/All.Meedlewares.js';



const app = express();
app.use(express.json())
dotenv.config();
app.use(cors())


app.get("/", (req, res) => {
    res.send("Working...")
})
app.post("/register", Register)
app.post("/login", Login)
app.post("/get-current-user",getCurrentUser )

app.post("/add-product", checkSeller, addProduct);

app.get("/all-products", allProduct);

// app.post("/get-number", getNumber)
// app.post("/send-otp", sendOtp)
// app.post("/verify-otp", verifyOtp)

app.post("/get-your-products", checkSeller, getYourProducts);
app.post("/update-your-product", checkSeller, updateYourProduct);
app.post("/add-cart", addToCart);







mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("Connected to DB...")
})

app.listen(8000, () => {
    console.log("Listening on port 8000")
})
