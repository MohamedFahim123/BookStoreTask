import { Add, Remove } from '@mui/icons-material';
import { Box, Typography, IconButton, TextField } from '@mui/material';
import { fetchCartItems, removeItemFromCart, updateItemQuantity } from '../../../Store/Slices/CartSlice';
import { arrOfBookImgs } from '../../../Utils/ArrOfBooksImgs';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../Store/Store';
import Grid from '@mui/material/Grid2';
import { CartData, CartItem } from '../../../Utils/Interfaces';
import Swal from 'sweetalert2';

interface CartTableCellProps {
    cartData: CartData;
    token: string | undefined;
    item: CartItem;
    index: number;
};

export default function CartTableCell({ cartData, token, item, index }: CartTableCellProps) {
    const dispatch = useDispatch<AppDispatch>();

    const [loadingUpdating, setLoadingUpdating] = useState(false);
    const handleQuantityChange = async (bookId: string, cartId: string, quantity: number) => {
        setLoadingUpdating(true);
        if (token && cartData) {
            const updatedItemsWith_id = cartData?.items?.map(item =>
                item?.book === bookId ? { ...item, quantity } : item
            );
            const updatedItems = updatedItemsWith_id?.map(item => ({
                book: item.book,
                quantity: item.quantity,
            }));
            await dispatch(updateItemQuantity({ cartId, items: updatedItems, token }));
            await dispatch(fetchCartItems(token));
        };
        setLoadingUpdating(false);
    };

    const [loadingRemoving, setLoadingRemoving] = useState(false);
    const handleRemoveItem = async (bookId: string, cartId: string, quantity: number) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to Remove this book!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, Remove!",
        }).then(async (result) => {
            if (result.isConfirmed) {
                setLoadingRemoving(true);
                if (token && cartData) {
                    const updatedItemsWith_id = cartData?.items?.map(item =>
                        item?.book === bookId ? { ...item, quantity } : item
                    );
                    const updatedItems = updatedItemsWith_id?.map(item => ({
                        book: item.book,
                        quantity: item.quantity,
                    }));
                    await dispatch(removeItemFromCart({ cartId, items: updatedItems, token }));
                    await dispatch(fetchCartItems(token));
                };
                setLoadingRemoving(false);
            };
        });
    };

    return (
        <Grid container alignItems="center" color={'#393280'} justifyContent={'space-between'} textAlign={'center'} spacing={2} key={item._id} sx={{ marginBottom: 2, paddingY: 2, borderBottom: '1px solid #E0E0E0' }}>
            <Grid size={{ xs: 1 }}>
                <Typography sx={{ fontWeight: 'bold' }}>{index + 1}</Typography>
            </Grid>
            <Grid size={{ xs: 2 }}>
                <img src={arrOfBookImgs[index % 3]} alt="Book Cover" />
            </Grid>
            <Grid size={{ xs: 4 }}>
                <Typography sx={{ fontWeight: 'bold' }}>{item?.book?.length > 15 ? item?.book?.slice(0, 20) + '...' : item?.book}</Typography>
            </Grid>
            <Grid size={{ xs: 4 }}>
                <Box display="flex" alignItems="center" gap={2}>
                    <IconButton sx={{
                        backgroundColor: '#ED553B',
                        color: '#ffffff',
                        borderRadius: '8px',
                        transition: 'all 0.3s ease-in-out',
                        ":hover": {
                            backgroundColor: '#ff2020',
                        },
                    }} disabled={loadingUpdating || item.quantity <= 1} onClick={() => handleQuantityChange(item.book, cartData._id, item.quantity - 1)}>
                        <Remove />
                    </IconButton>
                    <TextField
                        value={item.quantity}
                        variant="outlined"
                        size="small"
                        sx={{ width: 50, textAlign: 'center' }}
                        disabled={true}
                    />
                    <IconButton
                        sx={{
                            backgroundColor: '#ED553B',
                            color: '#ffffff',
                            borderRadius: '8px',
                            transition: 'all 0.3s ease-in-out',
                            ":hover": {
                                backgroundColor: '#ff2020',
                            },
                        }}
                        disabled={loadingUpdating}
                        onClick={() => handleQuantityChange(item.book, cartData._id, item.quantity + 1)}
                    >
                        <Add />
                    </IconButton>
                </Box>
            </Grid>
            <Grid size={{ xs: 1 }}>
                <IconButton sx={{
                    backgroundColor: '#ED553B',
                    color: '#ffffff',
                    borderRadius: '8px',
                    transition: 'all 0.3s ease-in-out',
                    ":hover": {
                        backgroundColor: '#ff2020',
                    },
                }} disabled={loadingRemoving} onClick={() => handleRemoveItem(item.book, cartData._id, 0)}>
                    <DeleteIcon />
                </IconButton>
            </Grid>
        </Grid>
    );
};