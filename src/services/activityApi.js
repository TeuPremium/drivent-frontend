import api, { authorization } from './api';

export async function getActivities(queryString = null, token) {
  const response = await api.get(`/activities?${queryString}`, authorization(token));

  return response.data;
}

export async function getActivityLocations(token) {
  const response = await api.get('/activities/locations', authorization(token));

  return response.data;
}
