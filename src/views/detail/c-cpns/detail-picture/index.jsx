import React, { memo, useState } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { PictureWrapper } from './style'
import PictureBrowser from '@/base-ui/picture-browser'


const DetailPicture = memo((props) => {
  const [showBrowser, setShowBrowser] = useState(false)
  const {roomInfo} = useSelector(state => ({
    roomInfo: state.detail.roomInfo
  }), shallowEqual)

  return (
    <PictureWrapper>
      <div className="pictures">
        <div className="left">
          <div className="pic-item">
            <div className="item">
              <img src={roomInfo.picture_urls?.[0]} alt="" />
            </div>
            <div className="cover"></div>
          </div>
          
        </div>
        <div className="right">
          <div className="right_1">
          {
            roomInfo.picture_urls?.slice(1, 3).map(item => {
              return (
                <div className="pic-item" key={item}>
                      <div className="item">
                        <img src={item} alt="" />
                      </div>
                      <div className="cover"></div>
                </div>
              )
            })
          }
          </div>
          <div className="right_2">
          {
            roomInfo.picture_urls?.slice(3, 5).map(item => {
              return (
                <div className="pic-item" key={item}>
                      <div className="item">
                        <img src={item} alt="" />
                      </div>
                      <div className="cover"></div>
                </div>
              )
            })
          }
          </div>
        </div>
      </div>
      <div className="check" onClick={e => setShowBrowser(true)} >
        查看照片
      </div>
      {/* 图片浏览器 */}
      {
        showBrowser && 
        <PictureBrowser 
          onClose={() => setShowBrowser(false)} 
          pictureUrls={roomInfo.picture_urls} 
          pictureName={roomInfo.name}
        />
      }
    </PictureWrapper>
  )
})


export default DetailPicture