import P from 'prop-types';
import * as Styled from './styles';
import { Plus, Edit2, Trash2 } from 'lucide-react';

export const ContainerIcons = () => {
  return (
    <Styled.Container>
      <Plus color="white" />
      <Edit2 color="white" />
      <Trash2 color="white" />
    </Styled.Container>
  );
};
