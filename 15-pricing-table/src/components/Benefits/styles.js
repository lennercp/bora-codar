import styled, { css } from 'styled-components';

export const Container = styled.div`
	${({ theme }) => css`
    border-top: 0.1rem solid ${theme.colors.gray200};

    padding-top: 3.2rem;
  `}
`;
