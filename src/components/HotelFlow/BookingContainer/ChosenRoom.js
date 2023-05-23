import styled from 'styled-components';
import useHotel from '../../../hooks/api/useHotel';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import HotelCard from './HotelCard';
import LoadingContainer from '../../LoadingContainer';

export default function ChosenRoom({ Bookings }) {
  const [hotel, setHotel] = useState(false);
  const { hotels } = useHotel();

  if (Bookings && hotels) {
    for (let i = 0; i < hotels.length; i++) {
      if (hotel) break;
      if (hotels[i].id === Bookings.Room.hotelId) {
        setHotel(hotels[i]);
        break;
      }
    }
  }

  if (hotel) {
    return (
      <>
        <HotelContainerBox>
          <HotelCard key={hotel.id} hotel={hotel} booking={Bookings} />
        </HotelContainerBox>
        <Link to={'/dashboard/hotel?updateBooking=1'}></Link>
      </>
    );
  } else {
    return (
      <>
        {' '}
        <LoadingContainer />
      </>
    );
  }
}

const HotelContainerBox = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;
