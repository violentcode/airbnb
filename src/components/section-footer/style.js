import styled from "styled-components";

export const FooterWrapper = styled.div`
    display: flex;
    align-items: center;
    color: ${props => props.textColor};
    font-size: 17px;
    font-weight: 700;
    .footer {
        display: flex;
        align-items: center;
        cursor: pointer;
        &:hover {
            text-decoration: underline;
        }
        .footer-text {
        margin-right: 5px;
        
    }

    }

`