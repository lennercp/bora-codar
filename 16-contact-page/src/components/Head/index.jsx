import P from 'prop-types';
import * as Styled from './styles';
import { Text } from '../Text';

export const Head = () => {
  return (
    <Styled.Container>
      <Text>Meus Contatos</Text>
    </Styled.Container>
  );
};

Head.propTypes = {};
