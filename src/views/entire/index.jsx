import { getEntireListAction } from '@/store/modules/entire'
import { changeAppHeaderConfigAction } from '@/store/modules/main'
import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import EntireFilter from './c-cpns/entire-filter'
import EntirePagination from './c-cpns/entire-pagination'
import EntireRooms from './c-cpns/entire-rooms'
import { EntireWrapper } from './style'

const Entire = memo(() => {
  const {page} = useSelector((state) => ({
    page: state.entire.page
  }))
  
  const dispatch = useDispatch()
  // 1.派发action
  useEffect(() => {
    // 1.1.派发获取全部页面信息
    dispatch(getEntireListAction(page))

    // 1.2.派发appHeader配置
    dispatch(changeAppHeaderConfigAction({fixed: true}))
  }, [dispatch, page])

  return (
    <EntireWrapper>
      <EntireFilter />
      <EntireRooms />
      <EntirePagination />
    </EntireWrapper>
  )
})

export default Entire