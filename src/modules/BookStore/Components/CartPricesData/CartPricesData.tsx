import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface CartPricesProps {
    total: number | undefined;
    currPage: string;
}

export default function CartPricesData({ total, currPage }: CartPricesProps) {
    const navigate = useNavigate();
    return (
        <>
            <Typography variant="h6" gutterBottom color="#393280">Cart Total Cost</Typography>
            <Box display="flex" justifyContent="space-between" marginTop={2}>
                <Typography>Total</Typography>
                <Typography>{total ? total : 0} $</Typography>
            </Box>
            <Box display="flex" justifyContent="space-between" marginTop={2}>
                <Typography>Tax</Typography>
                <Typography>{(total || 0) * 0.05} $</Typography>
            </Box>
            <Box display="flex" justifyContent="space-between" marginTop={2} borderBottom={`${currPage === 'cart' && '1px solid #E0E0E0'}`} paddingBottom={1}>
                <Typography>Total Cost</Typography>
                <Typography>{(total || 0) * 1.05} $</Typography>
            </Box>
            {
                currPage === 'cart' &&
                <Button disabled={total === 0} onClick={() => navigate('/book-store/check-out')} variant="contained" color="primary" fullWidth sx={{ marginTop: 3, backgroundColor: '#ED553B', color: '#fff' }}>
                    Proceed
                </Button>
            }
        </>
    )
}
