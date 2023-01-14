import styled from "styled-components";

export const RightWrapper = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    position: relative;
    .btns {
        display: flex;
        font-size: 14px;
        font-weight: 700;
        .btn {
            cursor: pointer;
            padding: 13px 13px;
            border-radius: 25px;

            &:hover {
                background-color: #F7F7F7;
            }
        }
    }
    
    .profile {
        display: flex;
        margin-right: 25px;
        margin-left: 8px;
        padding: 5px;
        align-items: center;
        border: 1px solid #DDDDDD;
        border-radius: 25px;
        cursor: pointer;
        .menu {
            padding: 0 10px;
            
        }
        .avatar {
            color: #717171;
        }
        ${props => props.theme.mixin.boxShadow}
    }

    .panel {
        position: absolute;
        width: 240px;
        background-color: #fff;
        top: 50px;
        right: 24px;
        box-shadow: 0 0 6px rgba(0,0,0,.2);
        border-radius: 10px;

        .top, .bottom {
            padding: 10px 0;

            .login {
                font-weight: 700;
            }

            .item {
                padding: 0 14px;
                height: 40px;
                line-height: 40px;
                cursor: pointer;
                &:hover {
                    background-color: #F7F7F7;
                }
            }
        }
        .top {
            border-bottom: 1px solid #DDDDDD;
        }


    }
`