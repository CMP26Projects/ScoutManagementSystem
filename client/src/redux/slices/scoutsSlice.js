import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    scouts: []
}

const scoutsSlice = createSlice({
    name: 'scouts',
    initialState,
    reducers: {
        addScout: (state, action) => {
            const newScout = {
                name: action.payload.name,
                gender: action.payload.gender,
                sector: action.payload.sector,
            }
            state.scouts = [...state.scouts, newScout];
        },
    },
})

export const { addScout } = scoutsSlice.actions

export const selectScouts = (state) => state.scouts.scouts;

export default scoutsSlice.reducer;