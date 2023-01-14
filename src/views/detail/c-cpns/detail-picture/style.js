import styled from "styled-components";

export const PictureWrapper = styled.div`
    position: relative;
    .pictures {
        display: flex;
        cursor: pointer;
        &:hover .cover {
            opacity: 1 !important;
        }
        .pic-item {
            height: 100%;
            position: relative;
            .item {
                overflow: hidden;

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: all 0.5s ease;
                }
                
            }

            .cover {
                opacity: 0;
                position: absolute;
                left: 0;
                right: 0;
                bottom: 0;
                top: 0;
                background-color: rgba(0, 0, 0, .3);
                transition: all 0.5s ease;
            }
            &:hover img {
                    transform: scale(1.08);
                }
            
            &:hover .cover {
                opacity: 0 !important;
            }
        }

        .left {
            border: 1px solid black;
            width: 50%;
            .item {
                height: 438px;
            }
        }

        .right {
            display: flex;
            width: 50%;
            height: 436px;

            .right_1, .right_2 {
                width: 50%;
            }
            .pic-item {
                border: 1px solid black;
                height: 50%;

                .item {
                    height: 100%;
                }
            }
        }
            
        
    }
    
    .check {
        position: absolute;
        top: 375px;
        right: 20px;
        padding: 10px 15px;
        background-color: #fff;
        font-weight: 700;
        border-radius: 5px;
        box-shadow: 0 5px 5px rgba(0, 0, 0, .3);
        cursor: pointer;
    }
`