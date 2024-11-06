import { Box, Paper } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { AppDispatch, RootState } from '../../../Store/Store';
import { fetchCartItems } from '../../../Store/Slices/CartSlice';
import CartTable from '../CartTable/CartTable';
import CartTableHead from '../CartTableHead/CartTableHead';
import CartPricesData from '../CartPricesData/CartPricesData';
import Cookies from 'js-cookie';

export default function CartSection() {
    const dispatch = useDispatch<AppDispatch>();
    const { cartData } = useSelector((state: RootState) => state.cart);
    const token = Cookies.get('authBookToken');

    useEffect(() => {
        if (token) {
            dispatch(fetchCartItems(token));
        };
    }, [dispatch, token]);

    return (
        <Box width={'90%'} margin={'auto'}>
            <Grid container spacing={4} justifyContent={'center'} padding={2}>
                <Grid size={{ xs: 12, md: 8 }}>
                    <Paper sx={{ padding: 3, borderRadius: 2, background: 'linear-gradient(82.93deg, #FFE6E6 0%, #F5FFFE 113.52%)', boxShadow: '0px 4px 4px 0px #00000040' }}>
                        <CartTableHead />
                        <CartTable cartData={cartData} token={token} />
                    </Paper>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                    <Paper sx={{ padding: 3, borderRadius: 2, background: 'linear-gradient(180deg, #FFE5E5 0%, #F5FFFE 100%)', boxShadow: '0px 4px 4px 0px #00000040' }}>
                        <CartPricesData currPage='cart' total={cartData?.total} />
                    </Paper>
                </Grid>
            </Grid>
        </Box >
    );
};
