import styled from "styled-components";

export const ScrollWrapper = styled.div`
        position: relative;
    .scroll {
        overflow: hidden;

       .scroll-content {
            display: flex;
            transform: translateX(${props => -props.offsetLeft}px);
            margin-left: ${props => props.marginLeft + 'px'};
            transition: all 0.8s ease;
            white-space: nowrap;
        }
    }

    .left, .right {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        top: 50%;
        transform: translateY(-50%);
        width: 28px;
        height: 28px;
        z-index: 1;
        background-color: rgba(255, 255, 255, .9);
        border-radius: 50%;
        border: 1px solid #DFDFDF;
        cursor: pointer;
        box-shadow: rgb(0 0 0 / 14%) 0px 1px 1px 1px;
        
        &:hover {
            background-color: #fff;
        }
        &:active  {
            border: 1px solid black;
        }
    }
    
    .left {
        left: -14px;
    }

    .right {
        right: -14px;
    }

`