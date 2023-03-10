import styled, { css } from "styled-components";

export const FormSection = styled.form`
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: 15px;
    align-items: center;

     @media(max-width: ${({theme}) => theme.breakpoint.mobileMax}px) {
        grid-template-columns: 1fr;
        grid-gap: 20px;
    }

    ${({ error }) => error && css`
    grid-template-columns: 1fr;
    `}
`;

export const FormText = styled.span`
    font-size: 18px;
    cursor: default;
`;

export const Interactions = styled.div`
    margin: 0;
    display: grid;
    grid-gap: 6px;

     @media(max-width: ${({theme}) => theme.breakpoint.mobileMax}px) {
        grid-gap: 3px;
    }
`;

export const SwapButton = styled.button`
    transition: 0.3s;
    background: none;
    border: none;
    padding: 0;
    margin: 0; 
    grid-column-start: 2;
    grid-column-end: 3;
    justify-self: center;

    @media(max-width: ${({theme}) => theme.breakpoint.mobileMax}px) {
        grid-column-start: 0;
        grid-column-end: 1;
    }

    &:hover{
        cursor: pointer;
        transform: scale(1.1);
    }

    &:active{
        transform: scale(1.2);
    }
`;

export const Input = styled.input`
    padding: 5px;
    border: none;
    border-radius: 3px;
    transition: 0.2s;

    &:hover{
        cursor: pointer;
        background-color: ${({ theme }) => theme.color.alto};
    }
`;

export const Select = styled.select`
    padding: 5px;
    border: none;
    background-color: white;
    border-radius: 3px;
    transition: 0.2s;

    &:hover{
        cursor: pointer;
         background-color: ${({ theme }) => theme.color.alto};
    }
`;

export const SubmitButton = styled.button`
    grid-column-start: 1;
    grid-column-end: 3;
    padding: 5px;
    border: none;
    background-color: white;
    border-radius: 5px;
    transition: 0.2s;

     @media(max-width: ${({theme}) => theme.breakpoint.mobileMax}px) {
        grid-column-start: 0;
        grid-column-end: 1;
    }

    &:hover{
        cursor: pointer;
        background-color: ${({ theme }) => theme.color.alto};
    }

    &:active{
        background-color: ${({ theme }) => theme.color.silver};
    }
`;

export const ErrorInfo = styled.span`
    text-align: center;
    font-size: 20px;
    padding: 60px;
    color: red;

     @media(max-width: ${({theme}) => theme.breakpoint.mobileMax}px) {
        padding: 20px;
        font-size: 18px;
    }
`;