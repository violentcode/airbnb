import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import { TabsWrapper } from './style'
import classNames from 'classnames'
import ScrollView from '@/base-ui/scroll-view'

const SectionTabs = memo((props) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    function handleChangeActive(index) {
        setCurrentIndex(index)
        tabsClick(index)
    }
    const {tabNames = [], tabsClick} = props

    return (
        <TabsWrapper>
            <ScrollView>
            {
                tabNames.map((item, index) => {
                    return (
                            <div 
                            key={item} 
                            className={classNames('item', {active: index === currentIndex})} 
                            onClick={e => handleChangeActive(index)}>{item}</div>
                    )
                })
            }
            </ScrollView>
        </TabsWrapper>
    )
})

SectionTabs.propTypes = {
    tabNames: PropTypes.array,
    tabsClick: PropTypes.func
}

export default SectionTabs