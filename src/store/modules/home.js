import { getDiscountInfo, getGoodpriceInfo, getHighScoreInfo, getHomePlusInfo, getHotRecommendInfo, getLongforInfo } from "@/service/modules/home";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const getHomeInfoAction = createAsyncThunk('home/homeInfo', async (state, {dispatch}) => {
   getGoodpriceInfo().then(res => {
    dispatch(homeSlice.actions.changeGoodPriceInfoAction(res))
   })
   getHighScoreInfo().then(res => {
    dispatch(homeSlice.actions.changeHighScoreInfoAction(res))
   })
   getDiscountInfo().then(res => {
    dispatch(homeSlice.actions.changeDiscountInfoAction(res))
   })
   getHotRecommendInfo().then(res => {
    dispatch(homeSlice.actions.changeHotRecommendInfoAction(res))
   })
   getLongforInfo().then(res => {
    dispatch(homeSlice.actions.changeLongforInfoAction(res))
   })
   getHomePlusInfo().then(res => {
    dispatch(homeSlice.actions.changeHomePlusInfoAction(res))
   })
})

const homeSlice = createSlice({
    name: 'home',
    initialState: {
        goodPriceInfo: {},
        highScoreInfo: {},
        discountInfo: {},
        hotRecommendInfo: {},
        longforInfo: {},
        homePlusInfo: {}
    },
    reducers: {
        changeGoodPriceInfoAction(state, {payload}) {
            state.goodPriceInfo = payload
        },
        changeHighScoreInfoAction(state, {payload}) {
            state.highScoreInfo = payload
        },
        changeDiscountInfoAction(state, {payload}) {
            state.discountInfo = payload
        },
        changeHotRecommendInfoAction(state, {payload}) {
            state.hotRecommendInfo = payload
        },
        changeLongforInfoAction(state, {payload}) {
            state.longforInfo = payload
        },
        changeHomePlusInfoAction(state, {payload}) {
            state.homePlusInfo = payload
        }
    },
    // extraReducers: {
    //     [getGoodPriceInfoAction.fulfilled](state, {payload}) {
    //         state.goodPriceInfo = payload
    //     }
    // }
})

export default homeSlice.reducer
