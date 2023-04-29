import P from 'prop-types';
import * as Styled from './styles';
import { Letter } from '../Letter';
import { Contact } from '../Contact';

export const LettersContacts = ({ letter, contacts, id }) => {
  return (
    <Styled.Container>
      <Letter id={id} letter={letter} />

      <Styled.ContainerContacts>
        {contacts.map((contact, id) => (
          <Contact key={id} contact={contact} />
        ))}
      </Styled.ContainerContacts>
    </Styled.Container>
  );
};
