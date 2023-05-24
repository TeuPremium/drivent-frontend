import styled from 'styled-components';

export default function DayButton({ data, selectedDay, setSelectedDay }) {
  const { day, weekDay } = data;
  const selected = selectedDay === day;

  function handleClick() {
    if (!selected) {
      setSelectedDay(day);
    } else {
      setSelectedDay(null);
    }
  }
  return (
    <DayButtonStyled onClick={handleClick} selected={selected}>
      {weekDay}, {day}
    </DayButtonStyled>
  );
}

const DayButtonStyled = styled.div`
  width: 131px;
  height: 37px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => (props.selected ? '#FFD37D' : '#E0E0E0')};
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  margin-right: 17px;
  margin-bottom: 17px;
  flex-shrink: 0;
  :hover {
    cursor: pointer;
  }
`;
