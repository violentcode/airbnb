
import { getHomeInfoAction } from '@/store/modules/home'
import { changeAppHeaderConfigAction } from '@/store/modules/main'
import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import HomeBanner from './c-cpns/home-banner'
import HomeLongfor from './c-cpns/home-longfor'
import HomeSectionV1 from './c-cpns/home-section-v1'
import HomeSectionV2 from './c-cpns/home-section-v2'
import HomeSectionV3 from './c-cpns/home-section-v3'
import { HomeWrapper } from './style'


const Home = memo(() => {


  // 1.派发异步的事件
  const dispatch = useDispatch()
  useEffect(() => {
    // 1.1.派发获取home信息
    dispatch(getHomeInfoAction())

    // 1.2.派发appHeader配置
    dispatch(changeAppHeaderConfigAction({fixed: true}))
  }, [dispatch])

  // 拿到高性价比数据
  const {goodPriceInfo, highScoreInfo, discountInfo, hotRecommendInfo, longforInfo, homePlusInfo} = useSelector((state) => {
    return {
      goodPriceInfo: state.home.goodPriceInfo,
      highScoreInfo: state.home.highScoreInfo,
      discountInfo: state.home.discountInfo,
      hotRecommendInfo: state.home.hotRecommendInfo,
      longforInfo: state.home.longforInfo,
      homePlusInfo: state.home.homePlusInfo
    }
  }, shallowEqual)
   
  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        {/* 折扣 */}
        <HomeSectionV2 homeInfo={discountInfo}/>
        {/* 热门推荐 */}
        <HomeSectionV2 homeInfo={hotRecommendInfo}/>
        {/* 你可能想去 */}
        <HomeLongfor homeInfo={longforInfo}/>
        {/* 高性价比 */}
        <HomeSectionV1 homeInfo={goodPriceInfo} />
        {/* 高评分 */}
        <HomeSectionV1 homeInfo={highScoreInfo}/>
        {/* Plus房源 */}
        <HomeSectionV3 homeInfo={homePlusInfo}/>
      </div>
    </HomeWrapper>
  )
})

export default Home