import HotelButton from '../../../components/HotelButton/HotelButtonComponent';
import { Typography } from '@material-ui/core';
import styled from 'styled-components';
import useTicket from '../../../hooks/api/useTicket';
import { NoContentCard } from '../../../components/NoContentCard';

export default function Hotel() {
  const { ticket } = useTicket();

  return (
    <Page>
      <StyledTypography variant="h4">Escolha de quarto e hotel</StyledTypography>
      {ticket?.status !== 'PAID' ? (
        <NoContentCard text={'Você precisa ter confirmado pagamento antes de fazer a escolha de hospedagem'} />
      ) : ticket.TicketType?.includesHotel ? (
        <HotelButton />
      ) : (
        <NoContentCard
          text={'Sua modalidade de ingresso não inclui hospedagem Prossiga para a escolha de atividades'}
        />
      )}
    </Page>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;

const Page = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
