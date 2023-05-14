import { NoContentCard } from '../../NoContentCard';
import useEnrollment from '../../../hooks/api/useEnrollment';
import useTicketTypes from '../../../hooks/api/useTicketTypes';
import useTicket from '../../../hooks/api/useTicket';
import { useEffect, useState } from 'react';
import SelectTicketType from '../TicketTypes/SelectTicketType';
import PaymentConfirmation from '../PaymentConfirmation';
import PaymentSuccess from '../PaymentSuccess';
import ReactLoading from 'react-loading';
import styled from 'styled-components';

export default function CurrentPaymentPhase() {
  const { ticket } = useTicket();
  const { enrollment } = useEnrollment();
  const { ticketTypes } = useTicketTypes();

  const [PaymentPhase, setPaymentPhase] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!isLoading) {
      if (ticket)
        return setPaymentPhase(
          ticket.status === 'RESERVED' ? (
            <PaymentConfirmation ticket={ticket} setPaymentPhase={setPaymentPhase} />
          ) : (
            <PaymentSuccess ticket={ticket} />
          )
        );

      if (!ticket && enrollment)
        return setPaymentPhase(<SelectTicketType ticketType={ticketTypes} setPaymentPhase={setPaymentPhase} />);

      if (!ticket && !enrollment)
        setPaymentPhase(
          <NoContentCard text="Você precisa completar sua inscrição antes de prosseguir pra escolha de ingresso" />
        );
    }

    setTimeout(() => setIsLoading(false), 700);
  }, [ticket, enrollment, ticketTypes, isLoading]);

  return PaymentPhase ? (
    PaymentPhase
  ) : (
    <LoadingContainer>
      <ReactLoading type="bubbles" color="#000000" height={100} width={100} />
    </LoadingContainer>
  );
}

const LoadingContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;
