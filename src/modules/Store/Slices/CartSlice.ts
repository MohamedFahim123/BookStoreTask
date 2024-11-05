import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../Utils/baseUrl';
import { toast } from 'react-toastify';
import { CartData, CartItem } from '../../Utils/Interfaces';


interface CartState {
    cartData: CartData | null;
    cartCounter: number;
    loading: boolean;
    error: null | string;
}

const initialState: CartState = {
    cartData: null,
    cartCounter: 0,
    loading: false,
    error: null,
};

export const fetchCartItems = createAsyncThunk(
    'cart/fetchAll',
    async (token: string | undefined, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${BASE_URL}/basket`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return rejectWithValue(error.response?.data?.message || 'Error fetching cart items!');
            }
            return rejectWithValue('Something went wrong!');
        }
    }
);

export const addItemToCart = createAsyncThunk(
    'cart/addItem',
    async ({ id, token }: { id: string | number; token: string | undefined; }, { rejectWithValue }) => {
        const loadingToastId = toast.loading("Adding item to cart...");
        try {
            const response = await axios.post(
                `${BASE_URL}/basket/item`,
                { book: id, quantity: 1 },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            toast.update(loadingToastId, {
                render: "Item added to cart successfully!",
                type: "success",
                isLoading: false,
                autoClose: 3000,
            });
            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                toast.update(loadingToastId, {
                    render: error?.response?.data?.message || 'Failed to add item!',
                    type: "error",
                    isLoading: false,
                    autoClose: 3000,
                });
                return rejectWithValue(error.response?.data?.message || 'Error adding item to cart!');
            }
            toast.update(loadingToastId, {
                render: 'Something went wrong!',
                type: "error",
                isLoading: false,
                autoClose: 3000,
            });
            return rejectWithValue('Something went wrong!');
        }
    }
);

export const removeItemFromCart = createAsyncThunk(
    'cart/removeItem',
    async ({ cartId, items, token }: { cartId: string; items: CartItem[]; token: string }, { rejectWithValue }) => {
        const loadingToastId = toast.loading("Removing item from cart...");
        try {
            const response = await axios.put(
                `${BASE_URL}/basket/${cartId}`,
                {
                    items
                },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            toast.update(loadingToastId, {
                render: "Item removed successfully!",
                type: "success",
                isLoading: false,
                autoClose: 3000,
            });
            return response.data.data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                toast.update(loadingToastId, {
                    render: error?.response?.data?.message || 'Failed to remove item!',
                    type: "error",
                    isLoading: false,
                    autoClose: 3000,
                });
                return rejectWithValue(error?.response?.data?.message || 'Error updating item quantity!');
            }
            toast.update(loadingToastId, {
                render: 'Something went wrong!',
                type: "error",
                isLoading: false,
                autoClose: 3000,
            });
            return rejectWithValue('Something went wrong!');
        }
    }
);

export const updateItemQuantity = createAsyncThunk(
    'cart/updateQuantity',
    async ({ cartId, items, token }: { cartId: string; items: CartItem[]; token: string }, { rejectWithValue }) => {
        const loadingToastId = toast.loading("Updating item quantity...");
        try {
            const response = await axios.put(
                `${BASE_URL}/basket/${cartId}`,
                {
                    items
                },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            toast.update(loadingToastId, {
                render: "Item quantity updated successfully!",
                type: "success",
                isLoading: false,
                autoClose: 3000,
            });
            return response.data.data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                toast.update(loadingToastId, {
                    render: error?.response?.data?.message || 'Failed to update item quantity!',
                    type: "error",
                    isLoading: false,
                    autoClose: 3000,
                });
                return rejectWithValue(error?.response?.data?.message || 'Error updating item quantity!');
            }
            toast.update(loadingToastId, {
                render: 'Something went wrong!',
                type: "error",
                isLoading: false,
                autoClose: 3000,
            });
            return rejectWithValue('Something went wrong!');
        }
    }
);

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCartItems.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCartItems.fulfilled, (state, action) => {
                state.loading = false;
                state.cartData = action.payload;
                state.cartCounter = action?.payload?.items?.reduce((total: number, item: CartItem) => total + item.quantity, 0);
            })
            .addCase(fetchCartItems.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
            .addCase(addItemToCart.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(addItemToCart.fulfilled, (state, action) => {
                state.loading = false;
                if (state.cartData) {
                    state.cartData.items.push(action.payload);
                    state.cartData.total += action.payload.total;
                } else {
                    state.cartData = action.payload;
                }
                state.cartCounter += action.payload.quantity;
            })
            .addCase(addItemToCart.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
            .addCase(removeItemFromCart.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(removeItemFromCart.fulfilled, (state, action) => {
                state.loading = false;
                if (state.cartData) {
                    const itemToRemove = state.cartData.items.find((item) => item._id === action.payload);
                    if (itemToRemove) {
                        state.cartCounter -= itemToRemove.quantity;
                    }
                    state.cartData.items = state.cartData.items.filter((item) => item._id !== action.payload);
                    state.cartData.total = state.cartData.items.reduce((acc, item) => acc + item.book.price * item.quantity, 0);
                }
            })
            .addCase(removeItemFromCart.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
            .addCase(updateItemQuantity.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(updateItemQuantity.fulfilled, (state, action) => {
                state.loading = false;
                if (state.cartData) {
                    const itemIndex = state.cartData.items.findIndex(item => item._id === action.payload._id);
                    if (itemIndex > -1) {
                        const item = state.cartData.items[itemIndex];
                        const oldQuantity = item.quantity;
                        item.quantity = action.payload.quantity;
                        state.cartData.total += item.book.price * (item.quantity - oldQuantity);
                        state.cartCounter += item.quantity - oldQuantity;
                    };
                };
            })
            .addCase(updateItemQuantity.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export default cartSlice.reducer;