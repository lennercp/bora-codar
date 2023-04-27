import styled, { css } from 'styled-components';
import { Search } from '@styled-icons/bootstrap/Search';

export const Container = styled.div`
	${({ theme }) => css`
    position: relative;
    margin-top: 2.4rem;
    & input{
      background-color: ${theme.colors.third};
      color: ${theme.colors.white};
      padding: 1.3rem 2.4rem 1.3rem 5rem;
      width: 100%;
      height: 4rem;
      border: 0px;
      border-radius: 0.5rem;
    }

    & input::placeholder{
      color: ${theme.colors.white};
    }
  `}
`;

export const SearchIcon = styled(Search)`
	${({ theme }) => css`

    position: absolute;
    top: 1.3rem;
    left: 2.5rem;
    color: ${theme.colors.white};
    width: 1.3rem;
    height: 1.3rem;
  `}
`;
