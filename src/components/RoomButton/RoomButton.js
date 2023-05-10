import styled from 'styled-components';
import { BsPersonFill, BsPerson } from 'react-icons/bs';
import { useState } from 'react';
import { useEffect } from 'react';

// object for testing
const fakeRoom = {
  id: 1,
  name: 101,
  capacity: 4,
  hotelId: 1,
  createdAt: '2021-01-01T00:00:00.000Z',
  updatedAt: '2021-01-01T00:00:00.000Z',
  Booking: [{ id: 1 }, { id: 2 }],
};

export default function RoomButton() {
  const out = fakeRoom.Booking.length;
  const availables = fakeRoom.capacity - out;
  const [PersonIcons, setPersonIcons] = useState([]);
  const [selected, setSelected] = useState(false);
  const vacancy = availables >= 1;
  let iconsArray = [];

  // these for loop should run a unique time

  useEffect(() => {
    for (let i = 0; i < availables; i++) {
      iconsArray.push(<UnfilledIcon key={iconsArray.length} />);
    }
    for (let i = 0; i < out; i++) {
      iconsArray.push(<FilledIcon key={iconsArray.length} />);
    }
    setPersonIcons(iconsArray);
  }, [availables, out]);

  function handleClick() {
    let newArray = PersonIcons;
    if (!selected) {
      newArray[availables - 1] = <SelectedIcon key={availables - 1} />;
    } else {
      newArray[availables - 1] = <UnfilledIcon key={availables - 1} />;
    }
    setSelected(!selected);
    setPersonIcons(newArray);
  }

  return (
    <ButtonStyled onClick={handleClick} disabled={!vacancy} selected={selected}>
      <RoomName vacancy={vacancy}>{fakeRoom.name}</RoomName>
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
