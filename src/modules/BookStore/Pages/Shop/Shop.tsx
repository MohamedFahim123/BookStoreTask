import { useLocation } from "react-router-dom";
import { HeadLinks } from "../../../Utils/Interfaces";
import SecondaryHeroSection from "../../Components/SecondaryHeroSection/SecondaryHeroSection";
import ShopMainSection from "../../Components/ShopMainSection/ShopMainSection";
import { useEffect, useState } from "react";
import Loader from "../../../Shared/Loader/Loader";

export default function Shop() {
    const { pathname } = useLocation();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setLoading(false), 500);
    }, []);

    if (loading) return <Loader />;

    const headLinks: HeadLinks[] = [
        {
            name: 'Home',
            path: '/book-store/home',
        },
        {
            name: 'Products',
            path: pathname,
        },
    ];

    return (
        <>
            <SecondaryHeroSection headLinks={headLinks} />
            <ShopMainSection />
        </>
    );
};