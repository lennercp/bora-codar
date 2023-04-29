import P from 'prop-types';
import * as Styled from './styles';
import { Text } from '../Text';

export const Contact = ({ contact }) => {
  return (
    <Styled.Container>
      <Styled.Avatar />
      <Styled.ContainerInfo>
        <Text size="1.6rem" capitalize={true}>
          {contact.name}
        </Text>
        <Styled.Number>{contact.number}</Styled.Number>
      </Styled.ContainerInfo>
    </Styled.Container>
  );
};
