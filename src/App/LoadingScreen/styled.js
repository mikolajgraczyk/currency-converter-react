import styled from "styled-components";

export const LoadingTextSection = styled.div`
    font-size: 30px;
    height: 292.5px;
    justify-self: center;
    font-weight: 900;
    display: flex;
    align-items: center;
    gap: 20px;

     @media(max-width: ${({theme}) => theme.breakpoint.mobileMax}px) {
        font-size: 25px;
        gap: 10px;
        height: 383.5px;
    }
`;

export const LoadingGif = styled.img`
    width: 50px;

     @media(max-width: ${({theme}) => theme.breakpoint.mobileMax}px) {
        width: 30px;
    }
`;