
import { HeadLinks } from "../../../Utils/Interfaces";
import { useLocation } from "react-router-dom";
import SecondaryHeroSection from "../../Components/SecondaryHeroSection/SecondaryHeroSection";
import CheckOutForm from "../../Components/CheckOutForm/CheckOutForm";
import { useEffect, useState } from "react";
import Loader from "../../../Shared/Loader/Loader";

export default function CheckOut() {
    const { pathname } = useLocation();
    const [loading,setLoading] = useState(true);
    const headLinks: HeadLinks[] = [
        {
            name: 'Home',
            path: '/book-store/home',
        },
        {
            name: 'Cart',
            path: '/book-store/cart',
        },
        {
            name: 'Checkout',
            path: pathname,
        },
    ];

    useEffect(()=>{
        setTimeout(()=> setLoading(false),500);
    },[]);

    if(loading) {
        return <Loader />
    };

    return (
        <>
            <SecondaryHeroSection headLinks={headLinks} />
            <CheckOutForm />
        </>
    );
};
