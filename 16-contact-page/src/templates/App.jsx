import { useState } from 'react';
import * as Styled from './styles';
import { Head } from '../components/Head';
import { ListContacts } from '../components/ListContacts';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Styled.Container>
      <Head />
      <ListContacts />
    </Styled.Container>
  );
}

export default App;
