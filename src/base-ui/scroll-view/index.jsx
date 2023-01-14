import React, { memo, useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { ScrollWrapper } from './style'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'

const ScrollView = memo((props) => {
    const [showRight, setShowRight] = useState(false)
    const [showLeft, setShowLeft] = useState(false)
    const [posIndex, setPosIndex] = useState(0)
    const [offsetLeft, setOffsetLeft] = useState(0)
    const disparityRef = useRef()

    const scrollContentRef = useRef()
    useEffect(() => {
        const clientWidth =  scrollContentRef.current.clientWidth
        const scrollWidth = scrollContentRef.current.scrollWidth
        const disparity =  scrollWidth - clientWidth
        // 滚动区域 > 可视区域就给右按钮设置显示
        setShowRight(disparity > 0)
        disparityRef.current = disparity
    }, [props.children])


    // 左右按钮逻辑抽取
    function clickLeftOrRight(str) {
        let num
        if (str === 'left') {
            num = -1
        }else if (str === 'right') {
            num = 1
        }
        const currentPosIndex = posIndex + num
        setPosIndex(currentPosIndex)
        const newOffsetLeft = scrollContentRef.current.children[currentPosIndex].offsetLeft
        setOffsetLeft(newOffsetLeft)
        // 如果滚动区域都滚出右侧，就隐藏右侧按钮
        setShowRight(disparityRef.current > newOffsetLeft)
        currentPosIndex? setShowLeft(true): setShowLeft(false)
    }

    // 事件监听
    function handleRightScroll() {
        clickLeftOrRight('right')
    }

    function handleLeftScroll() {
        clickLeftOrRight('left')
    }

    // 滚动区域偏移量
    const {marginLeft = 0} = props
    return (
        <ScrollWrapper offsetLeft={offsetLeft} marginLeft={marginLeft}>
            {/* 左侧按钮 */}
            {showLeft && 
            <div 
                className='left' 
                onClick={handleLeftScroll}>
                <IconArrowLeft>向左</IconArrowLeft>
            </div>}
            {/* 右侧按钮 */}
            {showRight && 
            <div 
                className='right' 
                onClick={handleRightScroll}>
                <IconArrowRight>向右</IconArrowRight>
            </div>}
            <div className="scroll">
                <div className="scroll-content" ref={scrollContentRef}>
                    {props.children}
                </div>
            </div>
        </ScrollWrapper>
    )
})

ScrollView.propTypes = {
    marginLeft: PropTypes.number
}

export default ScrollView