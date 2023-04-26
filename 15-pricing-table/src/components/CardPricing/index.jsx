import P from 'prop-types';
import * as Styled from './styles';
import { Button } from '../Button';
import { Benefits } from '../Benefits';
import { Message } from '../Message';
import { NamePlan } from '../NamePlan';

export const CardPricing = ({
  message,
  namePlan,
  pricePlan,
  msgButton,
  benefits = [],
  ultimate = false,
}) => {
  return (
    <Styled.Container ultimate={ultimate}>
      <Message text={message} />
      <NamePlan name={namePlan} price={pricePlan} />
      <Button msg={msgButton} />
      <Benefits list={benefits} />
    </Styled.Container>
  );
};
