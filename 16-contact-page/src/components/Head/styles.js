import styled, { css } from 'styled-components';

export const Container = styled.div`
	${({ theme }) => css`
    width: 100%;
    height: 17rem;
    padding: 4rem;
    background: ${theme.colors.secondary};
`}
`;
