import { Typography } from '@material-ui/core';
import useTicket from '../../hooks/api/useTicket';
import { NoContentCard } from '../NoContentCard';
import ActivitiesContainer from './ActivitiesContainer';

export default function ActivityFlow() {
  const { ticket } = useTicket();

  return (
    <>
      <Typography variant="h4">Escolha de atividades</Typography>
      {ticket?.status !== 'PAID' ? (
        <NoContentCard text={'Você precisa ter confirmado pagamento antes de fazer a escolha de atividades'} />
      ) : ticket.TicketType?.fullActivityAccess ? (
        <NoContentCard
          text={'Sua modalidade de ingresso não necessita escolher atividade. Você terá acesso a todas as atividades.'}
        />
      ) : (
        <>
          <ActivitiesContainer />
        </>
      )}
    </>
  );
}
