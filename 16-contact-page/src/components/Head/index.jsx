import P from 'prop-types';
import * as Styled from './styles';
import { Text } from '../Text';
import { Search } from '../Search';
import { ContainerIcons } from '../ContainerIcons';

export const Head = () => {
  return (
    <Styled.Container>
      <Styled.ContainerHead>
        <Text>Meus Contatos</Text>
        <ContainerIcons />
      </Styled.ContainerHead>
      <Search />
    </Styled.Container>
  );
};

Head.propTypes = {};
