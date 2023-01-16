import styled from "styled-components";

export const Hour = styled.div`
    font-size: 28px;
    flex: auto;
    letter-spacing: 2px;
    align-self: flex-start;
    margin-left: 20px;

    @media(max-width: 700px) {
        font-size: 40px;
        grid-column-start: 2;
        grid-column-end: 2;
        margin-top: -7px;
        margin-left: 0;
    }
`;

export const Day = styled.div`
    font-size: 100px;
    flex: auto;

    @media(max-width: 700px) {
        font-size: 25px;
        justify-self: left;
        grid-row-start: 1;
        grid-row-start: 2;
    }
`;

export const Month = styled.div`
    font-size: 35px;
    flex: auto;

    @media(max-width: 700px) {
        font-size: 25px;
        grid-row-start: 1;
        grid-row-start: 2;
    }
`;

export const Year = styled.div`
    font-size: 20px;
    flex: auto;

    @media(max-width: 700px) {
        font-size: 25px;
        grid-row-start: 1;
        grid-row-start: 2;
        justify-self: right;
    }
`;