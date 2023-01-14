import IconLogo from '@/assets/svg/icon_logo'
import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { LeftWrapper } from './style'

const HeaderLeft = memo(() => {
  const navigate = useNavigate()
  function handleClickLogo() {
    navigate('/home')
  }

  return (
    <LeftWrapper>
      <div className="icon-logo" onClick={handleClickLogo}>
        <IconLogo />
      </div>
    </LeftWrapper>
  )
})

export default HeaderLeft