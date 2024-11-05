import { CardElement, AddressElement, useStripe, useElements } from "@stripe/react-stripe-js";
import Grid from "@mui/material/Grid2";
import { Box, Button, Paper, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../../Store/Store";
import CartPricesData from "../CartPricesData/CartPricesData";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { BASE_URL } from "../../../Utils/baseUrl";
import Cookies from "js-cookie";

export default function CheckOutForm() {
    const { cartData } = useSelector((state: RootState) => state.cart);
    const authToken = Cookies.get('authBookToken');
    const [submitting, setSubmitting] = useState(false);
    const stripe = useStripe();
    const elements = useElements();
    const navigate = useNavigate();

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const toastId = toast.loading("Please wait, processing your order...");
        if (!stripe || !elements || !authToken || !cartData) {
            return;
        }
        setSubmitting(true);
        const cardElement = elements.getElement(CardElement);
        const addressElement = elements.getElement(AddressElement);

        if (!cardElement || !addressElement) {
            toast.error("Card or Address element not available");
            setSubmitting(false);
            return;
        };
        const address = await addressElement.getValue();
        const { error, token: stripeToken } = await stripe.createToken(cardElement);
        if (error) {
            toast.error(error.message);
            setSubmitting(false);
            return;
        };

        if (stripeToken && address.complete) {
            const orderId = cartData._id;
            const data = {
                token: 'tok_visa',
                delivery_address: {
                    country: address.value.address.country,
                    city: address.value.address.city,
                    state: address.value.address.state,
                    building: 1,
                    street: 'street',
                    floor: 1,
                    appartment: 1,
                    mobile: address.value.phone,
                    additional_info: "additional_info",
                    location: {
                        type: "Point",
                        coordinates: [30.0444, 31.2357]
                    },
                },
            };
            try {
                const res = await axios.post(`${BASE_URL}/order/${orderId}`, data, {
                    headers: {
                        Authorization: `Bearer ${authToken}`,
                    }
                });
                const newOrderId = res?.data?.data?._id;
                const totalAmount = res?.data?.data?.total;
                toast.update(toastId, {
                    render: res?.data?.message || "Order processed successfully!",
                    type: "success",
                    isLoading: false,
                    autoClose: 3000,
                });
                navigate('/book-store/order-confirmation', { state: { orderId: newOrderId, totalAmount, data } });
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    const errorMessage = error.response?.data?.message || 'Failed to process order!';
                    toast.update(toastId, {
                        render: errorMessage,
                        type: "error",
                        isLoading: false,
                        autoClose: 3000,
                    });
                } else {
                    toast.update(toastId, {
                        render: "Unexpected error occurred!",
                        type: "error",
                        isLoading: false,
                        autoClose: 3000,
                    });
                };
            };
        };
        setSubmitting(false);
    };


    return (
        <Box width={'90%'} margin={'auto'}>
            <Grid container spacing={4} justifyContent={'center'} padding={2}>
                <Grid size={{ xs: 12, md: 6 }} sx={{ borderRadius: 2, padding: '60px', background: 'linear-gradient(82.93deg, #FFE6E6 0%, #F5FFFE 113.52%)', boxShadow: '0px 4px 4px 0px #00000040' }}>
                    <Box component="form" onSubmit={handleSubmit}>
                        <Typography sx={{ color: '#000000' }}>
                            Card Data
                        </Typography>
                        <Box sx={{ backgroundColor: '#ffffff', boxShadow: '0 4px 4px 0 #00000020', padding: '10px', borderRadius: '4px', marginBottom: '20px' }}>
                            <CardElement />
                        </Box>
                        <AddressElement
                            options={{
                                mode: 'shipping',
                                fields: {
                                    phone: 'always',
                                }
                            }}
                        />
                        <Button disabled={submitting} type="submit" variant="contained" color="primary" fullWidth sx={{ marginTop: 3, backgroundColor: '#ED553B', color: '#fff' }}>
                            CHECKOUT
                        </Button>
                        <Button type="button" onClick={() => navigate('/book-store/shop')} variant='outlined' color='primary' fullWidth sx={{ marginTop: 3, color: '#ED553B', borderColor: '#ED553B' }}>
                            CONTINUE SHOPPING
                        </Button>
                    </Box>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                    <Paper sx={{ padding: 3, borderRadius: 2, background: 'linear-gradient(180deg, #FFE5E5 0%, #F5FFFE 100%)', boxShadow: '0px 4px 4px 0px #00000040' }}>
                        <CartPricesData currPage="checkout" total={cartData?.total} />
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
}
