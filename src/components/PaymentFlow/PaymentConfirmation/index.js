import CreditCardContainer from './CreditCardContainer';
import styled from 'styled-components';
import Button from '../../Form/Button';
import { useForm } from '../../../hooks/useForm';
import { toast } from 'react-toastify';
import useToken from '../../../hooks/useToken';
import { createPayment } from '../../../services/paymentApi';
import useTicket from '../../../hooks/api/useTicket';
import { useMemo } from 'react';

export default function PaymentConfirmation({ ticket = useTicket().ticket, getTicket }) {
  const ticketType = useMemo(() => (ticket ? ticket.TicketType : null), [ticket]);

  const token = useToken();

  const { handleSubmit, handleChange, data } = useForm({
    // eslint-disable-next-line
    onSubmit: async ({ number, expiry, cvc, name }) => {
      const cardData = {
        issuer: handleCardIssuer(number),
        number,
        expiry,
        cvc,
        name,
      };

      try {
        await createPayment({ ticketId: ticket.id, cardData }, token);
        await getTicket();
        toast('Pagamento realizado com sucesso! :)');
      } catch (err) {
        toast('Não foi possível realizar o pagamento!');
      }
    },

    initialValues: {
      cvc: '',
      expiry: '',
      name: '',
      number: '',
    },
  });

  if (!ticketType) return <></>;

  return (
    <form onSubmit={handleSubmit}>
      <TextRow>Ingresso escolhido</TextRow>
      <TicketData type="button">
        <p>
          {ticketType.isRemote ? 'Online' : 'Presencial +'}
          {!ticketType.isRemote && (ticketType.includesHotel ? ' Com Hotel' : ' Sem Hotel')}
        </p>
        <p>R$ {ticketType.price.toFixed(2).replace('.', ',')}</p>
      </TicketData>
      <TextRow>Pagamento</TextRow>
      <CreditCardContainer handleChange={handleChange} paymentData={data} />
      <Button type="submit" disabled={false}>
        FINALIZAR PAGAMENTO
      </Button>
    </form>
  );
}

function handleCardIssuer(number) {
  const firstNumber = number.charAt(0);
  const secondNumber = number.charAt(1);

  switch (number) {
  case firstNumber === '4':
    return 'VISA';
  case firstNumber === '5':
    return 'MASTERCARD';
  case firstNumber === '3' && (secondNumber === '6' || secondNumber === '8'):
    return 'DINERS CLUB';
  case firstNumber === '3' && (secondNumber === '7' || secondNumber === '4'):
    return 'AMERICAN EXPRESS';
  case firstNumber === '3' && secondNumber === '5':
    return 'JBC';
  default:
    return 'NONE';
  }
}

const TicketData = styled.button`
  padding: 0 62px;
  height: 108px;
  background-color: #ffeed2;
  border: 1px solid transparent;
  border-radius: 20px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  & p:nth-child(2) {
    color: #898989;
  }
`;

const TextRow = styled.div`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  margin-top: 24px;
  color: #8e8e8e;
`;
