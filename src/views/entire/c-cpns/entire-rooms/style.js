import styled from "styled-components";

export const  RoomsWrapper = styled.div`
    position: relative;
    margin-top: 126px;
    padding: 20px;
    .title {
        padding-left: 6px;
        margin-bottom: 40px;
        color: black;
    }
    .rooms {
        display: flex;
        flex-wrap: wrap;
    }
    > .cover {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(255, 255, 255, .8);
    }
`