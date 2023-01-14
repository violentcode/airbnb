import styled from "styled-components";

export const FilterWrapper = styled.div`
    .filter {
        display: flex;
        position: fixed;
        top: 80px;
        right: 0;
        left: 0;
        z-index: 9;
        padding: 8px 0;
        margin-left: 16px;
        background-color: #fff;
        border-bottom: 1px solid #EDEDED;

        .filter-item {
            padding: 6px 12px;
            margin-left: 12px;
            border: 1px solid #EDEDED;
            border-radius: 3px;
            cursor: pointer;
            &:hover {
                background-color: #F2F2F2;
            }
            &.active {
                color: #fff;
                background-color: ${props => props.theme.color.secondaryColor};
            }
        }
    }
`