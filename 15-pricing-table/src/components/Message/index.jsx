import P from 'prop-types';
import * as Styled from './styles';

export const Message = ({ text }) => {
  return <Styled.Container>{text}</Styled.Container>;
};

Message.propTypes = {
  text: P.string.isRequired,
};
