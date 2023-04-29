import styled, { css } from 'styled-components';

export const Container = styled.div`
	${({ theme, backgroundId }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 4rem;
    height: 4rem;

    background-color: ${theme.colors.letter[backgroundId]};
    border-radius: 0.8rem;
  `}
`;
