import RoomItem from '@/components/room-item'
import React, { memo } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RoomsWrapper } from './style'

const EntireRooms = memo(() => {
  const {entireList, totalCount, isLoading} = useSelector(state => ({
    entireList: state.entire.entireList,
    totalCount: state.entire.totalCount,
    isLoading: state.entire.isLoading
  }), shallowEqual)

  const navigate = useNavigate()

  function handleRoomClick() {
    navigate('/detail')
  }

  return (
    <RoomsWrapper>
      {
        !!entireList.length && <h2 className='title'>{totalCount}多处住宿</h2>
      }
      <div className="rooms">
        {
          entireList.map(item => {
            return (
              <RoomItem roomInfo={item} column={5} key={item._id} onRoomClick={handleRoomClick}/>
            )
          })
        }
      </div>
      {
        isLoading && <div className="cover"></div>
      }
    </RoomsWrapper>
  )
})

export default EntireRooms