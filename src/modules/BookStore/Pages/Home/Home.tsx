import { useDispatch, useSelector } from "react-redux";
import AllBookSlider from "../../Components/AllBookSlider/AllBookSlider";
import BookOfferSection from "../../Components/BookOfferSection/BookOfferSection";
import CategoriesSection from "../../Components/CategoriesSection/CategoriesSection";
import FeaturedBooks from "../../Components/FeaturedBooks/FeaturedBooks";
import HeroSecion from "../../Components/HeroSecion/HeroSecion";
import { AppDispatch, RootState } from "../../../Store/Store";
import Loader from "../../../Shared/Loader/Loader";
import { useEffect, useState } from "react";
import { fetchCategories } from "../../../Store/Slices/CategorySlice";
import NotFound from "../../../Shared/NotFound/NotFound";

export default function Home() {
    const { loading: categoryLoading, error: catError } = useSelector((state: RootState) => state.categories);
    const { loading: bookLoading, error: bookError } = useSelector((state: RootState) => state.books);
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);

    useEffect(() => {
        if (categoryLoading || bookLoading) {
            setTimeout(() => {
                setLoading(false);
            }, 500);
        }
    }, [categoryLoading, bookLoading]);

    if (loading) return <Loader />;

    if (catError || bookError) return <NotFound />;

    return (
        <>
            <HeroSecion />
            <CategoriesSection />
            <AllBookSlider />
            <FeaturedBooks />
            <BookOfferSection />
        </>
    );
}
