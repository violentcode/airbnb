import styled from "styled-components";

function columnToFlex(col) {
    return ((1 / col) * 100) + '%'
}

export const RoomItemWrapper = styled.div`
    box-sizing: border-box;
    padding: 0 8px;
    margin-bottom: 15px;
    width: ${props => {
        return columnToFlex(props.column)
    }};
    flex-shrink: 0;
    .inner {
    }

    /* 图片样式 */
    .cover {
        position: relative;
        padding: 66.66% 8px 0;
        overflow: hidden;
        border-radius: 3px;
        cursor: pointer;
    }

    .cover img {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }


    /* 底部信息样式 */
    .desc {
        margin-top: 10px;
        margin-bottom: 3px;
        font-size: 12px;
        color: ${props => props.verifyColor};
        font-weight: 700;
        cursor: pointer;

        .badge {
            padding: 1px 3px;
            margin-right: 2px;
            color: #fff;
            background-color: ${props => props.verifyColor};
            border-radius: 4px;
        }

    }
    .name {
        font-size: 16px;
        font-weight: 700;
        -webkit-line-clamp: 2;
        display: -webkit-box;   
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: normal;
        cursor: pointer;

    }

    .price {
        padding: 5px 0;
    }
    
    .bottom {
        font-weight: 700;
        display: flex;
        .ant-rate {
            font-size: 9px;
            color: ${props => props.rakeColor};
            .ant-rate-star {
                margin-right: 1px;

            }
        }
        .count {
            margin-top: 3px;
            font-size: 12px;
        }
        .bottom_content {
            margin-top: 3px;

            font-size: 12px;
        }

    }
`