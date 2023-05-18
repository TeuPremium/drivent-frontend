import styled from 'styled-components';
import HotelButton from './HotelButtonComponent';
import useHotel from '../../../hooks/api/useHotel';
import { RoomsContainer } from '../RoomsContainer/RoomsContainer';
import { useState } from 'react';
import useBooking from '../../../hooks/api/useBookings';
import HotelCard from './HotelCard';

export default function HotelContainer({ updateBooking }) {
  const { hotels } = useHotel();
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [rooms, setRooms] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const { Bookings } = useBooking();
  console.log(Bookings);
  console.log(hotels);

  if (Bookings && hotels) {
    const hotel = hotels[Bookings.id - 1];
    return (
      <>
        <HotelContainerBox>
          <HotelCard key={hotel.id} hotel={hotel} roomInfo={'você e mais 3'} />
        </HotelContainerBox>
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
