import { useEffect, useState } from 'react';
import styled from 'styled-components';
import instance from '../../../services/api';
import ChoiceBtn from './ChoiceBtn';
import useToken from '../../../hooks/useToken';
import ReactLoading from 'react-loading';

export default function SelectTicketType() {
  // eslint-disable-next-line no-unused-vars
  const [ticketTypes, setTicketTypes] = useState([]);
  const [hideRow, setHideRow] = useState('none');
  const [hideTotal, sethideTotal] = useState('none');

  //total e selectTypeid sao os dados referentes ao ticket selecionado para checkout
  const [total, setTotal] = useState(0);
  const [selectedTypeId, setSelectedTypeId] = useState(0);

  const token = useToken();
  //selected options contem a cor dos botoes selecionados e o indice do item selecionado
  const [selectedOptions, setSelectedOptions] = useState(['', '', '', '', 0]);

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

  function toggleRow() {
    hideRow === 'none' ? setHideRow('') : setHideRow('none');
  }

  function toggleTotal() {}

  function registerOption(index) {
    if (index === 0) {
      selectedOptions[0] ? setSelectedOptions(['', '', '', '', 0]) : setSelectedOptions(['#FFEED2', '', '', '', 0]);
    }
    if (index === 1) {
      selectedOptions[1] ? setSelectedOptions(['', '', '', '', 0]) : setSelectedOptions(['', '#FFEED2', '', '', 1]);
    }
    if (index === 2) {
      selectedOptions[2]
        ? setSelectedOptions(['#FFEED2', '', '', '', 0])
        : setSelectedOptions(['#FFEED2', '', '#FFEED2', '', 2]);
    }
    if (index === 3) {
      selectedOptions[3]
        ? setSelectedOptions(['#FFEED2', '', '', '', 0])
        : setSelectedOptions(['#FFEED2', '', '', '#FFEED2', 2]);
    }
  }

  function setTicket(ticketType) {
    setTotal(ticketType.price);
    setSelectedTypeId(ticketType.id);
    console.log(total);
    console.log(selectedTypeId);
  }

  function submitOption() {}

  if (!ticketTypes.data) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', margin: '20%' }}>
        <ReactLoading type="bubbles" color="#000000" height={200} width={200} />
      </div>
    );
  }
  return (
    <>
      <TextRow>Primeiro, escolha sua modalidade de ingresso</TextRow>
      <HorizontalContainer>
        <div
          style={{ background: selectedOptions[0], borderRadius: '24px' }}
          onClick={() => {
            registerOption(0);
            toggleRow();
            sethideTotal('none');
          }}
        >
          <ChoiceBtn ticket={ticketTypes.data[1]} name={'presencial'} />
        </div>
        <div
          style={{ background: selectedOptions[1], borderRadius: '24px' }}
          onClick={() => {
            registerOption(1);
            setHideRow('none');
            sethideTotal('');
            setTicket(ticketTypes.data[0]);
          }}
        >
          <ChoiceBtn ticket={ticketTypes.data[0]} />
        </div>
      </HorizontalContainer>

      <BottomRow display={hideRow}>
        <TextRow>Ótimo! Agora escolha sua modalidade de hospedagem</TextRow>
        <HorizontalContainer>
          <div
            style={{ background: selectedOptions[2], borderRadius: '24px' }}
            onClick={() => {
              registerOption(2);
              sethideTotal('');
              setTicket(ticketTypes.data[1]);
            }}
          >
            <ChoiceBtn ticket={ticketTypes.data[1]} lowPriceTicket={ticketTypes.data[1].price} lowerOption={true} />
          </div>
          <div
            style={{ background: selectedOptions[3], borderRadius: '24px' }}
            onClick={() => {
              registerOption(3);
              sethideTotal('');
              setTicket(ticketTypes.data[2]);
            }}
          >
            <ChoiceBtn ticket={ticketTypes.data[2]} lowPriceTicket={ticketTypes.data[1].price} lowerOption={true} />
          </div>
        </HorizontalContainer>
      </BottomRow>

      <BottomRow display={hideTotal}>
        <TextRow>Fechado! O total ficou em R$ {total}. Agora é só confirmar:</TextRow>

        <Button>RESERVAR INGRESSO</Button>
      </BottomRow>
    </>
  );
}

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
