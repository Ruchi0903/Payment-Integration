import express, { urlencoded } from "express";
import dotenv from "dotenv";
import paymentRoute from "./routes/paymentRoutes.js";
import cors from "cors";
dotenv.config({ path: "./config/config.env" });


export const app = express();

app.use(cors());
app.use(express.json());
app.use(urlencoded({ extended: true }));

app.use("/api", paymentRoute);

app.get("/api/getkey", (req, res) => {
    res.status(200).json({ key: process.env.RAZORPAY_API_KEY })
})