import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { FooterWrapper } from './style'
import IconMoreArrow from '@/assets/svg/icon-more-arrow'
import { useNavigate } from 'react-router-dom'

const SectionFooter = memo((props) => {
  const {moreName} = props
  let footerEl = null
  if (moreName) {
    footerEl = `查看更多${moreName}房源`
  }else {
    footerEl = '显示全部'
  }

  const navigate = useNavigate()

  function handleClickFooter() {
    navigate('/entire')
  }

  return (
    <FooterWrapper textColor={moreName? '#00848A': '#333'}>
      <div className="footer" onClick={e => handleClickFooter()}>
        <div className="footer-text">{ footerEl }</div>
        <IconMoreArrow />
      </div>
    </FooterWrapper>
  )
})

SectionFooter.propTypes = {
  moreName: PropTypes.string
}

export default SectionFooter