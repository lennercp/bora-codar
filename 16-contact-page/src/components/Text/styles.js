import styled, { css } from 'styled-components';

const handleCapitalize = () => css`
  text-transform: capitalize;
`;

export const Container = styled.p`
	${({ theme, size, weight, capitalize }) => css`
    font-family: ${theme.fonts.primary};
    font-weight: ${weight};
    font-size: ${size};
    color: ${theme.colors.white};
    ${capitalize && handleCapitalize()}
  `}
`;
