import { useLocation } from "react-router-dom";
import Grid from '@mui/material/Grid2';
import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Loader from "../../../Shared/Loader/Loader";

export default function ConfirmOrder() {
    const location = useLocation();
    const { orderId, totalAmount, data } = location.state || {};
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setLoading(false), 500);
    }, []);

    if (loading) {
        return <Loader />
    };

    return (
        <Grid container margin={'auto'} width={'90%'} spacing={4} justifyContent={'center'} padding={2}>
            <Grid size={{ xs: 12, md: 6 }} sx={{ borderRadius: 2, padding: '60px', background: 'linear-gradient(180deg, #FFE5E5 0%, #F5FFFE 100%)', boxShadow: '0px 4px 4px 0px #00000040' }}>
                <Typography sx={{ color: '#393280', fontSize: '30px', fontWeight: 'bold', textAlign: 'center' }}>
                    Order Confirmation
                </Typography>
                <Typography sx={{ color: '#000000', fontWeight: '500', marginTop: '10px', textAlign: 'center' }}>
                    Order ID: {orderId}
                </Typography>
                <Typography sx={{ color: '#000000', fontWeight: '500', marginTop: '10px', textAlign: 'center' }}>
                    Total Amount: ${totalAmount}
                </Typography>
                <Typography sx={{ color: '#393280', fontSize: '30px', marginTop: '20px', fontWeight: 'bold', textAlign: 'center' }}>
                    Order Destination:
                    <Typography sx={{ color: '#000000', fontWeight: '500', textAlign: 'center' }}>
                        {data?.delivery_address?.country} - {data?.delivery_address?.state} - {data?.delivery_address?.city}
                    </Typography>
                </Typography>
            </Grid>
        </Grid>
    );
};
