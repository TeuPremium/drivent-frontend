import styled from 'styled-components';
import HotelFlow from '../../../components/HotelFlow';

export default function Hotel() {
  const urlParams = new URLSearchParams(window.location.search);
  const updateBookingParam = urlParams.get('updateBooking');
  let updateBooking = 0;

  if (updateBookingParam) updateBooking = parseInt(updateBookingParam);

  return (
    <Page>
      <HotelFlow updateBooking={updateBooking} />
    </Page>
  );
}

const Page = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-bottom: 30px;
`;
