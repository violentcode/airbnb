import styled from "styled-components";

export const CenterWrapper = styled.div`
    .search {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 6px 8px 6px 20px;
        font-weight: 700;
        width: 270px;
        border: 1px solid #E3E3E3;
        border-radius: 25px;
        cursor: pointer;
        ${props => props.theme.mixin.boxShadow}
        .search-icon {
            padding: 10px;
            background-color: ${props => props.theme.color.primaryColor};
            color: white;
            border-radius: 50%;
        }
    }
`