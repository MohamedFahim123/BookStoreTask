import { Box, Typography } from "@mui/material";
import BooksCollection from "../../../../assets/OfferBooks/33b43fd3405ee3732f126710cb9f5bee.png";

interface TimeLine {
    head: string,
    body: string,
}

export default function BookOfferSection() {
    const sectionTimeLine: TimeLine[] = [
        {
            head: '768',
            body: 'Days',
        },
        {
            head: '01',
            body: 'Hour',
        },
        {
            head: '27',
            body: 'Mint',
        },
        {
            head: '55',
            body: 'Sec',
        },
    ];
    return (
        <Box sx={{ backgroundColor: '#ffffff', width: '100%', padding: '60px 0' }}>
            <Box
                sx={{ width: '90%', backgroundColor: '#FCEBEA', padding: '60px', margin: 'auto', flexWrap: 'wrap', borderRadius: `12px`, display: 'flex', justifyContent: 'space-between' }}
            >
                <Box sx={{ width: {lg: '50%',md: '50%',xs: '100%'} }}>
                    <Typography variant="h2" color="#463C74" fontSize={{lg: '40px',md: '30px',xs: '20px' }} marginBottom={'20px'} fontWeight={'bold'}>
                        All books are 50% off now! Don't miss such a deal!
                    </Typography>
                    <Typography variant="body2" color="#393280" lineHeight={'1.8'} marginBottom={'20px'} fontSize={{lg: '16px',md: '15px',xs: '14px'}} fontWeight={'400'}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac.
                    </Typography>
                    <Box sx={{ display: 'flex', gap: '20px', justifyContent: 'space-between', alignItems: 'center', width: 'fit-content' }}>
                        {
                            sectionTimeLine.map((item, index) => (
                                <Box key={index} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Typography variant="h6" color="#ED553B" fontSize={'20px'} fontWeight={'bold'} letterSpacing={'2px'}>{item?.head}</Typography>
                                    <Typography variant="body2" textTransform={'uppercase'} color="#000000" fontSize={'14px'} letterSpacing={'2px'} fontWeight={'600'}>{item?.body}</Typography>
                                </Box>
                            ))
                        }
                    </Box>
                </Box>
                <Box sx={{ width: { md: '50%', lg: '50%', xs: '0%' } }} component={'img'} src={BooksCollection} alt="Collection of Books has an offer" />
            </Box>
        </Box>
    );
};