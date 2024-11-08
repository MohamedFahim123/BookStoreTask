import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { BookSchema } from "../../../Utils/Interfaces";
import BookSlide from "../BookSlide/BookSlide";
import { arrOfBookImgs } from "../../../Utils/ArrOfBooksImgs";

interface BookSlideProps {
    books: BookSchema[];
}

export default function BooksSlider({ books }: BookSlideProps) {
    return (
        <Swiper
            modules={[Pagination, Autoplay]}
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
            spaceBetween={30}
            slidesPerView={5}
            style={{ padding: '0 10px 40px' }}
            breakpoints={{
                300: {
                    slidesPerView: 1,
                },
                600: {
                    slidesPerView: 1.5,
                },
                768: {
                    slidesPerView: 2.5,
                },
                991: {
                    slidesPerView: 3,
                },
                1024: {
                    slidesPerView: 4,
                },
            }}
        >
            {
                books?.map((book, idx) => (
                    <SwiperSlide key={book?._id}>
                        <BookSlide idx={idx} book={book} arrOfBookImgs={arrOfBookImgs} />
                    </SwiperSlide>
                ))
            }
            <div className="swiper-pagination swiper-pagination-allBooks" style={{ position: 'absolute', bottom: '20px' }}></div>
        </Swiper>
    )
}
