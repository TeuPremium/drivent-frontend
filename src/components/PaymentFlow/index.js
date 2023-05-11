import { Typography } from '@material-ui/core';
import useEnrollment from '../../hooks/api/useEnrollment';
import useTicketTypes from '../../hooks/api/useTicketTypes';
import useTicket from '../../hooks/api/useTicket';
import { NoContentCard } from '../NoContentCard';
import SelectTicketType from '../payment/ticketTypes/selectTicketType';

export default function PaymentFlow() {
  const { enrollment } = useEnrollment();
  const { ticketTypes } = useTicketTypes();
  const { ticket } = useTicket();

  return (
    <>
      <Typography variant="h4">Ingressos e pagamento</Typography>
      {enrollment ? (
        <SelectTicketType />
      ) : (
        <NoContentCard text="Você precisa completar sua inscrição antes de prosseguir pra escolha de ingresso" />
      )}
    </>
  );
}
