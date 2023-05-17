import api, { authorization } from './api';

export async function createBooking(body, token) {
  const response = await api.post('/booking', body, authorization(token));
  return response.data;
}
