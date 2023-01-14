import styled from "styled-components";

export const TabsWrapper = styled.div`
        margin-bottom: 26px;

    .item {
        box-sizing: border-box;
        flex-basis: 120px;
        flex-shrink: 0;
        margin-right: 16px;
        padding: 14px 16px;
        border: 1px solid #D8D8D8;
        cursor: pointer;
        font-weight: 700;
        font-size: 17px;
        white-space: nowrap;
        border-radius: 3px;
        text-align: center;
        ${props => props.theme.mixin.boxShadow}
        &.active {
            color: #fff;
            background-color: ${props => props.theme.color.secondaryColor};
        }
    }
`