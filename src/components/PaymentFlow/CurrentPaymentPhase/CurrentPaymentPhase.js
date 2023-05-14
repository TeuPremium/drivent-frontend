import { NoContentCard } from '../../NoContentCard';
import useEnrollment from '../../../hooks/api/useEnrollment';
import useTicketTypes from '../../../hooks/api/useTicketTypes';
import useTicket from '../../../hooks/api/useTicket';
import SelectTicketType from '../TicketTypes/SelectTicketType';
import PaymentConfirmation from '../PaymentConfirmation';
import PaymentSuccess from '../PaymentSuccess';
import ReactLoading from 'react-loading';
import styled from 'styled-components';

export default function CurrentPaymentPhase() {
  const { ticket, ticketLoading, getTicket } = useTicket();
  const { enrollment, enrollmentLoading } = useEnrollment();
  const { ticketTypes, ticketTypesLoading } = useTicketTypes();

  return ticketLoading || enrollmentLoading || ticketTypesLoading ? (
    <LoadingContainer>
      <ReactLoading type="bubbles" color="#000000" height={100} width={100} />
    </LoadingContainer>
  ) : (
    <>
      {!enrollment ? (
        <NoContentCard text="Você precisa completar sua inscrição antes de prosseguir pra escolha de ingresso" />
      ) : !ticket ? (
        <SelectTicketType ticketTypes={ticketTypes} getTicket={getTicket} />
      ) : ticket.status === 'PAID' ? (
        <PaymentSuccess ticket={ticket} />
      ) : (
        <PaymentConfirmation ticket={ticket} getTicket={getTicket} />
      )}
    </>
  );
}

const LoadingContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;
