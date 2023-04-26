import styled, { css } from 'styled-components';
import { ultimateCard } from './ultimateCard';

export const Container = styled.div`
	${({ theme, ultimate }) => css`
    padding: 4.8rem 3.2rem 3.2rem 3.2rem;
    border: 1px solid ${theme.colors.gray200};
    border-radius: 1rem;
    position: relative;

    &:hover {
      border-color: ${theme.colors.purple100};
      transform: scale(1.05);
    }

    ${ultimate && ultimateCard(theme)}
  `}
`;
