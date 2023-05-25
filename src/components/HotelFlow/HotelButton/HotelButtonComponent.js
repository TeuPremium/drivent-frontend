import styled from 'styled-components';

export default function HotelButton({ hotel, selectedHotel, setSelectedHotel, setRooms, setSelectedRoom }) {
  let availableSpots = calculateAvaiableSpots(hotel.Rooms);
  const accommodationString = buildAccommodationString(hotel.Rooms);
  const selected = selectedHotel === hotel.id;

  function handleClick() {
    if (!selected) {
      setRooms(hotel.Rooms);
      setSelectedHotel(hotel.id);
      setSelectedRoom(null);
    } else {
      setRooms([]);
      setSelectedHotel(null);
      setSelectedRoom(null);
    }
  }

  return (
    <>
      <ButtonHotelContainer onClick={handleClick} selected={selected}>
        <ImageHotelContainer>
          <img src={hotel.image} alt={hotel.name} />
        </ImageHotelContainer>
        <SubtitlesContainer>
          <h1>{hotel.name}</h1>
          <h2>Tipos de acomodação</h2>
          <h3>{accommodationString}</h3>
          <h2>Vagas disponíveis</h2>
          <h3>{availableSpots}</h3>
        </SubtitlesContainer>
      </ButtonHotelContainer>
    </>
  );
}

function calculateAvaiableSpots(rooms) {
  let availableSpots = 0;
  rooms.forEach((room) => {
    availableSpots += room.capacity - room.Booking.length;
  });
  return availableSpots;
}

function buildAccommodationString(rooms) {
  let accommodation = [];
  let accommodationString = '';

  for (let i = 1; i < 4; i++) {
    const found = rooms.find((element) => element.capacity === i);
    if (found) {
      accommodation.push(i);
    }
  }

  for (let z = 0; z <= accommodation.length; z++) {
    if (accommodation.length > 1 && z === accommodation.length - 1) {
      accommodationString += 'e ';
    }
    if (accommodation[z] === 1) {
      if (accommodation.length === 3) {
        accommodationString += 'Single, ';
      } else {
        accommodationString += 'Single ';
      }
    }

    if (accommodation[z] === 2) {
      accommodationString += 'Double ';
    }

    if (accommodation[z] === 3) {
      accommodationString += 'Triple';
    }
  }

  return accommodationString;
}

const ButtonHotelContainer = styled.div`
  height: 264px;
  width: 196px;
  background-color: ${(props) => (props.selected ? '#FFEED2' : '#ebebeb')};
  border-radius: 5px;
  margin-right: 19px;
  margin-bottom: 19px;
  :hover {
    cursor: pointer;
  }
`;

const ImageHotelContainer = styled.div`
  height: 109px;
  width: 168px;
  border-radius: 5px;
  margin-right: 14px;
  margin-left: 14px;
  img {
    width: 168px;
    height: 109px;
    padding-top: 16px;
    border-radius: 5px;
  }
`;

const SubtitlesContainer = styled.div`
  height: 61px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  h1 {
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
    margin-top: 10px;
  }

  h2 {
    font-size: 12px;
    font-weight: 700;
    line-height: 14px;
    margin-top: 10px;
  }

  h3 {
    font-size: 12px;
    font-weight: 400px;
    line-height: 14px;
    margin-top: 2px;
  }
`;
