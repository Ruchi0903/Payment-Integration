import React from "react";
import { Box, Stack } from "@chakra-ui/react";
import Card from "./Card";
import axios from "axios";


const Home = () => {

    const checkoutHandler = async (amount) => {

        const {data:{key}} = await axios.get("http://localhost:4000/api/getkey")

        const {data: {order}} = await axios.post("http://localhost:4000/api/checkout", {
            amount
        })
        const options = {
            key: key, // Enter the Key ID generated from the Dashboard
            amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            currency: "INR",
            name: "Ruchi yadav",
            description: "Payment Integration with Razorpay",
            image: "https://example.com/your_logo",
            order_id: order.id, 
            callback_url: "https://localhost:4000/api/paymentverification",
            prefill: {
                name: "Gaurav Kumar",
                email: "gaurav.kumar@example.com",
                contact: "9000090000"
            },
            notes: {
                "address": "Razorpay Corporate Office"
            },
            theme: {
                "color": "#3399cc"
            }
        };
        const razor = new window.Razorpay(options);
            razor.open();
        // console.log(data)
    }



  return (
    <Box>
      <Stack h={"100vh"} alignItems={"center"} justifyContent={"center"} direction={["column", "row"]}>

        <Card amount={5000} img={"https://cdn.shopify.com/static/sample-images/garnished.jpeg?width=400&height=300"} checkoutHandler={checkoutHandler} />
        <Card amount={3000} img={"https://cdn.shopify.com/static/sample-images/shoes.jpeg?width=400&height=300"} checkoutHandler={checkoutHandler} />

      </Stack>
    </Box>
  );
};

export default Home;
