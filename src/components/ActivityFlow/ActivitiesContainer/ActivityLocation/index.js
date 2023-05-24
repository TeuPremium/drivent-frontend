import styled from 'styled-components';
import ActivityCard from './ActivityCard';

export default function ActivityLocation({ locationTitle }) {
  return (
    <div>
      <Title>{locationTitle}</Title>
      <Container>
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
      </Container>
    </div>
  );
}

const Title = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  color: #8e8e8e;
  text-align: center;
  margin-bottom: 12px;
`;

const Container = styled.ul`
  height: 100px;
  width: 100%;
  height: 390px;
  border: 1px solid #d7d7d7;
  padding: 9px;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 0px;
  }

  ::-webkit-scrollbar-thumb {
    background: red;
    border-radius: 15px;
    min-height: 30px;
    overflow: auto;
    border: 6px solid transparent;
    background-clip: padding-box;
    transition: height 0.2s ease-in-out;
  }
`;
