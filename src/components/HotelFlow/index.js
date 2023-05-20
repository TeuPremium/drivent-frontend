import { Typography } from '@material-ui/core';
import useTicket from '../../hooks/api/useTicket';
import { NoContentCard } from '../NoContentCard';
import HotelContainer from './HotelButton/HotelContainer';
import styled from 'styled-components';
import ChosenRoom from './HotelButton/ChosenRoom';
import useBooking from '../../hooks/api/useBookings';
import { Button } from '@material-ui/core';
import { useState } from 'react';

export default function HotelFlow({ updateBooking }) {
  const { ticket } = useTicket();
  const { Bookings } = useBooking();
  const [changeHotel, setChangeHotel] = useState(false);

  //deixei aqui com um if porque colocar outro ternário no retorno debaixo
  //deixaria difícil de entender o que está acontecendo.
  if (Bookings && !changeHotel) {
    return (
      <>
        <StyledTypography variant="h4">Escolha de quarto e hotel</StyledTypography>
        <ChosenRoom Bookings={Bookings} />
        <SelectButton style={{ background: ' #E0E0E0' }} onClick={() => setChangeHotel(true)}>
          Trocar Reserva
        </SelectButton>
      </>
    );
  }

  return (
    <>
      <StyledTypography variant="h4">Escolha de quarto e hotel</StyledTypography>
      {ticket?.status !== 'PAID' ? (
        <NoContentCard text={'Você precisa ter confirmado pagamento antes de fazer a escolha de hospedagem'} />
      ) : !ticket.TicketType?.includesHotel ? (
        <NoContentCard
          text={'Sua modalidade de ingresso não inclui hospedagem Prossiga para a escolha de atividades'}
        />
      ) : (
        <>
          <HotelContainer updateBooking={updateBooking} />
        </>
      )}
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;

const SelectButton = styled(Button)`
  color: #e0e0e0;
  width: 182px;
`;
