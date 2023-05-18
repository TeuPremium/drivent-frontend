import useAsync from '../useAsync';
import useToken from '../useToken';

import * as BookingApi from '../../services/bookingApi';

export default function useBooking() {
  const token = useToken();
  const { user } = JSON.parse(localStorage.userData);

  const {
    data: Bookings,
    loading: BookingsLoading,
    error: BookingsError,
    act: getBookings,
  } = useAsync(() => BookingApi.getBooking({ userId: user.id }, token));

  return {
    Bookings,
    BookingsLoading,
    BookingsError,
    getBookings,
  };
}
