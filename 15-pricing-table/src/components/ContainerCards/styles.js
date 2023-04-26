import styled, { css } from 'styled-components';

export const Container = styled.div`
	${({ theme }) => css`
    width: 80%;
    height: 40rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3.2rem;

    @media (max-width:768px) {
      grid-template-columns: 1fr;
    }
  `}
`;
