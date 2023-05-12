import { Typography } from '@material-ui/core';
import { NoContentCard } from '../NoContentCard';
import useEnrollment from '../../hooks/api/useEnrollment';
import useTicketTypes from '../../hooks/api/useTicketTypes';
import useTicket from '../../hooks/api/useTicket';
import { useEffect, useState } from 'react';
import usePaymentPhase from '../../hooks/usePaymentPhase';

export default function PaymentFlow() {
  const { ticket } = useTicket();
  const { enrollment } = useEnrollment();
  const { ticketTypes } = useTicketTypes();

  const [PaymentPhase, setPaymentPhase] = useState(null);

  useEffect(() => {
    setPaymentPhase(usePaymentPhase({ ticket, enrollment, ticketTypes }, setPaymentPhase));
  }, [ticket, enrollment, ticketTypes]);

  return (
    <>
      <Typography variant="h4">Ingressos e pagamento</Typography>
      {PaymentPhase ? (
        PaymentPhase
      ) : (
        <NoContentCard text="Você precisa completar sua inscrição antes de prosseguir pra escolha de ingresso" />
      )}
    </>
  );
}
