import { Typography } from '@material-ui/core';
import { NoContentCard } from '../NoContentCard';
import usePaymentPhase from '../../hooks/usePaymentPhase';

export default function PaymentFlow() {
  const { PaymentPhase } = usePaymentPhase();

  return (
    <>
      <Typography variant="h4">Ingressos e pagamento</Typography>
      {PaymentPhase ? (
        PaymentPhase
      ) : (
        <NoContentCard text="Você precisa completar sua inscrição antes de prosseguir pra escolha de ingresso" />
      )}
    </>
  );
}
