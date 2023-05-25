import Cards from 'react-credit-cards';
import Input from '../../../Form/Input';
import 'react-credit-cards/es/styles-compiled.css';
import styled from 'styled-components';
import { useState } from 'react';

export default function CreditCardContainer({ handleChange, paymentData }) {
  const [focus, setFocus] = useState('');

  return (
    <Container id="PaymentData">
      <Cards
        cvc={paymentData?.cvc || ''}
        expiry={paymentData?.expiry || ''}
        focused={focus}
        name={paymentData?.name || ''}
        number={paymentData?.number || ''}
      />
      <div>
        <Input
          label="Número do cartão"
          mask={'9999 9999 9999 9999'}
          fullWidth
          type="tel"
          name="number"
          onFocusCapture={(e) => setFocus(e.target.name)}
          onChange={handleChange('number')}
          value={paymentData?.number || ''}
          required
          minLength="19"
          maxLength="19"
        />
        <p>Ex.: 49..., 51..., 36..., 37...</p>
        <Input
          label="Nome"
          fullWidth
          type="text"
          name="name"
          onFocusCapture={(e) => setFocus(e.target.name)}
          onChange={handleChange('name')}
          value={paymentData?.name || ''}
          required
          minLength="3"
        />
        <InputGroup>
          <Input
            label="Validade"
            fullWidth
            type="text"
            name="expiry"
            mask={'99/99'}
            onFocusCapture={(e) => setFocus(e.target.name)}
            onChange={handleChange('expiry')}
            value={paymentData?.expiry || ''}
            required
            minLength="5"
            maxLength="5"
          />
          <Input
            label="CVC"
            type="text"
            name="cvc"
            mask={'999'}
            onFocusCapture={(e) => setFocus(e.target.name)}
            onChange={handleChange('cvc')}
            value={paymentData?.cvc || ''}
            required
            minLength="3"
            maxLength="3"
          />
        </InputGroup>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  max-width: 676px;
  margin-bottom: 36px;
  height: 225px;
  justify-content: space-between;
  align-items: center;
  gap: 2.5rem;

  & p {
    color: #8e8e8e;
    font-size: 14px;
  }

  & > div:nth-child(2) {
    label {
      font-size: clamp(0.3rem, 2vw, 1rem) !important;
    }
  }
`;

const InputGroup = styled.div`
  display: flex;
  gap: 20px;
`;
