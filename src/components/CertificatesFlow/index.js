import { Typography } from '@material-ui/core';
import Certificates from './certificates/certificates';
import useMyActivities from '../../hooks/api/useMyActivities';
import useTicket from '../../hooks/api/useTicket';
import { NoContentCard } from '../NoContentCard';

export default function CertificatesFlow() {
  const { activity } = useMyActivities();
  const { ticket } = useTicket();

  return (
    <>
      <Typography variant="h4">Meus Certificados</Typography>
      {ticket?.status !== 'PAID' ? (
        <NoContentCard text={'Você precisa ter confirmado pagamento antes de fazer a escolha de atividades'} />
      ) : (
        <Certificates activities={activity} />
      )}
    </>
  );
}
