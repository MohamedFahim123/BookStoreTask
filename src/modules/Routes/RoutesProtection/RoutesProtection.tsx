import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";
import { ReactElement } from "react";

export default function RoutesProtection(props: { children: ReactElement }) {
    const token = Cookies.get('authBookToken');
    if (token) {
        return (props.children)
    } else {
        return <Navigate to='/' />
    }

};