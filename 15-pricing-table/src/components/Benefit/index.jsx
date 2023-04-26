import P from 'prop-types';
import * as Styled from './styles';
import { Done } from '@styled-icons/material-outlined/Done';
import { InformationCircle } from '@styled-icons/heroicons-outline/InformationCircle';

export const Benefit = ({ benefit }) => {
  return (
    <Styled.Container>
      <Done />
      <Styled.ContainerBenefit>
        <Styled.Title>{benefit}</Styled.Title>
        <InformationCircle />
      </Styled.ContainerBenefit>
    </Styled.Container>
  );
};
