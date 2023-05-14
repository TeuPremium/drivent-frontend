import { Typography } from '@material-ui/core';
import CurrentPaymentPhase from './CurrentPaymentPhase/CurrentPaymentPhase';

export default function PaymentFlow() {
  return (
    <>
      <Typography variant="h4">Ingressos e pagamento</Typography>

      <CurrentPaymentPhase />
    </>
  );
}
