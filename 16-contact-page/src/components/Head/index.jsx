import P from 'prop-types';
import * as Styled from './styles';
import { Text } from '../Text';
import { Search } from '../Search';

export const Head = () => {
  return (
    <Styled.Container>
      <Text>Meus Contatos</Text>
      <Search />
    </Styled.Container>
  );
};

Head.propTypes = {};
