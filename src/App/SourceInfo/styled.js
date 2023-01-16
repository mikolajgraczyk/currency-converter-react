import styled, { css } from "styled-components";

export const SourceInfoSection = styled.div`
    font-size: 12px;
    margin-top: 20px;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
        font-size: 10px;
        text-align: center;
    };

    ${({ error }) => error && css`
        display: none;
    `};
`;