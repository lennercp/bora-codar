import styled, { css } from 'styled-components';

export const Container = styled.div`
	${({ theme }) => css`
    width: fit-content;
    display: flex;
    gap: 1.6rem;
  `}
`;
export const ContainerInfo = styled.div`
	${({ theme }) => css`
    display: flex;
    flex-direction: column;
  `}
`;

export const Avatar = styled.div`
	${({ theme }) => css`
    width: 4.8rem;
    height: 4.8rem;
    border-radius: 100%;
    background-color: white;
  `}
`;

export const Number = styled.div`
	${({ theme }) => css`
    font-family: ${theme.fonts.primary};
    font-weight: 400;
    font-size: 1.2rem;
    color: ${theme.colors.number}
  `}
`;
