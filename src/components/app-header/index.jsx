import classNames from 'classnames'
import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import HeaderCenter from './c-cpns/header-center'
import HeaderLeft from './c-cpns/header-left'
import HeaderRight from './c-cpns/header-right'

import { HeaderWrapper } from './style'

const AppHeader = memo(() => {
  // 1.从store/main中获取数据
  const { appHeaderConfig } = useSelector(state => ({
    appHeaderConfig: state.main.appHeaderConfig
  }))

  // 2.解构appHeaderConfig
  const { fixed } = appHeaderConfig

  return (
        <HeaderWrapper className={classNames({fixed: fixed})}>
            <HeaderLeft />
            <HeaderCenter />
            <HeaderRight />
        </HeaderWrapper>
  )
})

export default AppHeader