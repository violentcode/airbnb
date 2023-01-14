import styled from "styled-components";

export const IndicatorWrapper = styled.div`
        overflow: hidden;

        .indicator-list {
            position: relative;
            display: flex;
            justify-content: space-between;
            align-items: center;
            transition: all 0.3s ease;
            > * {
                flex-shrink: 0;
            }
        }
`