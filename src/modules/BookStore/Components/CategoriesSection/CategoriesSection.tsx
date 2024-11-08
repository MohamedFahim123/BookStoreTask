import { Box, IconButton } from "@mui/material";
import CategoriesHeading from "../CategoriesHeading/CategoriesHeading";
import { useSelector } from "react-redux";
import { RootState } from "../../../Store/Store";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import catImg1 from '../../../../assets/CategorySection/img1.jpeg';
import catImg2 from '../../../../assets/CategorySection/img2.jpeg';
import catImg3 from '../../../../assets/CategorySection/img3.jpeg';
import MainPageBtn from "../MainPageBtn/MainPageBtn";
import CategoriesSectionSlider from "../CategoriesSectionSlider/CategoriesSectionSlider";

export default function CategoriesSection() {
    const { categories } = useSelector((state: RootState) => state.categories);
    const imgs: string[] = [catImg1, catImg2, catImg3];

    return (
        <Box sx={{ position: 'relative', backgroundColor: '#FFFFFF', width: '90%', margin: 'auto', padding: '50px 0' }}>
            <CategoriesHeading />
            <CategoriesSectionSlider categories={categories} imgs={imgs} />
            <IconButton
                className="swiper-button-category-prev"
                sx={
                    {
                        borderRadius: '50%',
                        padding: '5px',
                        border: '1px solid #ED553B',
                        position: 'absolute',
                        right: 60,
                        top: 80,
                        zIndex: 1,
                        color: '#ED553B',
                        transition: 'all 0.3s ease-in-out',
                        ":hover": {
                            backgroundColor: '#ED553B',
                            color: '#ffffff'
                        }
                    }
                }
            >
                <ArrowBackIcon />
            </IconButton>
            <IconButton
                className="swiper-button-category-next"
                sx={
                    {
                        borderRadius: '50%',
                        padding: '5px',
                        border: '1px solid #ED553B',
                        position: 'absolute',
                        right: 15,
                        top: 80,
                        zIndex: 1,
                        color: '#ED553B',
                        transition: 'all 0.3s ease-in-out',
                        ":hover": {
                            backgroundColor: '#ED553B',
                            color: '#ffffff'
                        }
                    }
                }
            >
                <ArrowForwardIcon />
            </IconButton>
            <Box display={'flex'} mt={5} justifyContent={'center'}>
                <MainPageBtn name="View more →" path="/book-store/shop" />
            </Box>
        </Box>
    );
};