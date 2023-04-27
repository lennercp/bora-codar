import P from 'prop-types';
import * as Styled from './styles';

export const Text = ({ children, size = '2rem', weight = '700' }) => {
  return (
    <Styled.Container size={size} weight={weight}>
      {children}
    </Styled.Container>
  );
};

Text.propTypes = {
  children: P.node.isRequired,
};
