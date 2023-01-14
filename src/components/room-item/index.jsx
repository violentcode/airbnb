import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { RoomItemWrapper } from './style'
import { Rate } from 'antd';

import EntireSwiper from '@/views/entire/c-cpns/entire-swiper';
import { changeRoomInfoAction } from '@/store/modules/detail';
import { useDispatch } from 'react-redux';

const RoomItem = memo((props) => {
  const dispatch = useDispatch()

  function handleClickRoom() {
    if (onRoomClick) onRoomClick()
    dispatch(changeRoomInfoAction(roomInfo))
  }

  const {roomInfo, column, onRoomClick} = props
  return (
    <RoomItemWrapper 
    verifyColor={roomInfo.verify_info.text_color || '#767676'} 
    rakeColor={roomInfo.star_rating_color || '#008489'} 
    column={column}>
        <div className="inner">
          {
            // 如果picture_urls有值，渲染轮播图
            !roomInfo.picture_urls ? 
            (
              <div className="cover"  onClick={handleClickRoom}>
                <img src={roomInfo.picture_url} alt="" />
              </div>
            ) 
            : <div className="picture" onClick={handleClickRoom}>
                <EntireSwiper pictureUrls={roomInfo.picture_urls}/>
              </div>
          }

          <div className="desc">
            {
              roomInfo.verify_info.kicker_badge && 
              <span className="badge">
                {
                  roomInfo.verify_info.kicker_badge.label.toUpperCase()
                }
              </span>
            }
            <span className='message' onClick={handleClickRoom}>
              {
                roomInfo.verify_info.messages.join('·')
              }
            </span>
          </div>
          <div className="name" onClick={handleClickRoom}>{roomInfo.name}</div>
          <div className="price" >￥{roomInfo.price}/晚</div>
          <div className="bottom">
            <span className="rate">
              <Rate disabled defaultValue={roomInfo.star_rating ?? 4.5} allowHalf/>
            </span>
            <span className='count'>{roomInfo.reviews_count}</span>
             <span className='bottom_content'>
              {
               roomInfo.bottom_info?.content && '·' + roomInfo.bottom_info.content
              }
             </span>
          </div>
        </div>
    </RoomItemWrapper>
  )
})

RoomItem.propTypes = {
  roomInfo: PropTypes.object,
  column: PropTypes.number,
  onRoomClick: PropTypes.func
}

export default RoomItem