import P from 'prop-types';
import * as Styled from './styles';
import { LettersContacts } from '../LettersContacts';

export const ListContacts = ({ contacts }) => {
  return (
    <Styled.Container>
      <Styled.ContainerContacts>
        {Object.keys(contacts).map((letter, index) => (
          <LettersContacts
            id={index}
            key={letter}
            letter={letter}
            contacts={contacts[letter]}
          />
        ))}
      </Styled.ContainerContacts>
    </Styled.Container>
  );
};

// ListContacts.propTypes = {
//   children: P.node.isRequired,
// };
