import styled from 'styled-components';
import { AiOutlineCloseCircle, AiOutlineCheckCircle } from 'react-icons/ai';
import { RiLoginBoxLine } from 'react-icons/ri';

export default function ActivityCard({ noVacancy = false }) {
  return (
    <Card>
      <CardData>
        <p>Minecraft: montando o PC ideal</p>
        <p>09:00 - 10:00</p>
      </CardData>
      <ConfirmActivityButton noVacancy={noVacancy}>
        <div>
          {/* Variar com o estado da atividade*/}
          {noVacancy ? <AiOutlineCloseCircle /> : <RiLoginBoxLine />}
        </div>
        {noVacancy ? 'Esgotado' : '27 vagas'}
      </ConfirmActivityButton>
    </Card>
  );
}

const Card = styled.li`
  width: 100%;
  height: ${({ activityDuration = 1 }) => `${activityDuration * 80}px`};
  background-color: #f1f1f1;
  border: 0px solid transparent;
  border-radius: 5px;
  padding: 10px 0 10px 10px;
  display: flex;
  transition: all 150ms;
  &:has(button:hover) {
    background-color: #e7e7e7;
  }
`;

const CardData = styled.div`
  flex-grow: 1;
  border-right: 1px solid #cfcfcf;
  & p {
    color: #454545;
    font-size: 12px;
    font-family: 'Roboto', sans-serif;
  }
  & p:nth-child(1) {
    font-weight: 700;
    margin-bottom: 6px;
  }
`;

const ConfirmActivityButton = styled.button`
  cursor: pointer;
  width: clamp(40px, 33%, 66px);
  border: none;
  background-color: transparent;
  color: ${({ noVacancy }) => (noVacancy ? '#CC6666' : '#078632')};
  font-size: 9px;
  & > div {
    font-size: 20px;
  }
`;
