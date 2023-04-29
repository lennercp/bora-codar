import styled, { css } from 'styled-components';

export const Container = styled.div`
	${({ theme }) => css`
    width: 100%;
    height: fit-content;
    display: flex;
    gap: 5.5rem;
    align-items: start;
  `}
`;

export const ContainerContacts = styled.div`
	${({ theme }) => css`
    width: fit-content;
    height: fit-content;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
    align-items: start;
  `}
`;
