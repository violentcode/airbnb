import styled from "styled-components";

export const SwiperWrapper = styled.div`
        /* 轮播图样式 */
        .swiper {
        position: relative;
        cursor: pointer;
        :hover .control .btn {
            visibility: visible ;
            background:linear-gradient(to left,  transparent 0%,  rgba(0,0,0,0.25) 100%);
            &.right {
                background:linear-gradient(to right,  transparent 0%,  rgba(0,0,0,0.25) 100%);

            }
        }
        
        .control {
            position: absolute;
            display: flex;
            justify-content: space-between;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 1;
            color: #fff;
            .btn {
                visibility: hidden;
                display: flex;
                align-items: center;
                
            }
            .left {
                padding-left: 20px;
                padding-right: 10px;

            }
            .right {
                padding-left: 10px;
                padding-right: 20px;
            }
        }

        .indicator {
            position: absolute;
            bottom: 10px;
            width: 110px;
            left: 50%;
            transform: translateX(-50%);

            .indicator-item {
                margin-right: 10px;
                width: 6px;
                height: 6px;
                border-radius: 50%;
                background-color: #E4DFD8;
                &.active {
                
                    width: 8px;
                    height: 8px;
                    background-color: #fff;
                }
            }
        }
        
    }
`