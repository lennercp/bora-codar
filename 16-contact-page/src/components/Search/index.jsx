import P from 'prop-types';
import * as Styled from './styles';

export const Search = () => {
  return (
    <Styled.Container>
      <input
        type="search"
        name="search"
        placeholder="Busque por nome ou por dados de contato"
      />
      <Styled.SearchIcon />
    </Styled.Container>
  );
};

Search.propTypes = {};
