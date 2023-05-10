import useAsync from '../useAsync';

import * as ticketApi from '../../services/ticketApi';
import useToken from '../useToken';

export default async function useTicket() {
  const token = useToken();
  const { data: ticket, loading: ticketLoading, error: ticketError } = useAsync(() => ticketApi.getTicket(token));

  return {
    ticket,
    ticketLoading,
    ticketError,
  };
}
