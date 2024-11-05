import { Box, Typography } from "@mui/material";
import MainPageHeading from "../MainPageHeading/MainPageHeading";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAllBooks } from "../../../Store/Slices/BookSlice";
import { AppDispatch, RootState } from "../../../Store/Store";
import BooksSlider from "../BooksSlider/BooksSlider";

export default function AllBookSlider() {
    const dispatch = useDispatch<AppDispatch>();
    const { books } = useSelector((state: RootState) => state.books);
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchAllBooks({ page: 1, limit: 10 }));
    }, [dispatch]);

    return (
        <Box sx={{ width: '100%', backgroundColor: '#FCECEC', padding: '60px 0' }}>
            <MainPageHeading subTitle="Some quality items" mainTitle="New Release Books" titleColor='#393280' />
            <BooksSlider books={books} />
            <Typography
                onClick={() => {
                    navigate(`/book-store/shop`)
                }}
                variant="body2"
                sx={{
                    transition: 'all 0.3s ease-in-out', width: 'fit-content', marginInlineStart: 'auto', cursor: 'pointer', ":hover": {
                        color: '#393280'
                    }
                }} padding={'10px 30px'} color="#ED553B" fontWeight={'bold'}>
                View all products →
            </Typography>
        </Box>
    );
};