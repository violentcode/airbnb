import IconSearchBar from '@/assets/svg/icon-search-bar'
import React, { memo } from 'react'
import { CenterWrapper } from './style'

const HeaderCenter = memo(() => {
  return (
    <CenterWrapper>
        <div className="search">
          <span>搜索房源和体验</span>
          <div className="search-icon">
            <IconSearchBar />
          </div>
        </div>
    </CenterWrapper>
  )
})

export default HeaderCenter