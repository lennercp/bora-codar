import styled, { css } from 'styled-components';

export const Container = styled.div`
	${({ theme }) => css`
    width: 100%;
    height: fit-content;

    padding: 4.8rem 4rem 0 4rem;
    background: ${theme.colors.primary};

  `}
`;

export const ContainerContacts = styled.div`
	${({ theme }) => css`
    width: 100%;
    height: 30rem;

    overflow-y: auto;

    background: ${theme.colors.primary};

    display: flex;
    flex-direction: column;
    gap: 5rem;

    ::-webkit-scrollbar {
      width: 0.8rem;
    }

    ::-webkit-scrollbar-thumb {
      background-color: #282843;
      border-radius: 0.6rem;
    }
  `}
`;
