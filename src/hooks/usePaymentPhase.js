import SelectTicketType from '../components/payment/ticketTypes/selectTicketType';
import PaymentConfirmation from '../components/PaymentFlow/PaymentConfirmation';
import PaymentSuccess from '../components/PaymentFlow/PaymentSuccess';

export default function usePaymentPhase({ ticket, enrollment, ticketTypes }, setPaymentPhase) {
  if (ticket)
    return ticket.status === 'RESERVED' ? (
      <PaymentConfirmation ticket={ticket} setPaymentPhase={setPaymentPhase} />
    ) : (
      <PaymentSuccess ticket={ticket} />
    );

  if (!ticket && enrollment)
    return (
      <>
        <SelectTicketType ticketType={ticketTypes} setPaymentPhase={setPaymentPhase} />
      </>
    );
}
