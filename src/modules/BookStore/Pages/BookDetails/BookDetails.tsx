import { useLocation, useParams } from "react-router-dom";
import { HeadLinks } from "../../../Utils/Interfaces";
import SecondaryHeroSection from "../../Components/SecondaryHeroSection/SecondaryHeroSection";
import FeaturedBooksSlider from "../../Components/FeaturedBooksSlider/FeaturedBooksSlider";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../Store/Store";
import { fetchOneBook } from "../../../Store/Slices/BookSlice";
import { useEffect } from "react";
import Loader from "../../../Shared/Loader/Loader";
import NotFound from "../../../Shared/NotFound/NotFound";

export default function BookDetails() {
    const { pathname } = useLocation();
    const { bookId } = useParams();
    const dispatch = useDispatch<AppDispatch>();
    const { book, loading, error } = useSelector((state: RootState) => state.books);

    useEffect(() => {
        if (bookId) {
            dispatch(fetchOneBook(bookId));
        };
    }, [bookId]);

    const headLinks: HeadLinks[] = [
        {
            name: 'Home',
            path: '/book-store/home',
        },
        {
            name: 'Products',
            path: '/book-store/shop',
        },
        {
            name: 'Product Details',
            path: pathname,
        },
    ];

    if(loading){
        return <Loader />
    };
    if(error){
        return <NotFound />
    };

    return (
        <>
            <SecondaryHeroSection headLinks={headLinks} />
            <FeaturedBooksSlider isBookDetails={true} book={book} idx={1} />
        </>
    );
};