import P from 'prop-types';
import * as Styled from './styles';

export const Button = ({ msg }) => {
  return <Styled.Container>{msg}</Styled.Container>;
};
