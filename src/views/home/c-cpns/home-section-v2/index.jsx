import PropTypes from 'prop-types'
import React, { memo, useState, useCallback } from 'react'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import SectionTabs from '@/components/section-tabs'
import { SectionV2Wrapper } from './style'
import SectionFooter from '@/components/section-footer'

const HomeSectionV2 = memo((props) => {
    const {homeInfo} = props

    const [currentIndex, setCurrentIndex] = useState(0)
    // 使用useCallback性能优化
    const handletabsClick = useCallback(function(index) {
      setCurrentIndex(index)
    }, [])
    const tabsName = homeInfo.dest_address?.map(item => item.name)
  return (
    <SectionV2Wrapper>
        <SectionHeader title={homeInfo.title} subTitle={homeInfo.subtitle} />
        <SectionTabs tabNames={tabsName} tabsClick={handletabsClick} />
        <SectionRooms roomList={homeInfo.dest_list?.[tabsName[currentIndex]]} column={3} />
        <SectionFooter moreName={tabsName?.[currentIndex]}/>
    </SectionV2Wrapper>
  )
})

HomeSectionV2.propTypes = {
    homeInfo: PropTypes.object
}

export default HomeSectionV2