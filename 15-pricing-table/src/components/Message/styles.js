import styled, { css } from 'styled-components';

export const Container = styled.p`
	${({ theme }) => css`
    font-family: ${theme.fonts.primary};
    font-weight: 600;
    font-size: 1.4rem;

    color: ${theme.colors.purple200};
    text-transform: uppercase;
  `}
`;
