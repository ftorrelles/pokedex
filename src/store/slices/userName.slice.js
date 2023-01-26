import { createSlice } from "@reduxjs/toolkit";

export const userNameSlice = createSlice({
    name: "userName",
    initialState: "",
    reducers: {
        userName: (state, action) => {
            return action.payload;
        },
    },
});

export const { userName } = userNameSlice.actions;

export default userNameSlice.reducer;
