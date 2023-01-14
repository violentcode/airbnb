import { changeAppHeaderConfigAction } from '@/store/modules/main'
import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import DetailInfo from './c-cpns/detail-info'
import DetailPicture from './c-cpns/detail-picture'
import { DetailWrapper } from './style'

const detail = memo(() => {
  const dispatch = useDispatch()
  useEffect(() => {
    // 派发appHeader配置
    dispatch(changeAppHeaderConfigAction({fixed: false}))
  }, [dispatch])
  
  return (
    <DetailWrapper>
      <DetailPicture />
      <DetailInfo />
    </DetailWrapper>
  )
})

export default detail