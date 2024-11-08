import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from "swiper/modules";
import CategoriesSectionSlide from '../CategoriesSectionSlide/CategoriesSectionSlide';
import { Category } from '../../../Utils/Interfaces';

interface categoriesSectionSlideProps {
    categories: Category[];
    imgs: string[];
};

export default function CategoriesSectionSlider({ categories, imgs }: categoriesSectionSlideProps) {
    return (
        <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{
                prevEl: '.swiper-button-category-prev',
                nextEl: '.swiper-button-category-next',
            }}
            autoplay={{
                delay: 1500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            }}
            centeredSlides={true}
            loop={true}
            lazyPreloadPrevNext={1}
            spaceBetween={30}
            style={{ cursor: 'grab', marginTop: '50px' }}
            breakpoints={{
                600: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                },
                991: {
                    slidesPerView: 3,
                },
            }}
        >
            {
                categories?.map((category, idx) => (
                    <SwiperSlide key={category?._id} style={{ padding: '20px' }}>
                        <CategoriesSectionSlide idx={idx} category={category} imgs={imgs} />
                    </SwiperSlide>
                ))
            }
        </Swiper>
    )
}
