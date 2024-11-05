import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Category } from '../../Utils/Interfaces';
import { BASE_URL } from '../../Utils/baseUrl';

interface CategoriesInitialState {
    categories: Category[];
    loading: boolean;
    error: null | string;
}

const initialState: CategoriesInitialState = {
    categories: [],
    loading: true,
    error: null,
};

export const fetchCategories = createAsyncThunk(
    'categories/fetchAll',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${BASE_URL}/category`);
            return response?.data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return rejectWithValue(error?.response?.data?.message || 'Something went wrong!');
            };
            return rejectWithValue('Something went wrong!');
        };
    }
);

const categorySlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategories.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.loading = false;
                state.categories = action.payload;
                state.error = null;
            })
            .addCase(fetchCategories.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export default categorySlice.reducer;
