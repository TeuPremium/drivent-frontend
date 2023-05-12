import api, { authorization } from './api';

export async function getRooms(hotelId, token) {
  const response = await api.get(`/hotels/${hotelId}`, authorization(token));
  return response.data;
}
