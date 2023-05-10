import api, { authorization } from './api';

export async function getTicketTypes(token) {
  const response = await api.get('/tickets/types', authorization(token));

  return response.data;
}

export async function getTicket(token) {
  const response = await api.get('/tickets', authorization(token));

  return response.data;
}

export async function createTicket(body, token) {
  const response = await api.post('/tickets', body, authorization(token));

  return response.data;
}
