import styled from 'styled-components';
import useTicket from '../../../hooks/api/useTicket';
import { useMemo } from 'react';
import { FaCheckCircle } from 'react-icons/fa';

export default function PaymentSuccess({ ticket = useTicket().ticket }) {
  const ticketType = useMemo(() => (ticket ? ticket.TicketType : null), [ticket]);

  if (!ticketType) return <></>;

  return (
    <>
      <TextRow>Ingresso escolhido</TextRow>
      <TicketData>
        <p>
          {ticketType.isRemote ? 'Online' : 'Presencial + '}
          {ticketType.includesHotel ? 'Com Hotel' : 'Sem Hotel'}
        </p>
        <p>R$ {ticketType.price.toFixed(2).replace('.', ',')}</p>
      </TicketData>
      <TextRow>Pagamento</TextRow>
      <SuccessMessage>
        <span>
          <FaCheckCircle />
        </span>
        <div>
          <p>Pagamento confirmado!</p>
          <p>Prossiga para escolha de hospedagem e atividades</p>
        </div>
      </SuccessMessage>
    </>
  );
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

const SuccessMessage = styled.div`
  display: flex;
  margin-top: 20px;
  gap: 12px;
  align-items: center;
  & span {
    color: #36b853;
    font-size: 40px;
  }
  & p {
    color: #454545;
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
  }
  & p:nth-child(1) {
    font-weight: 700;
  }
`;
