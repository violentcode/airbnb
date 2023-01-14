import PropTypes from 'prop-types'
import React, { memo, useRef, useState } from 'react'
import { SwiperWrapper } from './style'
import { Carousel } from 'antd';
import IconArrowLeft from '@/assets/svg/icon-arrow-left';
import IconArrowRight from '@/assets/svg/icon-arrow-right';
import Indicator from '@/base-ui/indicator';

const EntireSwiper = memo((props) => {
    const swiperRef = useRef()
    const [currentIndex, setCurrentIndex] = useState(0)
  
    function handleClickControl(event, isRight = true) {
      event.stopPropagation()
      isRight? swiperRef.current.next(): swiperRef.current.prev()
    }
  
    function handleChangeSwiper(current) {
      setCurrentIndex(current)
    }
    const {pictureUrls} = props
  return (
    <SwiperWrapper>
                  <div className="swiper">
            <div className="control" >
              <div className="btn left" onClick={e => handleClickControl(e, false)}>
                <IconArrowLeft width={24} height={24} />
              </div>
              <div className="btn right" onClick={e => handleClickControl(e, true)}>
                <IconArrowRight width={24} height={24} />
              </div>
            </div>
            <Carousel dots={false} ref={swiperRef} afterChange={handleChangeSwiper}>
              {
                pictureUrls.map(item => {
                  return (
                    <div className="cover" key={item}>
                      <img src={item} alt="" />
                    </div>
                  )
                })
              }
            </Carousel>
            <div className="indicator">
              <Indicator currentIndex={currentIndex}>
                {
                  pictureUrls.map(item => {
                    return (
                      <div className="indicator-item" key={item}></div>
                    )
                  })
                }
              </Indicator>
            </div>
          </div>
    </SwiperWrapper>
  )
})

EntireSwiper.propTypes = {
    pictureUrls: PropTypes.array
}

export default EntireSwiper