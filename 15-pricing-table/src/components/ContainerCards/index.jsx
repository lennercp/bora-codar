import * as Styled from './styles';
import { CardPricing } from '../CardPricing';

export const ContainerCards = () => {
  return (
    <Styled.Container>
      <CardPricing
        message={'Para você começar'}
        namePlan={'Essentials'}
        pricePlan={'19,97'}
        msgButton={'Assinar Agora'}
        benefits={['Até 3 usuários', 'Autoatendimento']}
      />
      <CardPricing
        message={'Para você começar'}
        namePlan={'Ultimate'}
        pricePlan={'29,97'}
        msgButton={'Assinar Agora'}
        benefits={[
          'Usuários ilimitados ',
          'Suporte 24/7',
          'CSM Dedicado',
          'Treinamentos',
        ]}
        ultimate={true}
      />
      <CardPricing
        message={'Para sua empresa'}
        namePlan={'Enterprise'}
        msgButton={'Fale com a gente'}
        benefits={[
          'Plano customizado especialmente para a necessidade de seu negocio',
        ]}
      />
    </Styled.Container>
  );
};
