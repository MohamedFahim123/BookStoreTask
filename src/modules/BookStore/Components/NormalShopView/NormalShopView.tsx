import { ShopViewProps } from "../../../Utils/Interfaces";
import { arrOfBookImgs } from "../../../Utils/ArrOfBooksImgs";
import BookSlide from "../BookSlide/BookSlide";
import Grid from '@mui/material/Grid2'

export default function NormalShopView({ books }: ShopViewProps) {
    return (
        <>
            {
                books?.map((book, idx) => (
                    <Grid size={{xs: 12,md: 4}} sx={{transition: 'all 0.3s ease-in-out'}} key={idx}>
                        <BookSlide idx={idx} book={book} arrOfBookImgs={arrOfBookImgs} />
                    </Grid>
                ))
            }
        </>
    );
    ;
}