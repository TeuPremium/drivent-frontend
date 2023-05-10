import api, { authorization } from './api';

export async function createPayment(body, token) {
  const response = await api.post('/payments/process', body, authorization(token));

  return response.data;
}
