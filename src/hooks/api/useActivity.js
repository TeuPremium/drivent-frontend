import useAsync from '../useAsync';

import * as activityApi from '../../services/activityApi';
import useToken from '../useToken';

export default function useActivity() {
  const token = useToken();
  const {
    data: activity,
    loading: activityLoading,
    error: activityError,
    act: getActivities,
  } = useAsync((queryString) => activityApi.getActivities(queryString, token), false);

  return {
    activity,
    activityLoading,
    activityError,
    getActivities,
  };
}
