import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./slices/userSlice"
import scoutsReducer from "./slices/scoutsSlice"


const store = configureStore({
    reducer: {
        user: userReducer,
        scouts: scoutsReducer,
    },
})

export default store;