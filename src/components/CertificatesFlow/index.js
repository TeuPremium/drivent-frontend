import { Typography } from '@material-ui/core';
import Certificates from './certificates/certificates';

export default function CertificatesFlow() {
  return (
    <>
      <Typography variant="h4">Meus Certificados</Typography>
      <Certificates />
    </>
  );
}
