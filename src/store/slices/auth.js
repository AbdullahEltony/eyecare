import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuth: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        register(state) {
            state.isAuth = true
        },
        login(state) {
            state.isAuth = true
        },
        logout(state) {
            state.isAuth = false
        }
    }
})

export const { login, logout, register } = authSlice.actions
export const authReducer = authSlice.reducer