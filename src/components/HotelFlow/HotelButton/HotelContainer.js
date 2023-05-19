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

export default function HotelContainer({ updateBooking }) {
  const { hotels } = useHotel();
  const [chooseHotel, setChooseHotel] = useState(true);
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [rooms, setRooms] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const { Bookings } = useBooking();
  const [hotel, setHotel] = useState(false);

  if (chooseHotel) {
    if (Bookings && chooseHotel == true) {
      setChooseHotel(false);
      return <></>;
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

  if (Bookings && hotels) {
    for (let i = 0; i < hotels.length; i++) {
      if (hotel) break;
      if (hotels[i].id == Bookings.Room.hotelId) {
        setHotel(hotels[i]);
        break;
      }
    }
    return (
      <>
        <HotelContainerBox>
          <HotelCard key={hotel.id} hotel={hotel} booking={Bookings} />
        </HotelContainerBox>
        <Link to={'/dashboard/hotel?updateBooking=1'}>
          <SelectButton
            onClick={() => {
              setChooseHotel('change');
            }}
            style={{ background: ' #E0E0E0' }}
          >
            Trocar Reserva
          </SelectButton>
        </Link>
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

const SelectButton = styled(Button)`
  color: #e0e0e0;
  width: 182px;
`;

const LoadingContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;
