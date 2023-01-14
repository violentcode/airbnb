import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import IconClose from '@/assets/svg/icon_close'
import PropTypes from 'prop-types'
import React, { memo, useEffect, useState } from 'react'
import { BorwserWrapper } from './style'
import { SwitchTransition, CSSTransition } from "react-transition-group"
import Indicator from '../indicator'

const PictureBrowser = memo((props) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isNext, setisNext] = useState(true)
    // 1.副作用
    useEffect(() => {
        // 1.1.进入图片浏览器时，禁止且隐藏滚动条  
        document.body.style.overflow="hidden"
        return () => {
            // 2.2.离开图片浏览器时，关闭
            document.body.style.overflow="auto"
        }
    }, [])

    // 2.事件监听
    // 2.1.箭头事件监听
    function handleClickArrow(isRight = true) {
        setisNext(isRight)
        let newCurrentIndex =  isRight ? currentIndex + 1 : currentIndex - 1
        if (newCurrentIndex <= -1) newCurrentIndex = pictureUrls.length - 1
        if (newCurrentIndex >= pictureUrls.length) newCurrentIndex = 0
        setCurrentIndex(newCurrentIndex)
    }
    // 2.2.Indicator每个item的监听
    function handleClickIndicator(index) {
        if (index > currentIndex) {
            setisNext(true)
        }else {
            setisNext(false)
        }
        setCurrentIndex(index)
    }

    // 3.解构props中的值
    const {onClose = () => {}, pictureUrls = [], pictureName} = props

    // 4.指示器上面的文本
    const previewText = currentIndex + 1 + '/' + pictureUrls.length + ':' + pictureName + '图片' + (currentIndex + 1)

    return (
        <BorwserWrapper isNext={isNext}>
            <div className="top">
                <div className="close" onClick={onClose}>
                    <IconClose width={35} height={35} />
                </div>
            </div>
            <div className="slider">
                {/* 左右箭头 */}
                <div className="control">
                    <div className="arrow left" onClick={e => handleClickArrow(false)}>
                        <IconArrowLeft width={77} height={77} />
                    </div>
                    <div className="arrow right" onClick={e => handleClickArrow()}>
                        <IconArrowRight  width={77} height={77} />
                    </div>
                </div>
                {/* 展示的图片 */}
                <div className="borwser_pictures">
                    <SwitchTransition mode='out-in'>
                        <CSSTransition 
                        key={pictureUrls[currentIndex]} 
                        classNames="pic"
                        timeout={200}
                        >
                            <img src={pictureUrls[currentIndex]} alt="" />
                        </CSSTransition>
                    </SwitchTransition>
                </div>
            </div>
            <div className="preview">
                <div className="preview-text">
                    {
                        previewText
                    }
                </div>
                <div className="scroll">
                    <Indicator currentIndex={currentIndex}>
                        {
                            pictureUrls.map((item, index) => {
                                return (
                                    <div className='indicator-item' key={item} onClick={e => handleClickIndicator(index)}>
                                        <img src={item} alt="" />
                                        <div className="cover"></div>
                                    </div>
                                )
                            })
                        }
                    </Indicator>
                </div>
            </div>
        </BorwserWrapper>
    )
})

PictureBrowser.propTypes = {
    onClose: PropTypes.func,
    pictureUrls: PropTypes.array,
    pictureName: PropTypes.string
}

export default PictureBrowser