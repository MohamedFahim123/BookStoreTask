import { RouterProvider } from 'react-router-dom';
import 'swiper/swiper-bundle.css';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Cookies from 'js-cookie';
import { Routes } from './modules/Routes/Routes';
import { AppDispatch } from './modules/Store/Store';
import { fetchCartItems } from './modules/Store/Slices/CartSlice';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const stripe = loadStripe('pk_test_51QGeZIIcrOo2kZtfiGO1tnNzhaiZRR7TtEOtsBtYoLn7qi5pzZNWw5chxELfLg7haDxBKDQFZSfrySSHdfhJUJfQ00vEswmILr')

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const token = Cookies.get('authBookToken');

  useEffect(() => {
    if (token) {
      dispatch(fetchCartItems(token));
    };
  }, [dispatch, token]);

  return (
    <>
      <ToastContainer />
      <Elements stripe={stripe}>
        <RouterProvider router={Routes}>
        </RouterProvider>
      </Elements>
    </>
  );
};
export default App;