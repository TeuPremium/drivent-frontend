import { useState } from 'react';
import styled from 'styled-components';
import ChoiceBtn from './ChoiceBtn';
import useToken from '../../../hooks/useToken';
import { createTicket } from '../../../services/ticketApi';
import { toast } from 'react-toastify';

export default function SelectTicketType({ ticketTypes, getTicket }) {
  const [showRow, setShowRow] = useState(false);
  const [showTotalRow, setShowTotalRow] = useState(false);

  //total e selectTypeid sao os dados referentes ao ticket selecionado para checkout
  const [total, setTotal] = useState(0);
  const [selectedTypeId, setSelectedTypeId] = useState(0);

  const token = useToken();
  //selected options contem a cor dos botoes selecionados e o indice do item selecionado
  const [selectedOptions, setSelectedOptions] = useState(['', '', '', '', 0]);

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
  }

  // eslint-disable-next-line
  const submitOption = async () => {
    try {
      await createTicket({ ticketTypeId: selectedTypeId }, token);
      await getTicket();
      toast('Ticket reservado com sucesso! :)');
    } catch (err) {
      toast('Não foi possível reservar o ticket!');
    }
  };

  return (
    <>
      <TextRow>Primeiro, escolha sua modalidade de ingresso</TextRow>
      <HorizontalContainer>
        <div
          style={{ background: selectedOptions[0], borderRadius: '24px' }}
          onClick={() => {
            registerOption(0);
            setShowRow(!showRow);
            setShowTotalRow(false);
          }}
        >
          <ChoiceBtn ticket={ticketTypes[1]} name={'presencial'} />
        </div>
        <div
          style={{ background: selectedOptions[1], borderRadius: '24px' }}
          onClick={() => {
            registerOption(1);
            setShowRow(false);
            setShowTotalRow(showRow ? true : !showTotalRow);
            setTicket(ticketTypes[0]);
          }}
        >
          <ChoiceBtn ticket={ticketTypes[0]} />
        </div>
      </HorizontalContainer>
      {showRow && (
        <>
          <TextRow>Ótimo! Agora escolha sua modalidade de hospedagem</TextRow>
          <HorizontalContainer>
            <div
              style={{ background: selectedOptions[2], borderRadius: '24px' }}
              onClick={() => {
                registerOption(2);
                setShowTotalRow(!showTotalRow);
                setTicket(ticketTypes[1]);
              }}
            >
              <ChoiceBtn ticket={ticketTypes[1]} lowPriceTicket={ticketTypes[1].price} lowerOption={true} />
            </div>
            <div
              style={{ background: selectedOptions[3], borderRadius: '24px' }}
              onClick={() => {
                registerOption(3);
                setShowTotalRow(!showTotalRow);
                setTicket(ticketTypes[2]);
              }}
            >
              <ChoiceBtn ticket={ticketTypes[2]} lowPriceTicket={ticketTypes[1].price} lowerOption={true} />
            </div>
          </HorizontalContainer>
        </>
      )}

      {showTotalRow && (
        <>
          <TextRow>Fechado! O total ficou em R$ {total}. Agora é só confirmar:</TextRow>
          <Button onClick={() => submitOption()}>RESERVAR INGRESSO</Button>
        </>
      )}
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
  & > div {
    background-color: #fff;
    cursor: pointer;
    &:hover {
      background-color: #ffeed2ba;
      transform: scale(1.06);
      box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    }
  }
  div:nth-of-type(2) {
    margin-left: 24px;
  }
`;

const Button = styled.button`
  width: 162px;
  height: 37px;
  background: #e0e0e0;
  border: none;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  margin-top: 25px;
  cursor: pointer;
`;
