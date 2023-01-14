import ScrollView from '@/base-ui/scroll-view'
import RoomItem from '@/components/room-item'
import SectionFooter from '@/components/section-footer'
import SectionHeader from '@/components/section-header'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { SectionV3Wrapper } from './style'

const HomeSectionV3 = memo((props) => {
    const { homeInfo } = props
    return (
        <SectionV3Wrapper>
            <SectionHeader title={homeInfo.title} subTitle={homeInfo.subtitle} />
                <ScrollView>
                    {
                        homeInfo.list?.map(item => {
                            return (
                                <RoomItem roomInfo={item} key={item.id} column={5} />
                            )
                        })
                    }
            </ScrollView>
            <SectionFooter />
        </SectionV3Wrapper>
    )
})

HomeSectionV3.propTypes = {
    homeInfo: PropTypes.object
}

export default HomeSectionV3