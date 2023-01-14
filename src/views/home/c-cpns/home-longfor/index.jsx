import ScrollView from '@/base-ui/scroll-view'
import LoginfoItem from '@/components/longfor-item'
import SectionHeader from '@/components/section-header'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { LongforWrapper } from './style'

const HomeLongfor = memo((props) => {
    const {homeInfo} = props
  return (
    <LongforWrapper>
        <SectionHeader title={homeInfo.title} subTitle={homeInfo.subtitle} />
        <ScrollView marginLeft={-8}>
            {
              homeInfo.list?.map(item => {
                return (
                    <LoginfoItem itemInfo={item} key={item.picture_url}/>
                )
              })
            }
        </ScrollView>
    </LongforWrapper>
  )
})

HomeLongfor.propTypes = {
    homeInfo: PropTypes.object
}

export default HomeLongfor