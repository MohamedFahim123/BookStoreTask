import { Box, Typography } from "@mui/material";
import MainPageBtn from "../MainPageBtn/MainPageBtn";
import { HeroSlide } from "../../../Utils/Interfaces";



interface SliderSlideInfo {
    MySlide: HeroSlide,
};

export default function HeroSectionSlide({ MySlide }: SliderSlideInfo) {
    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    background: 'linear-gradient(78.83deg, #FFE6E6 8.52%, #F5FFFE 68.88%, #FFFFFF 101.74%)',
                    padding: '30px 100px',
                }}
            >
                <Box sx={{ maxWidth: '45%', paddingInlineEnd: '20px' }}>
                    <Typography variant="h1" sx={{ fontSize: '55px', fontWeight: 'bold', color: '#393280', marginBottom: '20px' }}>
                        {MySlide?.title}
                    </Typography>
                    <Typography variant="body2" sx={{ fontSize: '20px', lineHeight: '1.68', color: '#393280CC', marginBottom: '20px' }}>
                        {MySlide?.body}
                    </Typography>
                    <MainPageBtn name={MySlide?.btnText} path={MySlide?.btnDirection} />
                </Box>

                <Box
                    component="img"
                    src={MySlide?.coverImg}
                    alt="Book Cover"
                    sx={{ width: '400px', height: '100%', borderRadius: '8px' }}
                />
            </Box>
        </>
    )
}
