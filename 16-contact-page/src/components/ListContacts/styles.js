import styled, { css } from 'styled-components';

export const Container = styled.div`
	${({ theme }) => css`
    width: 100%;
    height: 30rem;

    padding: 4.8rem 4rem 0 4rem;
    background: ${theme.colors.primary};
  `}
`;
