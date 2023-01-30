import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// import type { PayloadAction } from '@reduxjs/toolkit'
export const getBooks = createAsyncThunk(
    "books/getBooks",
    //первый параметр то что мы передали, второй параметр опциональный, можно достать сразу метод dispatch, getState...
    async () => {
        try {
            const res = await axios.get("https://fakerapi.it/api/v1/books?_quantity=10");
            return res.data.data
        } catch (error) {
            console.log(error)
        }
    }
);

export interface StateBook {
    id: number,
    title: string,
    author: string,
    genre: string,
    description: string,
    isbn: string,
    image: string,
    published: string,
    publisher: string,
}

interface StateBooks {
    books: StateBook[] | []
}


const initialState: StateBooks = {
    books: []
}

// Обрабатываем операции в редукторах
const booksSlice = createSlice({
    name: "books",
    initialState,
    reducers: {
        showState(state) {
            console.log(state)
        },
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder
            .addCase(getBooks.pending, () => {
                console.log('pending')
            })
            .addCase(getBooks.fulfilled, (state, action) => {
                state.books = action.payload
            })
            .addCase(getBooks.rejected, () => {
                console.log('rejected')
            })
    },
});

const { actions, reducer } = booksSlice;
export const { showState } = actions;
export const booksReducer = reducer