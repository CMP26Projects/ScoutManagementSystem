import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    loggedIn: false,
    email: '',
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) => {
            state.loggedIn = true;
            state.email = action.payload.email;
        },
        logout: (state, action) => {
            state.loggedIn = false;
            state.email = '';
        }
    }
})

export const { login, logout } = userSlice.actions;
export const selectLoggedIn = (state) => state.user.loggedIn;
export const selectUser = (state) => state.user; 

export default userSlice.reducer