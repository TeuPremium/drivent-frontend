import styled from 'styled-components';
import HotelButton from './HotelButtonComponent';
import useHotel from '../../../hooks/api/useHotel';
import { RoomsContainer } from '../RoomsContainer/RoomsContainer';
import { useState } from 'react';

export default function HotelContainer({ updateBooking, getBookings, bookingId, setUpdateBooking }) {
  const { hotels } = useHotel();
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [rooms, setRooms] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState(null);

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
          getBookings={getBookings}
          bookingId={bookingId}
          setUpdateBooking={setUpdateBooking}
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
