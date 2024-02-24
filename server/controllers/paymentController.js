import { instance } from "./../server.js";


// ORDER CREATION
export const checkout = async (req, res) => {
    var options = {
        amount: Number(req.body.amount * 100),
        currency: "INR",
    };

    try {
        const order = await instance.orders.create(options);
        res.status(200).json({
            success: true,
            order,
        });
    } catch (err) {
        // Handle any errors during order creation
        console.error(err);
        res.status(500).json({ error: "Order creation failed" });
    }
};


// PAYMENT VERIFICATION
export const paymentVerfication = async (req, res) => {

    console.log(req.body)

    res.status(200).json({
        success: true,
    })
};
