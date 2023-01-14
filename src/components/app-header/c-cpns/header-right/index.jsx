import IconAvatar from '@/assets/svg/icon_avatar'
import IconGlobal from '@/assets/svg/icon_global'
import IconMenu from '@/assets/svg/icon_menu'
import React, { memo, useEffect, useState } from 'react'
import { RightWrapper } from './style'

const HeaderRight = memo(() => {
  const [isShowPanel, setShowPanel] = useState(false)

  // 改变panel的显示隐藏
  function handlePanelShow(e) {
    e.stopPropagation()
    setShowPanel(!isShowPanel)
  }

  // 监听浏览器的点击
  useEffect(() => {
    function hanldeWindowClick() {
      setShowPanel(false)
    }

    window.addEventListener('click', hanldeWindowClick)
    return () => {
      window.removeEventListener('click', hanldeWindowClick)
    }
  }, [])

  return (
    <RightWrapper isShowPanel={isShowPanel}>
        <div className="btns">
          <span className='btn'>登录</span>
          <span className='btn'>注册</span>
          <span className='btn'>
            <IconGlobal />
          </span>
        </div>
        <div className="profile" onClick={e => handlePanelShow(e)}>
          <div className="menu"><IconMenu /></div>
          <div className="avatar"><IconAvatar /></div>
        </div>
         {/* 是否显示面板 */}
        {
          isShowPanel && 
          (<div className="panel">
              <div className="top">
                <div className="login item">登录</div>
                <div className="item">注册</div>
              </div>
              <div className="bottom">
                <div className="item">来爱彼迎发布房源</div>
                <div className="item">开展体验</div>
                <div className="item">帮助</div>
              </div>
          </div>)
        }
    </RightWrapper>
  )
})

export default HeaderRight