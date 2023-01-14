import PropTypes from 'prop-types'
import React, { memo, useEffect, useRef } from 'react'
import { IndicatorWrapper } from './style'

const Indicator = memo((props) => {
  const {currentIndex} = props
  const indicatorRef = useRef()

  useEffect(() => {
    // 1.获取当前指示item
    const currentChildren = indicatorRef.current.children[currentIndex]

    // 2.给当前的指示器添加active类名
    for (let i = 0; i < indicatorRef.current.children.length; i++ ) {
      indicatorRef.current.children[i].classList.remove('active')
    }
    currentChildren.classList.add('active')

    // 3.1.获取可视区域的宽度
    const indicatorClientWidth = indicatorRef.current.clientWidth
    // 3.2.获取当前指示item的offsetLeft
    const currentItemOffsetLeft = currentChildren.offsetLeft
    // 3.3.获取当前指示item的宽度
    const currentItemClientWidth = currentChildren.clientWidth
    // 3.4.获取指示器总宽度
    const indicatorScrollWidth = indicatorRef.current.scrollWidth

    // 4.计算滚动的距离
    let disparity = currentItemOffsetLeft + currentItemClientWidth * 0.5 - indicatorClientWidth * 0.5

    // 5.1.左侧特殊情况处理
    if (disparity < 0 ) disparity = 0
    // 5.2.右侧特殊情况处理
    const totalDisparity = indicatorScrollWidth - indicatorClientWidth
     if (totalDisparity < disparity) disparity = totalDisparity
      
    // 6.滚动指示器
    indicatorRef.current.style.transform = `translateX(${-disparity}px)`

  }, [currentIndex])

  return (
    <IndicatorWrapper>
      <div className="indicator-list" ref={indicatorRef}>
        {
          props.children
        }
      </div>
    </IndicatorWrapper>
  )
})

Indicator.propTypes = {
  currentIndex: PropTypes.number
}

export default Indicator