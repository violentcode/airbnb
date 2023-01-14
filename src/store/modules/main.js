import { createSlice } from "@reduxjs/toolkit"

const mainSlice = createSlice({
    name: 'main',
    initialState: {
        appHeaderConfig: {
            fixed: true
        }
    },
    reducers: {
        changeAppHeaderConfigAction(state, {payload}) {
            state.appHeaderConfig = payload
        }
    }
})

export const {changeAppHeaderConfigAction} = mainSlice.actions

export default mainSlice.reducer
