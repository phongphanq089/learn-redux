import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
    name: "user",
    initialState: {
        name: "phong phan",
        age: "23",
        about: "I'm developer fontend",
        avatar: "https://demoda.vn/wp-content/uploads/2022/09/avatar-facebook-doc-ngau.jpg"
    },
    reducers: {
        update: (state, action) => {
            state.name = action.payload.name
            state.age = action.payload.age
            state.about = action.payload.about
            state.avatar = action.payload.avatar
        }
    }
})
export const { update } = userSlice.actions
export default userSlice.reducer