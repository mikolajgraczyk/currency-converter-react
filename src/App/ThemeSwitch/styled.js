import styled, { css } from "styled-components";

export const Switch = styled.button`
  background: none;
  position: absolute;
  width: 27px;
  height: 27px;
  top: 20px;
  left: 20px;
  border: none;
  border-radius: 50%;
  transition: 0.3s;
  padding: 0;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }

  &:active {
    transform: scale(1.2);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    top: 5px;
    left: 0px;
  }
`;

export const SwitchImage = styled.img`
  padding: 3px;
  width: 27px;
  border-radius: 50%;
  padding: 2px;

  ${({ light }) =>
    light &&
    css`
      background: white;
    `}

  ${({ light }) =>
    !light &&
    css`
      background: black;
    `}

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 20px;
    height: 20px;
  }
`;
