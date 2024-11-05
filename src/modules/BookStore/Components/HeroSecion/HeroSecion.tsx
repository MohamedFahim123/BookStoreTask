import { Box, IconButton } from '@mui/material';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import BookCoverImg from '../../../../assets/HeroSection/e51e86de0acce7ba8a9582e3be31b204.png';
import HeroSectionSlide from '../HeroSectionSlide/HeroSectionSlide';
import { HeroSlide } from '../../../Utils/Interfaces';

export default function HeroSecion() {
    const slides: HeroSlide[] = [
        {
            id: 1,
            title: `Ipsum Dolor Si`,
            body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut magna velit eleifend. Amet, quis urna, a eu.`,
            btnText: `Read More →`,
            btnDirection: '/book-store/shop',
            coverImg: BookCoverImg
        },
        {
            id: 2,
            title: `Ipsum Dolor Si`,
            body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut magna velit eleifend. Amet, quis urna, a eu.`,
            btnText: `Read More →`,
            btnDirection: '/book-store/shop',
            coverImg: BookCoverImg
        },
        {
            id: 3,
            title: `Ipsum Dolor Si`,
            body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut magna velit eleifend. Amet, quis urna, a eu.`,
            btnText: `Read More →`,
            btnDirection: '/book-store/shop',
            coverImg: BookCoverImg
        },
        {
            id: 4,
            title: `Ipsum Dolor Si`,
            body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut magna velit eleifend. Amet, quis urna, a eu.`,
            btnText: `Read More →`,
            btnDirection: '/book-store/shop',
            coverImg: BookCoverImg
        },
    ];

    return (
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
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
                    slides?.map(slide => (
                        <SwiperSlide key={slide?.id}>
                            <HeroSectionSlide MySlide={slide} />
                        </SwiperSlide>
                    ))
                }
                <IconButton className="swiper-button-prev" sx={{ borderRadius: '50%', padding: '22px', border: '1px solid #ED553B', position: 'absolute', left: 15, top: '50%', zIndex: 1, color: '#ED553B' }}>
                    <ArrowBackIosNewOutlinedIcon />
                </IconButton>
                <IconButton className="swiper-button-next" sx={{ borderRadius: '50%', padding: '22px', border: '1px solid #ED553B', position: 'absolute', right: 15, top: '50%', zIndex: 1, color: '#ED553B' }}>
                    <ArrowForwardIosOutlinedIcon />
                </IconButton>
                <div className="swiper-pagination" style={{ position: 'absolute', bottom: '20px' }}></div>
            </Swiper>
        </Box>
    );
};