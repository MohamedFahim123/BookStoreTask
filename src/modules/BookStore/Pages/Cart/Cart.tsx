import { useLocation } from "react-router-dom";
import { HeadLinks } from "../../../Utils/Interfaces";
import SecondaryHeroSection from "../../Components/SecondaryHeroSection/SecondaryHeroSection";
import CartSection from "../../Components/CartSection/CartSection";
import { useEffect, useState } from "react";
import Loader from "../../../Shared/Loader/Loader";

export default function Cart() {
    const { pathname } = useLocation();
    const [loading,setLoading] = useState(true);
    const headLinks: HeadLinks[] = [
        {
            name: 'Home',
            path: '/book-store/home',
        },
        {
            name: 'Cart',
            path: pathname,
        },
    ];

    useEffect(()=>{
        setTimeout(()=> setLoading(false),500);
    },[]);
    
    if(loading){
        return <Loader />
    };

    return (
        <>
            <SecondaryHeroSection headLinks={headLinks} />
            <CartSection />
        </>
    );
};