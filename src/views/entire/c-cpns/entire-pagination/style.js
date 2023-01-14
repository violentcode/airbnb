import styled from "styled-components";

export const PaginationWrapper = styled.div`
    /* 修改andt分页器样式 */
    .ant-pagination-options {
        display: none;
    }

    .ant-pagination-item-link, .ant-pagination-prev {
        border-radius: 50%;
        &:hover {
            border-radius: 50%;
        }
    }

    .ant-pagination-item {
        font-weight: 600;
        &:hover {
            background-color: #F7F7F7;
            border: 1px solid transparent;
            border-radius: 50%;
            text-decoration: underline;
        }
    }

    .ant-pagination-item-active {
        border-radius: 50%;
        background-color: black;
        border-color: black;
        a {
            color: #fff;
        }
        &:hover {
            background-color: black;
            border: 1px solid transparent;
            text-decoration: none;

        }
        &:hover a {
            color: #fff;
        }
    }
    .page {
        display: flex;
        flex-direction: column;
        margin-top: 8px;
        align-items: center;
    }
    .info {
        margin-top: 16px;
    }
`