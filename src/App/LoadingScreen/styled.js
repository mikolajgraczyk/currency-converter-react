import styled from "styled-components";

export const LoadingTextSection = styled.span`
    font-size: 30px;
    justify-self: center;
    font-weight: 900;
    display: flex;
    align-items: center;
    gap: 20px;

    @media(max-width: 700px){
        font-size: 25px;
        gap: 10px;
    }
`;

export const LoadingGif = styled.img`
    width: 50px;

    @media(max-width: 700px){
        width: 30px;
    }
`;