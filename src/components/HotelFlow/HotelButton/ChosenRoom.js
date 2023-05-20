import styled from 'styled-components';
import HotelButton from './HotelButtonComponent';
import useHotel from '../../../hooks/api/useHotel';
import { RoomsContainer } from '../RoomsContainer/RoomsContainer';
import { useState } from 'react';
import { Button } from '@material-ui/core';
import useBooking from '../../../hooks/api/useBookings';
import HotelCard from './HotelCard';
import ReactLoading from 'react-loading';
import { Link } from 'react-router-dom';

export default function ChosenRoom({ Bookings }) {
  const [hotel, setHotel] = useState(false);
  const { hotels } = useHotel();

  if (Bookings && hotels) {
    for (let i = 0; i < hotels.length; i++) {
      if (hotel) break;
      if (hotels[i].id == Bookings.Room.hotelId) {
        setHotel(hotels[i]);
        break;
      }
    }
  }
  console.log(hotel);
  console.log(Bookings);

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
        <LoadingContainer>
          <ReactLoading type="bubbles" color="#000000" height={100} width={100} />
        </LoadingContainer>
      </>
    );
  }
}

const HotelContainerBox = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const LoadingContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;
