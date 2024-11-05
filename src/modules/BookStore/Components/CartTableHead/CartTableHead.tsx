import { Typography } from "@mui/material";
import Grid from '@mui/material/Grid2';
export default function CartTableHead() {
    const tableHeadcells = [
        'Num',
        'Book',
        'Title',
        'Amount',
        'Remove',
    ];

    return (
        <>
            <Typography variant="h6" gutterBottom color="#393280">Cart Details</Typography>
            <Grid container alignItems="center" color={'#393280'} textAlign={'center'} spacing={2} sx={{ borderTop: '1px solid #000', borderBottom: '1px solid #000', marginBottom: 2, paddingY: 1, background: 'linear-gradient(82.93deg, #FFE6E6 0%, #F5FFFE 113.52%)' }}>
                {tableHeadcells.map((cell, index) => (
                    <Grid key={index} size={{ xs: 12, md: (12 / tableHeadcells.length) }} sx={{ fontWeight: 600, color: '#393280' }}>
                        {cell}
                    </Grid>
                ))}
            </Grid>
        </>
    )
}
