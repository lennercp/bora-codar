import * as Styled from './styles';
import { Head } from '../components/Head';
import { ListContacts } from '../components/ListContacts';
import contacts from './contacts';

function App() {
  return (
    <Styled.Container>
      <Head />
      <ListContacts contacts={contacts} />
    </Styled.Container>
  );
}

export default App;
