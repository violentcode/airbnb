import PropTypes from 'prop-types'
import React, { memo } from 'react'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import SectionFooter from '@/components/section-footer'

const HomeSectionV1 = memo((props) => {
    const { homeInfo } = props
    return (
        <div>
            {/* 头部区域 */}
            <SectionHeader title={homeInfo.title} subTitle={homeInfo.subtitle}/>
            {/* 房源列表 */}
            <SectionRooms  roomList={homeInfo.list} column={4} />
            {/* 底部内容 */}
            <SectionFooter />
        </div>
    )
})

HomeSectionV1.propTypes = {
    homeInfo: PropTypes.object
}

export default HomeSectionV1