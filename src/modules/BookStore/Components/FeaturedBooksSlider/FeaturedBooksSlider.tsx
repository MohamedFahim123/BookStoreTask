import { Box, Button, Typography } from "@mui/material";
import { BookSchema } from "../../../Utils/Interfaces";
import MainPageBtn from "../MainPageBtn/MainPageBtn";
import { arrOfBookImgs4 } from "../../../Utils/ArrOfBooksImgs";
import { addItemToCart, fetchCartItems } from "../../../Store/Slices/CartSlice";
import { AppDispatch } from "../../../Store/Store";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";

interface FeaturedBookSlideProps {
    book: BookSchema;
    idx: number;
    isBookDetails?: boolean;
};

export default function FeaturedBooksSlider({ book, idx, isBookDetails }: FeaturedBookSlideProps) {
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
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                background: 'linearGradient(#FBEEEE ,#F7FFFE)',
                padding: '60px 0px',
                margin: 'auto 80px',
            }}
        >
            <Box sx={{ maxWidth: '50%', overflow: 'hidden' }}>
                <Box
                    component="img"
                    src={arrOfBookImgs4[(idx % 4)] || arrOfBookImgs4[0]}
                    alt="Book Cover"
                    sx={{ width: '100%', transform: 'scale(1.6)', height: '100%', borderRadius: '8px' }}
                />
            </Box>
            <Box sx={{ width: '50%', padding: '20px' }}>
                <Typography variant="h2" sx={{ fontSize: '55px', fontWeight: 'bold', color: '#393280', marginBottom: '20px' }}>
                    {book?.name}
                </Typography>
                <Typography variant='caption' sx={{ borderTop: '2px solid #ED553B', padding: '15px 0', fontSize: '15px', letterSpacing: '2px', lineHeight: '1.68', color: '#888888' }}>
                    {book?.author}
                </Typography>
                <Typography variant="h5" title={book?.category} sx={{ fontSize: '30px', marginTop: '20px', fontWeight: 'bold', color: '#393280', marginBottom: '10px' }}>
                    {
                        isBookDetails ?
                            ''
                            :
                            book?.category?.slice(0, 20)
                    }
                </Typography>
                <Typography variant="body2" title={book?.category} sx={{ fontSize: '20px', color: '#7A7A7A', marginBottom: '20px' }}>
                    {book?.description}
                </Typography>
                <Typography variant="body2" title={book?.category} sx={{ fontSize: '23px', fontWeight: 'bold', color: '#ED553B', marginBottom: '20px' }}>
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
                {
                    !isBookDetails &&
                    <MainPageBtn name="View more →" path="/book-store/shop" />
                }
            </Box>
        </Box>
    );
};