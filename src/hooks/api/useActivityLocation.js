import useAsync from '../useAsync';

import * as activityApi from '../../services/activityApi';
import useToken from '../useToken';

export default function useActivityLocation() {
  const token = useToken();
  const {
    data: activityLocations,
    loading: activityLocationsLoading,
    error: activityLocationsError,
  } = useAsync(() => activityApi.getActivityLocations(token));

  return {
    activityLocations,
    activityLocationsLoading,
    activityLocationsError,
  };
}
