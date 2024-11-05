import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './Slices/CategorySlice';
import booksReducer from './Slices/BookSlice';
import cartReducer from './Slices/CartSlice';

export const store = configureStore({
    reducer: {
        categories: categoryReducer,
        books: booksReducer,
        cart: cartReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
