import styled from "styled-components";

export const FooterWrapper = styled.div`
    margin-top: 120px;
    border: 1px solid #EBEBEB;
    .footer {
        display: flex;
        justify-content: space-around;
        width: 1032px;
        margin: 0 auto;
        padding-top: 60px;
        font-weight: 700;

    }
    .title {
        margin-bottom: 16px;
    }
    .item {
        padding: 3px 0;
        color: #767676;
        cursor: pointer;
        &:hover {
            text-decoration: underline;
        }
    }
    
`