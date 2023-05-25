import api, { authorization } from './api';

export async function getActivities(queryString = null, token) {
  const response = await api.get(`/activities?${queryString}`, authorization(token));

  return response.data;
}

export async function getActivityLocations(token) {
  const response = await api.get('/activities/locations', authorization(token));

  return response.data;
}

export async function subscribeActivity(activityId, token) {
  const response = await api.post('/activities', { activityId }, authorization(token));

  return response.data;
}

export async function unsubscribeActivity(activityId, token) {
  const response = await api.delete(`/activities/userActivity/${activityId}`, authorization(token));

  return response.data;
}
