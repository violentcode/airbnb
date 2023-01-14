import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { RoomsWrapper } from './style'
import RoomItem from '../room-item'

const SectionRooms = memo((props) => {
    const {roomList, column } = props
    return (
        <RoomsWrapper>
            <div className="room-list">
            {
                roomList.slice(0, 8).map(item => {
                    return (<RoomItem roomInfo={item} key={item.id} column={column}  />)
                })
            }
            </div>
        </RoomsWrapper>
    )
})

SectionRooms.propTypes = {
    roomList: PropTypes.array,
    column: PropTypes.number
}
SectionRooms.defaultProps = {
    roomList: [],
    
  }

export default SectionRooms