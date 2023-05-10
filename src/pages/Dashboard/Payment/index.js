import PaymentFlow from '../../../components/PaymentFlow';

import { useEffect, useState } from 'react';
import styled from 'styled-components';
import instance from '../../../services/api';
import useToken from '../../../hooks/useToken';
export default function Payment() {
  // return <PaymentFlow />;
  const [color, setColor] = useState('#FFEED2');
  const [ticketTypes, setTicketTypes] = useState([]);
  const [enrollments, setEnrollments] = useState([]);

  const token = useToken();

  useEffect(() => {
    const promise = instance.get('/tickets/types', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    promise.then((e) => {
      setTicketTypes(e);
    });
    promise.catch((error) => alert('An error occured while trying to fetch the posts, please refresh the page'));
  }, []);

  useEffect(() => {
    const promise = instance.get('/enrollments', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    promise.then((e) => {
      setEnrollments(e);
    });
    promise.catch((error) => alert('An error occured while trying to fetch the posts, please refresh the page'));
  }, []);

  // console.log(ticketTypes);

  if (!enrollments) {
    return (
      <>
        <Header>Ingresso e pagamento</Header>
        <EnrollmentRequired>
          <div>Você precisa completar sua inscrição antes de prosseguir pra escolha de ingresso</div>
        </EnrollmentRequired>
      </>
    );
  }

  return (
    <>
      <Header>Ingresso e pagamento</Header>

      <TextRow>Primeiro, escolha sua modalidade de ingresso</TextRow>
      <HorizontalContainer>
        <Container backgroundColor={color}>
          <TextContainer>
            <h1>Presencial</h1>
            <h2>R$ 250</h2>
          </TextContainer>
        </Container>
        <Container backgroundColor={color}>
          <TextContainer>
            <h1>Online</h1>
            <h2>R$ 100</h2>
          </TextContainer>
        </Container>
      </HorizontalContainer>

      <TextRow>Ótimo! Agora escolha sua modalidade de hospedagem</TextRow>
      <HorizontalContainer>
        <Container backgroundColor={color}>
          <TextContainer>
            <h1>Sem Hotel</h1>
            <h2>+ R$ 0</h2>
          </TextContainer>
        </Container>
        <Container backgroundColor={color}>
          <TextContainer>
            <h1>Com Hotel</h1>
            <h2>+ R$ 100</h2>
          </TextContainer>
        </Container>
      </HorizontalContainer>
    </>
  );
}

const Container = styled.div`
  box-sizing: border-box;
  background-color: ${(props) => props.backgroundColor};
  padding: 10px;
  width: 145px;
  height: 145px;
  left: 341px;
  top: 323px;
  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid #cecece;
  border-radius: 20px;
`;

const TextContainer = styled.div`
  height: 38px;
  font-family: 'Roboto', sans-serif;
  text-align: center;
  h1 {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #454545;
  }
  h2 {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #898989;
  }
`;

const Header = styled.div`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 34px;
  line-height: 40px;
`;

const TextRow = styled.div`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  margin-top: 37px;
  color: #8e8e8e;
`;

const HorizontalContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 17px;
  div:nth-of-type(2) {
    margin-left: 24px;
  }
`;

const EnrollmentRequired = styled.div`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  margin-top: 37px;
  color: #8e8e8e;
  width: 400px;
  position: relative;
  top: 37%;
  margin: auto;
`;
