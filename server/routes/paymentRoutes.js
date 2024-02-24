import express from "express"
import { checkout, paymentVerfication } from "../controllers/paymentController.js";

const router = express.Router();

router.route("/checkout").post(checkout);

router.route("/paymentverification").post(paymentVerfication)

export  default router;