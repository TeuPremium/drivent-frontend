import useAsync from '../useAsync';

import * as ticketApi from '../../services/ticketApi';
import useToken from '../useToken';

export default function useTicketTypes() {
  const token = useToken();

  const {
    data: ticketTypes,
    loading: ticketTypesLoading,
    error: ticketTypesError,
  } = useAsync(() => ticketApi.getTicketTypes(token));

  return {
    ticketTypes,
    ticketTypesLoading,
    ticketTypesError,
  };
}
