import { ShopViewProps } from "../../../Utils/Interfaces";
import { arrOfBookImgs } from "../../../Utils/ArrOfBooksImgs";
import Grid from '@mui/material/Grid2'
import GridCard from "../GridCard/GridCard";

export default function ShopGridView({ books }: ShopViewProps) {
    return (
        <>
            {
                books?.map((book, idx) => (
                    <Grid size={{ xs: 12 }} sx={{ padding: '20px', overflow: 'hidden', transition: 'all 0.3s ease-in-out' }} key={idx}>
                        <GridCard idx={idx} book={book} arrOfBookImgs={arrOfBookImgs} />
                    </Grid>
                ))
            }
        </>
    );
};