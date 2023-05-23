import styled from 'styled-components';
import { Typography } from '@material-ui/core';

export default function HotelCard({ hotel, booking }) {
  const roomId = booking.Room.id;
  let availableSpots = calculateGuests(hotel.Rooms, roomId);

  const capacity = booking.Room.capacity;
  const roomName = booking.Room.name;
  let accommodation;

  if (capacity === 1) accommodation = 'Single';
  else if (capacity === 2) accommodation = 'Double';
  else {
    accommodation = 'Triple';
  }

  return (
    <Container>
      <div>
        <StyledTypography>Você já selecionou seu quarto </StyledTypography>
      </div>
      <ButtonHotelContainer>
        <ImageHotelContainer>
          <img src={hotel.image} alt={hotel.name} />
        </ImageHotelContainer>
        <SubtitlesContainer>
          <h1>{hotel.name}</h1>
          <h2>Quarto reservado</h2>
          <h3>
            Quarto {roomName}
            {' ('}
            {accommodation}
            {')'}
          </h3>
          <h2>Pessoas no seu quarto</h2>
          <h3>
            {availableSpots === 0 ? (
              <>somente você está no quarto </>
            ) : (
              <>
                Você e mais {availableSpots} pessoa{'('}s{')'}
              </>
            )}
          </h3>
        </SubtitlesContainer>
      </ButtonHotelContainer>
    </Container>
  );
}

function calculateGuests(Rooms, RoomId) {
  const Room = Rooms.find((room) => room.id === RoomId);

  let otherGuests = Room.Booking.length - 1;
  return otherGuests;
}

const ButtonHotelContainer = styled.div`
  height: 264px;
  width: 196px;
  background-color: ${(props) => (props.selected ? '#FFEED2' : '#ebebeb')};
  border-radius: 5px;
  margin-right: 19px;
  margin-bottom: 19px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
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

const StyledTypography = styled(Typography)`
  color: #8e8e8e;
  width: 100%;
  margin-bottom: 14px;
`;
