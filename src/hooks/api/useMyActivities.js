import useAsync from '../useAsync';

import * as activityApi from '../../services/activityApi';
import useToken from '../useToken';

export default function useMyActivities() {
  const token = useToken();
  const {
    data: activity,
    loading: activityLoading,
    error: activityError,
    act: getActivities,
  } = useAsync(() => activityApi.myActivities(token));

  return {
    activity,
    activityLoading,
    activityError,
    getActivities,
  };
}
