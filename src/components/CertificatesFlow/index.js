import { Typography } from '@material-ui/core';
import Certificates from './certificates/certificates';
import useActivity from '../../hooks/api/useActivity';

export default function CertificatesFlow() {
  const { getActivities } = useActivity();

  return (
    <>
      <Typography variant="h4">Meus Certificados</Typography>
      <Certificates activities={getActivities} />
    </>
  );
}
