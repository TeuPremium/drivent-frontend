import styled from 'styled-components';
import { BsPersonFill, BsPerson } from 'react-icons/bs';
import { useState } from 'react';
import { useEffect } from 'react';

export default function RoomButton({ room, selectedRoom, setSelectedRoom }) {
  let out = room.Booking.length;
  let availables = room.capacity - out;
  const [PersonIcons, setPersonIcons] = useState([]);
  const selected = selectedRoom === room.id;
  const vacancy = availables >= 1;
  let iconsArray = [];

  // these for loop should run a unique time

  useEffect(() => {
    for (let i = 0; i < availables; i++) {
      if (i === availables - 1 && selected) {
        iconsArray.push(<SelectedIcon key={iconsArray.length} />);
      } else {
        iconsArray.push(<UnfilledIcon key={iconsArray.length} />);
      }
    }
    for (let i = 0; i < out; i++) {
      iconsArray.push(<FilledIcon key={iconsArray.length} />);
    }
    setPersonIcons(iconsArray);
  }, [availables, out, selectedRoom]);

  function handleClick() {
    if (!selected) {
      setSelectedRoom(room.id);
    } else {
      setSelectedRoom(null);
    }
  }

  return (
    <ButtonStyled onClick={handleClick} disabled={!vacancy} selected={selected}>
      <RoomName vacancy={vacancy}>{room.name}</RoomName>
      <div>{PersonIcons}</div>
    </ButtonStyled>
  );
}

const ButtonStyled = styled.button`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 190px;
  height: 45px;
  border: 1px solid #cecece;
  background-color: ${(props) => (props.disabled ? '#E9E9E9' : props.selected ? '#FFEED2' : '#ffffff')};
  border-radius: 10px;
  padding: 11px 14px 11px 14px;
  margin-right: 17px;
  margin-bottom: 8px;
`;

const RoomName = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  text-align: center;
  color: ${(props) => (props.vacancy ? '#454545' : '#9D9D9D')};
`;

const FilledIcon = styled(BsPersonFill)`
  font-size: 20px;
`;

const UnfilledIcon = styled(BsPerson)`
  font-size: 20px;
`;

const SelectedIcon = styled(BsPersonFill)`
  font-size: 20px;
  color: #ff4791;
`;
