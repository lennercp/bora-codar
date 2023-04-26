import styled, { css } from 'styled-components';

export const Container = styled.div`
	${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 2.4rem;
    padding: 1.6rem 2.4rem;
    margin-bottom: 3.2rem;

    color: ${theme.colors.gray800};
    font-family: ${theme.fonts.primary};
    font-weight: 700;
    font-size: 1.6rem;

    background: ${theme.colors.white};
    border: 0.1rem solid ${theme.colors.gray800};
    border-radius: 0.4rem;

    &:hover {
      color: ${theme.colors.white};
      background: ${theme.colors.gray800};
    }
  `}
`;
