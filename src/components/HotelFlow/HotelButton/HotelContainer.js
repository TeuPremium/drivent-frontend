import styled from 'styled-components';
import HotelButton from './HotelButtonComponent';
import useHotel from '../../../hooks/api/useHotel';
import { RoomsContainer } from '../RoomsContainer/RoomsContainer';
import { useState } from 'react';
import { Button } from '@material-ui/core';
import useBooking from '../../../hooks/api/useBookings';
import HotelCard from './HotelCard';

export default function HotelContainer({ updateBooking }) {
  const { hotels } = useHotel();
  const [chooseHotel, setChooseHotel] = useState(true);
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [rooms, setRooms] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const { Bookings } = useBooking();
  //if (Bookings) setChooseHotel(false);

  if (Bookings && hotels) {
    const hotel = hotels[Bookings.Room.hotelId - 1];

    return (
      <>
        <HotelContainerBox>
          <HotelCard key={hotel.id} hotel={hotel} booking={Bookings} />
        </HotelContainerBox>
        <SelectButton style={{ background: ' #E0E0E0' }}>Trocar Reserva</SelectButton>
      </>
    );
  }
  return (
    <>
      <HotelContainerBox>
        {hotels?.map((hotel) => (
          <HotelButton
            key={hotel.id}
            hotel={hotel}
            selectedHotel={selectedHotel}
            setSelectedHotel={setSelectedHotel}
            setRooms={setRooms}
            setSelectedRoom={setSelectedRoom}
          />
        ))}
      </HotelContainerBox>
      {selectedHotel && (
        <RoomsContainer
          rooms={rooms}
          selectedRoom={selectedRoom}
          setSelectedRoom={setSelectedRoom}
          updateBooking={updateBooking}
        />
      )}
    </>
  );
}

const HotelContainerBox = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const SelectButton = styled(Button)`
  color: #e0e0e0;
  width: 182px;
`;
