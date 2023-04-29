import P from 'prop-types';
import * as Styled from './styles';

export const Text = ({
  children,
  size = '2rem',
  weight = '700',
  capitalize = false,
}) => {
  return (
    <Styled.Container size={size} weight={weight} capitalize>
      {children}
    </Styled.Container>
  );
};

// Text.propTypes = {
//   children: P.node.isRequired,
// };
