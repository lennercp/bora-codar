import styled, { css } from 'styled-components';
export const Container = styled.div`
  ${({ theme }) => css`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;
