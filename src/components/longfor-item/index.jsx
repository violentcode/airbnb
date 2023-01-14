import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { ItemWrapper } from './style'

const LoginfoItem = memo((props) => {
    const {itemInfo} = props
    return (
        <ItemWrapper>
            <div className="inner">
                <div className="cover">
                    <img src={itemInfo.picture_url} alt="" />
                    <div className="cover-bg"></div>
                </div>
                
                <div className="info">
                    <div className="city">{itemInfo.city}</div>
                    <div className="price">均价 {itemInfo.price}</div>
                </div>
            </div>
        </ItemWrapper>
    )
})

LoginfoItem.propTypes = {
    itemInfo: PropTypes.object
}

export default LoginfoItem