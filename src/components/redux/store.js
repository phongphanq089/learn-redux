import { configureStore } from "@reduxjs/toolkit";
import postSlices from "./postSlices";

export default configureStore( {
    reducer: {
        posts: postSlices
    },

} );