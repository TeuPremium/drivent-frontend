import { useEffect, useState } from 'react';
import styled from 'styled-components';
import instance from '../../../services/api';
import ChoiceBtn from './ChoiceBtn';
import useToken from '../../../hooks/useToken';

export default function SelectTicketType() {
  // eslint-disable-next-line no-unused-vars
  const [ticketTypes, setTicketTypes] = useState([]);
  const [hideRow, setHideRow] = useState('none');
  const [hideTotal, sethideTotal] = useState('none');

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

  // console.log(ticketTypes);
  function toggleRow() {
    hideRow === 'none' ? setHideRow('') : setHideRow('none');
  }

  return (
    <>
      <Header>Ingresso e pagamento</Header>

      <TextRow>Primeiro, escolha sua modalidade de ingresso</TextRow>
      <HorizontalContainer>
        <div
          onClick={() => {
            toggleRow();
            sethideTotal('none');
          }}
        >
          <ChoiceBtn name={'Presencial'} price={'R$ 250'} />
        </div>
        <div
          onClick={() => {
            setHideRow('none');
            sethideTotal('');
          }}
        >
          <ChoiceBtn name={'Online'} price={'R$ 100'} />
        </div>
      </HorizontalContainer>

      <BottomRow display={hideRow}>
        <TextRow>Ótimo! Agora escolha sua modalidade de hospedagem</TextRow>
        <HorizontalContainer>
          <div
            onClick={() => {
              sethideTotal('');
            }}
          >
            <ChoiceBtn name={'Sem Hotel'} price={'+ R$ 0'} />
          </div>
          <div
            onClick={() => {
              sethideTotal('');
            }}
          >
            <ChoiceBtn name={'Com Hotel'} price={'+ R$ 100'} />
          </div>
        </HorizontalContainer>
      </BottomRow>

      <BottomRow display={hideTotal}>
        <TextRow>Fechado! O total ficou em R$ 600. Agora é só confirmar:</TextRow>

        <Button>RESERVAR INGRESSO</Button>
      </BottomRow>
    </>
  );
}

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

// const EnrollmentRequired = styled.div`
//   font-family: 'Roboto', sans-serif;
//   font-style: normal;
//   font-weight: 400;
//   font-size: 20px;
//   line-height: 23px;
//   margin-top: 37px;
//   color: #8e8e8e;
//   width: 400px;
//   position: relative;
//   top: 37%;
//   margin: auto;
// `;

const Button = styled.button`
  width: 162px;
  height: 37px;
  left: 335px;
  top: 749px;
  background: #e0e0e0;
  border: none;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  margin-top: 25px;
`;

const BottomRow = styled.div`
  display: ${(props) => props.display};
`;
