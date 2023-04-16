import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: 1, title: "Learn redux toolkit", content: "I'd heart good thing" },
    { id: 2, title: "...slice", content: "I'd heart good thing, the more i say slice" },
];

const postSlice = createSlice( {
    name: "post",
    initialState,
    reducers: {

    }
} );

export const selectAllPost = ( state ) => state.posts;

export default postSlice.reducer;