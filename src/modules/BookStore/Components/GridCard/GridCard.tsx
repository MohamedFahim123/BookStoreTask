import { Box, Button, Typography } from "@mui/material";
import { BookSlideProps } from "../../../Utils/Interfaces";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../Store/Store";
import { addItemToCart, fetchCartItems } from "../../../Store/Slices/CartSlice";
import Cookies from "js-cookie";


export default function GridCard({ book, idx, arrOfBookImgs }: BookSlideProps) {
    const navigate = useNavigate();
    const token = Cookies.get('authBookToken');
    const dispatch = useDispatch<AppDispatch>();

    const handleAddToCart = async (id: string | number) => {
        try {
            await dispatch(addItemToCart({ id, token })).unwrap();
            await dispatch(fetchCartItems(token)).unwrap();
        } catch (error) {
            alert('Failed to add item to cart: ' + error);
        };
    };

    return (
        <Box sx={{ boxShadow: '0px 4px 10px 0px #00000026', display: 'flex', mb: 3, gap: '10px', textAlign: 'center', overflow: 'hidden', padding: '10px' }}>
            <Box
                sx={{
                    position: 'relative',
                    height: '250px',
                    width: '40%',
                    overflow: 'hidden',
                    borderRadius: '8px',
                    '&:hover .addToCartButton': {
                        opacity: 1,
                        transform: 'translateY(0)',
                    }
                }}
            >
                <Box
                    component="img"
                    src={arrOfBookImgs[idx % arrOfBookImgs.length]}
                    loading="lazy"
                    alt="Book Cover"
                    sx={{
                        height: '100%',
                        width: '100%',
                        borderRadius: '8px',
                        objectFit: 'cover',
                        transition: 'transform 0.3s ease',
                    }}
                />
            </Box>
            <Box sx={{ width: '100%', padding: '20px', display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'start' }}>
                <Typography
                    onClick={() => {
                        navigate(`/book-store/book-details/${book?._id}`);
                    }}
                    variant="h4" sx={{ fontSize: '30px', cursor: 'pointer', textTransform: 'capitalize', fontWeight: 'bold', color: '#393280' }}>
                    {book?.name}
                </Typography>
                <Typography variant="h6" sx={{ fontSize: '16px', color: '#888888' }}>
                    {book?.author}
                </Typography>
                <Typography variant="body2" sx={{ fontSize: '20px', color: '#888888' }}>
                    {book?.description}
                </Typography>
                <Typography variant="body2" sx={{ fontSize: '20px', fontWeight: '700', color: '#ED553B' }}>
                    $ {book?.price}
                </Typography>
                <Button
                    onClick={() => handleAddToCart(book?._id)}
                    variant="contained"
                    sx={{
                        borderRadius: '0',
                        backgroundColor: '#ED553B',
                        color: '#ffffff',
                        textTransform: 'uppercase',
                        fontWeight: 'bold',
                        transition: 'all 0.3s ease-in-out',
                    }}
                >
                    Add to Cart
                </Button>
            </Box>
        </Box>
    );
};
