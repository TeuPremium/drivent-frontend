import { useMemo } from 'react';
import SelectTicketType from '../components/payment/ticketTypes/selectTicketType';
import useEnrollment from './api/useEnrollment';
import useTicket from './api/useTicket';
import useTicketTypes from './api/useTicketTypes';

export default function usePaymentPhase() {
  //   const { enrollment } = useEnrollment();
  const { ticketTypes } = useTicketTypes();
  //   const { ticket } = useTicket();

  const enrollment = true;
  const ticket = false;

  const PaymentPhase = useMemo(() => {
    if (ticket) return ticket.status === 'RESERVED' ? <></> : <></>;

    if (!ticket && enrollment)
      return (
        <>
          <SelectTicketType ticketType={ticketTypes} />
        </>
      );

    return null;
  }, [ticket, enrollment, ticketTypes]);

  return { PaymentPhase };
}
