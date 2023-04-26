import P from 'prop-types';
import * as Styled from './styles';

export const NamePlan = ({ name, price }) => {
  return (
    <Styled.Container>
      <Styled.Name>{name}</Styled.Name>
      {price && (
        <Styled.Price>
          R$ <b>{price}</b>/mês
        </Styled.Price>
      )}
    </Styled.Container>
  );
};

NamePlan.propTypes = {
  children: P.node.isRequired,
};
