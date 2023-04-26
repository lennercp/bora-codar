import { css } from 'styled-components';

import { Name as NamePlan } from '../NamePlan/styles';
import { Price as PricePlan } from '../NamePlan/styles';
import { Container as Button } from '../Button/styles';
import { Container as Benefits } from '../Benefits/styles';
import { Container as CardPricing } from './styles';
import {
  Container as Benefit,
  Title as TitleBenefit,
  ContainerBenefit,
} from '../Benefit/styles';

export const ultimateCard = (theme) => css`
  background-color: ${theme.colors.gray900};

  & ${NamePlan}, ${PricePlan}, ${Button} {
    color: ${theme.colors.white};
  };

  & ${Button} {
    background-color: ${theme.colors.purple100};
  };

  & ${Button}:hover {
    background-color: ${theme.colors.purple200};
  };

  & ${Benefits} {
    border-top-color: ${theme.colors.gray700};
  }

  & ${Benefit} {
    & svg {
      color: ${theme.colors.green100};
    }

    & ${TitleBenefit} {
      color: ${theme.colors.gray300};
    }

    & ${ContainerBenefit} {
      & svg {
      color: ${theme.colors.gray500};
      }
    }
  }

  &::before {
    position: absolute;
    top: -2rem;
    left: 50%;
    transform: translateX(-50%);
    content: 'Mais vantajoso';
    display: flex;
    justify-content: center;
    align-items: center;
    width: 13rem;
    height: 3.5rem;
    background-color: ${theme.colors.orange};
    border-radius: 0.6rem;
    font-family: ${theme.fonts.primary};
    font-weight: 700;
    font-size: 1.2rem;
    color: ${theme.colors.gray900};
    text-transform: uppercase;
  }
`;
