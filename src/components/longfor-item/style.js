import styled from "styled-components";

export const ItemWrapper = styled.div`
        flex-shrink: 0;
        width: 20%;
    .inner {
        padding: 0 8px;
        position: relative;
        .cover {
         width: 100%;
         position: relative;
        cursor: pointer;
            img {
                width: 100%;
                }
            .cover-bg {
                background-image: linear-gradient(-180deg, rgba(0, 0, 0, 0) 3%, rgb(0, 0, 0) 100%) ;
                opacity: 0.6 ;
                position: absolute ;
                height: 60% ;
                width: 100% ;
                left: 0px ;
                bottom: 0px ;
            }
        }

        .info {
                position: absolute ;
                bottom: 32px ;
                left: 0px ;
                right: 0px ;
                text-align: center;
                color: #fff;
                font-weight: 700;

                .city {
                    margin-bottom: 3px;
                    font-size: 18px;
                }
                .price {

                }
        }
    }
` 