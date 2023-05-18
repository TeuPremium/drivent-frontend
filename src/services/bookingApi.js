import useToken from '../hooks/useToken';
import api, { authorization } from './api';

export async function createBooking(body, token) {
  const response = await api.post('/booking', body, authorization(token));
  return response.data;
}

export async function changeBooking(bookingId, body, token) {
  const response = await api.put(`/booking/${bookingId}`, body, authorization(token));
  return response.data;
}

export async function getBooking(userId, token) {
  console.log(token);
  const response = await api.get('/booking', parseInt(userId[0]), authorization(token));
  console.log(response);
  return response.data;
}
