import PrintableCertificate from './PrintCertificate';
import styled from 'styled-components';
import close from '../../../assets/images/x-symbol-svgrepo-com.svg';
import print from '../../../assets/images/print-svgrepo-com.svg';

export default function PrintCertificateContainer(props) {
  return (
    <DarkBackGround>
      <WhiteContainer>
        <OptionsBox>
          <div>
            <img src={print} width={'27px'} alt="imprimir certificado" />
          </div>
          <div>
            <img src={close} width={'20px'} onClick={() => props.ShowCertificate(false)} alt="fechar aba" />
          </div>
        </OptionsBox>
        <PrintableCertificate />
      </WhiteContainer>
    </DarkBackGround>
  );
}

const WhiteContainer = styled.div`
  position: absolute;
  place-self: center;
  width: 1000px;
  background-color: white;
  height: 650px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const DarkBackGround = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  bottom: 0px;
  left: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const OptionsBox = styled.div`
  height: 50px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 20px 25px;
  margin-bottom: 10px;
`;
