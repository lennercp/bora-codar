import styled, { css } from 'styled-components';

export const Container = styled.p`
	${({ theme, size, weight }) => css`
    font-family: ${theme.fonts.primary};
    font-weight: ${weight};
    font-size: ${size};
    color: ${theme.colors.white};
  `}
`;
