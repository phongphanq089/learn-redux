import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice( {
    name: "user",
    initialState: {
        name: "phong phan q089",
        age: "23",
        about: "I'm developer fontend",
        avatar: "https://demoda.vn/wp-content/uploads/2022/09/avatar-facebook-doc-ngau.jpg",
        themeColor: "#fb923c"
    },
    reducers: {
        update: ( state, action ) => {
            state.name = action.payload.name;
            state.age = action.payload.age;
            state.about = action.payload.about;
            state.avatar = action.payload.avatar;
            state.themeColor = action.payload.themeColor;
        }
    }
} );
export const { update } = userSlice.actions;
export default userSlice.reducer;