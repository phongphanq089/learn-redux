import { configureStore } from "@reduxjs/toolkit"
import userSlices from "./userSlices"

export default configureStore({
    reducer: {
        user: userSlices
    }
})