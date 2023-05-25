import { NoContentCard } from '../../NoContentCard';
import useEnrollment from '../../../hooks/api/useEnrollment';
import useTicketTypes from '../../../hooks/api/useTicketTypes';
import useTicket from '../../../hooks/api/useTicket';
import SelectTicketType from '../TicketTypes/SelectTicketType';
import PaymentConfirmation from '../PaymentConfirmation';
import PaymentSuccess from '../PaymentSuccess';
import LoadingContainer from '../../LoadingContainer';

export default function CurrentPaymentPhase() {
  const { ticket, ticketLoading, getTicket } = useTicket();
  const { enrollment, enrollmentLoading } = useEnrollment();
  const { ticketTypes, ticketTypesLoading } = useTicketTypes();

  return ticketLoading || enrollmentLoading || ticketTypesLoading ? (
    <LoadingContainer />
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
