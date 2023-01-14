import styled from "styled-components"

export const HeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    background-color: #fff;
    height: 80px;
    border-bottom: 1px solid #EDEDED;
    
    &.fixed {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 99;
    }
`