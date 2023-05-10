import { useEffect, useState } from 'react';
import styled from 'styled-components';
import instance from '../../../services/api';
import useToken from '../../../hooks/useToken';
export default function Payment() {
  const [color, setColor] = useState('#FFEED2');
  const [ticketTypes, setTicketTypes] = useState([]);
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

  console.log(ticketTypes);

  return (
    <>
      <Header>Ingresso e pagamento</Header>

      <TextRow>Primeiro, escolha sua modalidade de ingresso</TextRow>
      <Container backgroundColor={color}>
        <TextContainer>'Pagamento: Em brevers!'</TextContainer>
      </Container>
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

  color: #8e8e8e;
`;
