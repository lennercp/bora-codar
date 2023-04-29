import P from 'prop-types';
import * as Styled from './styles';
import { Text } from '../Text';

export const Letter = ({ letter, id }) => {
  return (
    <Styled.Container backgroundId={id}>
      <Text size="1.6rem">{letter}</Text>
    </Styled.Container>
  );
};
