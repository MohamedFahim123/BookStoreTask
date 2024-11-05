import { Box, IconButton } from "@mui/material";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { Swiper, SwiperSlide } from "swiper/react";
import { useSelector } from "react-redux";
import { RootState } from "../../../Store/Store";
import FeaturedBooksSlider from "../FeaturedBooksSlider/FeaturedBooksSlider";

export default function FeaturedBooks() {
    const { books } = useSelector((state: RootState) => state.books);

    return (
        <Box sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            background: 'linear-gradient(78.43deg, #FBEEEE -27.34%, #F7FFFE 89.92%)',
            alignItems: 'center',
        }}>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation={{
                    prevEl: '.swiper-button-prev',
                    nextEl: '.swiper-button-next',
                }}
                pagination={{
                    clickable: true,
                    el: '.swiper-pagination',
                    bulletClass: 'swiper-pagination-bullet',
                    bulletActiveClass: 'swiper-pagination-bullet-active',
                }}
                autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                centeredSlides={true}
                loop={true}
                lazyPreloadPrevNext={1}
                slidesPerView={1}
            >
                {
                    books?.slice(0,4)?.map((book, idx) => (
                        <SwiperSlide key={book?._id}>
                            <FeaturedBooksSlider book={book} idx={idx} />
                        </SwiperSlide>
                    ))
                }
                <IconButton className="swiper-button-prev" sx={{ borderRadius: '50%', padding: '22px', border: '1px solid #ED553B', position: 'absolute', left: 15, top: '50%', zIndex: 1, color: '#ED553B' }}>
                    <ArrowBackIosNewOutlinedIcon />
                </IconButton>
                <IconButton className="swiper-button-next" sx={{ borderRadius: '50%', padding: '22px', border: '1px solid #ED553B', position: 'absolute', right: 15, top: '50%', zIndex: 1, color: '#ED553B' }}>
                    <ArrowForwardIosOutlinedIcon />
                </IconButton>
                <div className="swiper-pagination swiperPaginationFeaturedBook" style={{ position: 'absolute', bottom: '20px' }}></div>
            </Swiper>
        </Box>
    );
};