import { getEntireList } from "@/service/modules/entire";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const  getEntireListAction = createAsyncThunk('entire/entireList', async (page, store) => {
 // 发送请求前开启蒙版
 store.dispatch(entireSlice.actions.changeIsLoading(true))
 const res =  await getEntireList(page * 20)
 // 拿到数据后关闭蒙版
 store.dispatch(entireSlice.actions.changeIsLoading(false))
 const entireList = res.list
 const totalCount = res.totalCount
 return {
    entireList,
    totalCount
 }
})
const entireSlice = createSlice({
    name: 'entire',
    initialState: {
        page: 0,
        entireList: [],
        totalCount: 0,
        isLoading: false
    },
    reducers:  {
        changePageAction(state, { payload }) {
            state.page = payload
        },
        changeIsLoading(state, { payload }) {
            state.isLoading = payload
        }
    },
    extraReducers: {
        [getEntireListAction.fulfilled](state, {payload}) {
           state.entireList = payload.entireList
           state.totalCount = payload.totalCount
        }
    }
})

export const {changePageAction} = entireSlice.actions

export default entireSlice.reducer