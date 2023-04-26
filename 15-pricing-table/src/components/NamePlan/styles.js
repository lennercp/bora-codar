import styled, { css } from 'styled-components';

export const Container = styled.div`
	${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 0.8rem;
    margin-bottom: 3.2rem;
  `}
`;

export const Name = styled.h2`
	${({ theme }) => css`
    font-family: ${theme.fonts.primary};
    font-weight: 700;
    font-size: 3.2rem;
    color: ${theme.colors.gray800};

    @media (max-width:768px) {
      font-size: 2.4rem;
    }
  `}
`;

export const Price = styled.h2`
	${({ theme }) => css`
    font-family: ${theme.fonts.primary};
    font-weight: 400;
    font-size: 1.6rem;
    color: ${theme.colors.gray800};

    b {
      font-size: 2.4rem;
    }

    @media (max-width:768px) {
      b {
      font-size: 2rem;
      }
    }
  `}
`;
