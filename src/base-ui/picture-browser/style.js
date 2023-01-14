import styled from "styled-components";

export const BorwserWrapper = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #262626;

    .top {
        height: 86px;
        .close {
            position: absolute;
            top: 10px;
            right: 10px;
            color: #fff;
            cursor: pointer;
        }
    }

    .slider {
        flex: 1;
        position: relative;
        
        .control {
            position: absolute;
            display: flex;
            justify-content: space-between;
            width: 100%;
            top: 50%;
            transform: translateY(-50%);
            color: #fff;
            z-index: 9;
                /* 阻止双击变蓝 */
            -webkit-user-select:none; 
            -moz-user-select:none; 
            -ms-user-select:none; 
            user-select:none;
            .arrow {
                cursor: pointer;
            }
        }

        .borwser_pictures {
            /* position: relative; */
            display: flex;
            justify-content: center;
            height: 100%;
            img {
                position: absolute;
                max-width: 105vh;
                height: 100%;
            }

            .pic-enter {
                transform: translateX(${props => props.isNext ? '100px' : '-100px'});
                opacity: 0;
            }
            .pic-enter-active {
                transform: translateX(0);
                opacity: 1;
                transition: all 0.2s ease;
                }

            .pic-exit {
                transform: translateX(0);
                opacity: 1;
                }

            .pic-exit-active {
                transform: translateX(${props => props.isNext ? '-100px' : '100px'});
                opacity: 0;
                transition: all 0.2s ease;
                }

        }
    }



    .preview {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100px;
        margin-top: 2px;
        margin-bottom: 100px;

        .preview-text {
            width: 56%;
            color: #fff;
            margin-bottom: 13px;
        }

        .scroll {
            
            width: 56%;
            height: 70%;

            .indicator-item {
                position: relative;
                margin: 0 5px;
                height: 70px;
                cursor: pointer;
                img {
                    height: 100%;
                }

                .cover {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-color: rgba(0, 0, 0, 0.6);
                    transition: all 0.5s ease;
                }

                &.active .cover {
                    opacity: 0;
                }
            }
        }
    }
`