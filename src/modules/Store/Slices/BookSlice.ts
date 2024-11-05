import Cookies from 'js-cookie';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BookSchema } from '../../Utils/Interfaces';
import { BASE_URL } from '../../Utils/baseUrl';

interface BooksInitialState {
    books: BookSchema[];
    book: BookSchema;
    loading: boolean;
    error: null | string;
    page: number;
    limit: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    totalBooks: number;
}

const initialState: BooksInitialState = {
    books: [],
    book: {
        _id: '',
        name: '',
        description: '',
        author: '',
        price: '',
        image: '',
        status: '',
        category: '',
        createdAt: '',
        updatedAt: ''
    },
    loading: false,
    error: null,
    page: 1,
    limit: 10,
    totalPages: 0,
    hasNextPage: false,
    hasPreviousPage: false,
    totalBooks: 0,
};

export const fetchAllBooks = createAsyncThunk(
    'books/fetchAll',
    async ({ page = 1, limit = 10 }: { page: number; limit: number }, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${BASE_URL}/book`, {
                params: { page, limit },
            });
            const data = response.data;
            return {
                books: data.data,
                totalBooks: data.total,
                totalPages: Math.ceil(data.total / limit),
                page: data.page,
                limit: data.limit,
                hasNextPage: data.hasNextPage,
                hasPreviousPage: data.hasPrevPage,
            };
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return rejectWithValue(error.response?.data?.message || 'Something went wrong!');
            }
            return rejectWithValue('Something went wrong!');
        }
    }
);

export const fetchOneBook = createAsyncThunk(
    'books/fetchOne',
    async (id: string, { rejectWithValue }) => {
        try {
            const token = Cookies.get('authBookToken');
            const response = await axios.get(`${BASE_URL}/book/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return rejectWithValue(error.response?.data?.message || 'Something went wrong!');
            }
            return rejectWithValue('Something went wrong!');
        }
    }
);

const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllBooks.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchAllBooks.fulfilled, (state, action) => {
                state.loading = false;
                state.books = action.payload.books;
                state.totalBooks = action.payload.totalBooks;
                state.totalPages = action.payload.totalPages;
                state.page = action.payload.page;
                state.limit = action.payload.limit;
                state.hasNextPage = action.payload.hasNextPage;
                state.hasPreviousPage = action.payload.hasPreviousPage;
                state.error = null;
            })
            .addCase(fetchAllBooks.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
            .addCase(fetchOneBook.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchOneBook.fulfilled, (state, action) => {
                state.loading = false;
                state.book = action.payload;
                state.error = null;
            })
            .addCase(fetchOneBook.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export default booksSlice.reducer;
