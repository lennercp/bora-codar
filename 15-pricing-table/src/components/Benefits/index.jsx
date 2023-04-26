import P from 'prop-types';
import * as Styled from './styles';
import { Benefit } from '../Benefit';

export const Benefits = ({ list = [] }) => {
  return (
    <Styled.Container>
      {list.map((benefit) => (
        <Benefit key={benefit} benefit={benefit} />
      ))}
    </Styled.Container>
  );
};

Benefits.propTypes = {
  list: P.arrayOf(P.string),
};
