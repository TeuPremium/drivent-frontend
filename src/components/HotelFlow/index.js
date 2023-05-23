import { Typography } from '@material-ui/core';
import useTicket from '../../hooks/api/useTicket';
import { NoContentCard } from '../NoContentCard';
import HotelContainer from './HotelButton/HotelContainer';
import useBooking from '../../hooks/api/useBookings';
import Booking from './BookingContainer';
import { useState } from 'react';
import LoadingContainer from '../LoadingContainer';

export default function HotelFlow() {
  const { ticket, ticketLoading } = useTicket();
  const { Bookings, BookingsLoading, getBookings } = useBooking();
  const [updateBooking, setUpdateBooking] = useState(false);

  if (ticketLoading || BookingsLoading) {
    return <LoadingContainer />;
  }

  return (
    <>
      <Typography variant="h4">Escolha de quarto e hotel</Typography>
      {ticket?.status !== 'PAID' ? (
        <NoContentCard text={'Você precisa ter confirmado pagamento antes de fazer a escolha de hospedagem'} />
      ) : !ticket.TicketType?.includesHotel ? (
        <NoContentCard
          text={'Sua modalidade de ingresso não inclui hospedagem Prossiga para a escolha de atividades'}
        />
      ) : Bookings && !updateBooking ? (
        <Booking setUpdateBooking={setUpdateBooking} Bookings={Bookings} />
      ) : (
        <HotelContainer
          bookingId={Bookings?.id}
          getBookings={getBookings}
          updateBooking={updateBooking}
          setUpdateBooking={setUpdateBooking}
        />
      )}
    </>
  );
}
