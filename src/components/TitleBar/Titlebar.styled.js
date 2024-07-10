import styled from "styled-components";

export const TitlebarStyled = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    align-items: center;
    background-color: #333;
    color: white;
    padding: 5px;
    height: 30px;
    width: 100%;
    border-radius: 15px 15px 0 0;
    //-webkit-user-select: none;
    -webkit-app-region: drag;
`
export const TitleButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    color: green;
    cursor: pointer;
    font-weight: bold;
    width: 14px;
    height: 14px;
    border: none;
    border-radius: 50%;
    background: yellow;
    font-size: 10px;
    &:hover{
        box-shadow: 0 0 5px silver;
    }
`