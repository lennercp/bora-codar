import { useState } from 'react';
import * as Styled from './styles';
import { ContainerCards } from '../components/ContainerCards';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Styled.Container>
      <ContainerCards />
    </Styled.Container>
  );
}

export default App;
