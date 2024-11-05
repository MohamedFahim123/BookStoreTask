import { createBrowserRouter } from "react-router-dom";
import AuthView from "../Auth/AuthView/AuthView";
import Login from "../Auth/Pages/Login/Login";
import ResetPassword from "../Auth/Pages/ResetPassword/ResetPassword";
import ChangePassword from "../Auth/Pages/ChangePassword/ChangePassword";
import ForgetPassword from "../Auth/Pages/ForgetPassword/ForgetPassword";
import MainView from "../BookStore/MainView/MainView";
import Home from "../BookStore/Pages/Home/Home";
import Shop from "../BookStore/Pages/Shop/Shop";
import BookDetails from "../BookStore/Pages/BookDetails/BookDetails";
import Cart from "../BookStore/Pages/Cart/Cart";
import Register from "../Auth/Pages/Register/Register";
import RoutesProtection from "./RoutesProtection/RoutesProtection";
import CheckOut from "../BookStore/Pages/CheckOut/CheckOut";
import ConfirmOrder from "../BookStore/Pages/ConfirmOrder/ConfirmOrder";
import NotFound from "../Shared/NotFound/NotFound";

export const Routes = createBrowserRouter([
    {
        path: '',
        element: <AuthView />,
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                element: <Login />,
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'forget-password',
                element: <ForgetPassword />
            },
            {
                path: 'reset-password',
                element: <ResetPassword />
            },
            {
                path: 'change-password',
                element:
                    <RoutesProtection>
                        <ChangePassword />
                    </RoutesProtection>
            },
            {
                path: 'register',
                element: <Register />
            },
        ],
    },
    {
        path: '/book-store',
        element:
            <RoutesProtection>
                <MainView />
            </RoutesProtection>
        ,
        errorElement: <></>,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: 'home',
                element: <Home />
            },
            {
                path: 'shop',
                element: <Shop />
            },
            {
                path: 'book-details/:bookId',
                element: <BookDetails />
            },
            {
                path: 'Cart',
                element: <Cart />
            },
            {
                path: 'check-out',
                element: <CheckOut />
            },
            {
                path: 'order-confirmation',
                element: <ConfirmOrder />
            },
        ],
    },
]);