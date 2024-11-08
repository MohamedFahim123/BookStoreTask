import { Box, Typography } from "@mui/material";
import MainPageBtn from "../MainPageBtn/MainPageBtn";
import { HeroSlide } from "../../../Utils/Interfaces";
import Grid from '@mui/material/Grid2'


interface SliderSlideInfo {
    MySlide: HeroSlide,
};

export default function HeroSectionSlide({ MySlide }: SliderSlideInfo) {
    return (
        <>
            <Grid container
                sx={{
                    display: 'flex',
                    maxHeight: {
                        xs: '65vh',
                        md: '50vh',
                        lg: '110vh',
                    },
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    background: 'linear-gradient(78.83deg, #FFE6E6 8.52%, #F5FFFE 68.88%, #FFFFFF 101.74%)',
                    padding: {lg: '30px 100px',md: '30px 50px',xs: '30px 70px'},
                }}
            >
                <Grid
                    size={{ lg: 6, md: 9, xs: 12 }}
                    sx={{ maxWidth: { lg: '45%', md: '100%' }, paddingInlineEnd: {lg: '20px',md: 0} }}>
                    <Typography variant="h1" sx={{ fontSize: { lg: '55px', md: '40px', xs: '30px' }, fontWeight: 'bold', color: '#393280', marginBottom: { lg: '20px', md: '15px', xs: '10px' } }}>
                        {MySlide?.title}
                    </Typography>
                    <Typography variant="body2" sx={{ fontSize: { lg: '20px', md: '17px', xs: '15px' }, lineHeight: '1.68', color: '#393280CC', marginBottom: { lg: '20px', md: '15px', xs: '10px' } }}>
                        {MySlide?.body}
                    </Typography>
                    <MainPageBtn name={MySlide?.btnText} path={MySlide?.btnDirection} />
                </Grid>

                <Grid
                    display={'flex'}
                    justifyContent='end'
                    size={{ xs: 0, md: 3, lg: 6 }}
                >
                    <Box
                        component="img"
                        src={MySlide?.coverImg}
                        alt="Book Cover"
                        sx={{ width: '400px',maxWidth: '100%',marginStart: 'auto', height: '100%', borderRadius: '8px' }}
                    />
                </Grid>
            </Grid>
        </>
    )
}
