import { useState } from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import styled from 'styled-components';
import Input from '../Form/Input';

export default function PaymentContainer() {
  const [paymentData, setPaymentData] = useState({
    cvc: '',
    expiry: '',
    name: '',
    number: '',
  });

  const [focus, setFocus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setPaymentData({ ...paymentData, [name]: value });
  };

  return (
    <PaymentContainerStyled id="PaymentData">
      <Cards
        cvc={paymentData.cvc}
        expiry={paymentData.expiry}
        focused={focus}
        name={paymentData.name}
        number={paymentData.number}
      />
      <div>
        <Input
          label="Número do cartão"
          mask={'9999 9999 9999 9999'}
          fullWidth
          type="tel"
          name="number"
          onFocusCapture={(e) => setFocus(e.target.name)}
          onChange={(e) => handleInputChange(e)}
          value={paymentData.number}
        />
        <p>Ex.: 49..., 51..., 36..., 37...</p>
        <Input
          label="Nome"
          fullWidth
          type="text"
          name="name"
          onFocusCapture={(e) => setFocus(e.target.name)}
          onChange={(e) => handleInputChange(e)}
          value={paymentData.name}
        />
        <InputGroup>
          <Input
            label="Validade"
            fullWidth
            type="text"
            name="expiry"
            mask={'99/99'}
            onFocusCapture={(e) => setFocus(e.target.name)}
            onChange={(e) => handleInputChange(e)}
            value={paymentData.expiry}
          />
          <Input
            label="CVC"
            type="text"
            name="cvc"
            mask={'999'}
            onFocusCapture={(e) => setFocus(e.target.name)}
            onChange={(e) => handleInputChange(e)}
            value={paymentData.cvc}
          />
        </InputGroup>
      </div>
    </PaymentContainerStyled>
  );
}

const PaymentContainerStyled = styled.div`
  display: flex;
  max-width: 676px;
  height: 225px;
  justify-content: space-between;
  align-items: center;
  gap: 2.5rem;

  & p {
    color: #8e8e8e;
    font-size: 14px;
  }
`;

const InputGroup = styled.div`
  display: flex;
  gap: 20px;
`;
