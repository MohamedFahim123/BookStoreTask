import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { BookSlideProps } from "../../../Utils/Interfaces";
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../Store/Store';
import Cookies from "js-cookie";
import { addItemToCart, fetchCartItems } from '../../../Store/Slices/CartSlice';

export default function BookSlide({ book, arrOfBookImgs, idx }: BookSlideProps) {
    const navigate = useNavigate();
    const [isHovered, setIsHovered] = useState(false);
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
        <>
            <Box sx={{ display: 'flex', mb: 3, flexDirection: 'column', justifyContent: 'space-between', gap: '10px', textAlign: 'center', overflow: 'hidden', padding: '10px' }}>
                <Box
                    sx={{
                        position: 'relative',
                        height: '250px',
                        boxShadow: '0px 4px 10px 0px #00000026',
                        overflow: 'hidden',
                        borderRadius: '8px',
                        '&:hover .addToCartButton': {
                            opacity: 1,
                            transform: 'translateY(0)',
                        }
                    }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
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
                            objectFit: 'contain',
                            transition: 'transform 0.3s ease',
                            transform: isHovered ? 'scale(1.2)' : 'scale(1)',
                        }}
                    />

                    <Button
                        onClick={() => handleAddToCart(book?._id)}
                        variant="contained"
                        className="addToCartButton"
                        sx={{
                            position: 'absolute',
                            borderRadius: '0',
                            width: '100%',
                            height: '50px',
                            bottom: '15%',
                            left: '0%',
                            transform: 'translateX(0%) translateY(50px)',
                            opacity: 0,
                            backgroundColor: '#ED553B',
                            color: '#ffffff',
                            textTransform: 'uppercase',
                            fontWeight: 'bold',
                            transition: 'all 0.3s ease-in-out',
                            pointerEvents: isHovered ? 'auto' : 'none',
                        }}
                    >
                        Add to Cart
                    </Button>
                </Box>
                <Typography
                    onClick={() => {
                        navigate(`/book-store/book-details/${book?._id}`);
                    }}
                    variant="h4" sx={{ fontSize: '18px', cursor: 'pointer', textTransform: 'capitalize', fontWeight: 'bold', color: '#393280' }}>
                    {book?.name}
                </Typography>
                <Typography variant="h6" sx={{ fontSize: '13px', color: '#888888' }}>
                    {book?.author}
                </Typography>
                <Typography variant="body2" sx={{ fontSize: '16px', fontWeight: '700', color: '#ED553B' }}>
                    $ {book?.price}
                </Typography>
            </Box>
        </>
    )
}
