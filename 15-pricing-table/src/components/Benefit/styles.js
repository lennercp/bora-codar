import styled, { css } from 'styled-components';

export const Container = styled.div`
	${({ theme }) => css`
    height: 2.4rem;
    display: flex;
    margin-bottom: 1.6rem;
    align-items: center;

    & svg {
      width: 1.8rem;
      height: 2.8rem;
      color: ${theme.colors.green200};
    }
  `}
`;

export const ContainerBenefit = styled.div`
	${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 0.6rem;

    width: calc(100% - 1.5rem);

    & svg {
      color: ${theme.colors.gray600};
    }
  `}
`;

export const Title = styled.p`
	${({ theme }) => css`
    max-width: 90%;
    font-family: ${theme.fonts.primary};
    font-weight: 400;
    font-size: 1.6rem;
  `}
`;
