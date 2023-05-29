import { Typography } from '@material-ui/core';
import Certificates from './certificates/certificates';
import useMyActivities from '../../hooks/api/useMyActivities';
import { NoContentCard } from '../NoContentCard';
import useBooking from '../../hooks/api/useBookings';

export default function CertificatesFlow() {
  const { activity } = useMyActivities();
  const { Bookings } = useBooking();
  return (
    <>
      <Typography variant="h4">Meus Certificados</Typography>
      {Bookings ? (
        activity ? (
          <Certificates activities={activity} />
        ) : (
          <NoContentCard text={'Você precisa estar cadastrado nas atividades para ver seus certificados'} />
        )
      ) : (
        <NoContentCard text={'Você precisa estar hospedado para ver seus certificados'} />
      )}
    </>
  );
}
