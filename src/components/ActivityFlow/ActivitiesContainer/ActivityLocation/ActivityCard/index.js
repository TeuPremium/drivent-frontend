import styled from 'styled-components';
import { AiOutlineCloseCircle, AiOutlineCheckCircle } from 'react-icons/ai';
import { RiLoginBoxLine } from 'react-icons/ri';
import { getActivityDuration, getFormatedTime } from '../../../../../utils/dateUtils';
import useToken from '../../../../../hooks/useToken';
import useActivity from '../../../../../hooks/api/useActivity';
import { useContext } from 'react';
import EventInfoContext from '../../../../../contexts/EventInfoContext';
import { subscribeActivity, unsubscribeActivity } from '../../../../../services/activityApi';
import { toast } from 'react-toastify';

export default function ActivityCard({ activity, noVacancy = false, selectedDay, setActivities }) {
  const token = useToken();
  const { getActivities } = useActivity();
  const { eventInfo: event } = useContext(EventInfoContext);
  const { id, startsAt, endsAt, name, openSeats, UserActivities } = activity;
  const subscribedActivity = UserActivities.length > 0;

  async function handleCLick() {
    const [day, layoutMonth] = selectedDay.split('/');
    const year = new Date(event.startsAt).getUTCFullYear();

    const month = layoutMonth - 1;

    try {
      if (!subscribedActivity) {
        await subscribeActivity(id, token);
        toast('Você se inscreveu na atividade!');
      } else {
        await unsubscribeActivity(id, token);
        toast('Você cancelou sua inscrição na atividade!');
      }

      const queryString = new URLSearchParams({ day, month, year }).toString();

      const activitiesData = await getActivities(queryString);
      setActivities(activitiesData);
    } catch (error) {
      toast('Erro ao modificar atividade');
    }
  }

  return (
    <Card
      activityDuration={getActivityDuration(startsAt, endsAt)}
      disabled={noVacancy && !subscribedActivity}
      subscribedActivity={subscribedActivity}
    >
      <CardData>
        <p>{name}</p>
        <p>
          {getFormatedTime(startsAt)} - {getFormatedTime(endsAt)}
        </p>
      </CardData>
      <ConfirmActivityButton onClick={handleCLick} noVacancy={noVacancy} disabled={noVacancy && !subscribedActivity}>
        <div>
          {subscribedActivity ? <AiOutlineCheckCircle /> : noVacancy ? <AiOutlineCloseCircle /> : <RiLoginBoxLine />}
        </div>
        {subscribedActivity ? 'inscrito' : noVacancy ? 'Esgotado' : `${openSeats} vagas`}
      </ConfirmActivityButton>
    </Card>
  );
}

const Card = styled.li`
  width: 100%;
  height: ${({ activityDuration = 1 }) => `${activityDuration * 80}px`};
  background-color: ${({ subscribedActivity }) => (subscribedActivity ? '#D0FFDB' : '#f1f1f1')};
  border: 0px solid transparent;
  border-radius: 5px;
  padding: 10px 0 10px 10px;
  display: flex;
  transition: all 150ms;
  margin-bottom: 6px;
  &:hover {
    background-color: ${({ disabled, subscribedActivity }) => !disabled && subscribedActivity ? '#fadce5' : '#e7e7e7'};
    cursor: ${({ disabled }) => !disabled && 'pointer'};
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
  cursor: ${({ disabled }) => !disabled && 'pointer'};
  width: clamp(40px, 33%, 66px);
  border: none;
  background-color: transparent;
  color: ${({ noVacancy }) => (noVacancy ? '#CC6666' : '#078632')};
  font-size: 9px;
  & > div {
    font-size: 20px;
  }
`;
