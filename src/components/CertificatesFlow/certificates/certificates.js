import styled from 'styled-components';
import CertificateCard from './certificateCard';
import { Button, Typography } from '@material-ui/core';

import { useState } from 'react';
import PrintCertificateContainer from './printCertificateContainer';
import useActivity from '../../../hooks/api/useActivity';

export default function Certificates({ activities }) {
  const name = 'Worksohop de assembly';
  console.log(activities);
  const [showCertificate, setShowCertificate] = useState(false);
  //trocar para certificateData
  const [user, setUser] = useState('');
  const [activity, setActivity] = useState('');
  const [workshop, setWorkshop] = useState('');
  const [date, setDate] = useState('');

  const handleWheelScroll = (event) => {
    const container = event.currentTarget;
    const scrollAmount = event.deltaY > 0 ? 100 : -100;
    container.scrollLeft += scrollAmount;
  };

  if (showCertificate) {
    return <PrintCertificateContainer ShowCertificate={setShowCertificate} />;
  }

  return (
    <>
      <div>
        <StyledTypography>Aqui estão seus certificados: </StyledTypography>
      </div>
      <CertificatesContainer onWheel={handleWheelScroll}>
        <div onClick={() => setShowCertificate(true)}>
          <CertificateCard name={name} />
        </div>
        <div onClick={() => setShowCertificate(true)}>
          <CertificateCard name={name} />
        </div>
        <div onClick={() => setShowCertificate(true)}>
          <CertificateCard name={name} />
        </div>
        <div onClick={() => setShowCertificate(true)}>
          <CertificateCard name={name} />
        </div>
        <div onClick={() => setShowCertificate(true)}>
          <CertificateCard name={name} />
        </div>
        <div onClick={() => setShowCertificate(true)}>
          <CertificateCard name={name} />
        </div>
      </CertificatesContainer>
      <ConfirmActivities>
        <Button style={{ background: 'lightgrey' }}>Confirmar atividades</Button>
      </ConfirmActivities>
    </>
  );
}

const CertificatesContainer = styled.div`
  display: flex;
  width: 100%;
  height: 300px;
  box-sizing: content-box;
  overflow-x: scroll;
  margin-top: 30px;

  ::-webkit-scrollbar {
    width: 20px;
  }

  ::-webkit-scrollbar-thumb {
    background: lightgray;
    border-radius: 15px;
    min-height: 30px;
    overflow: auto;
    border: 4px solid transparent;
    background-clip: padding-box;
    transition: height 0.2s ease-in-out;
    padding: 5px;
  }
`;
const StyledTypography = styled(Typography)`
  color: #8e8e8e;
  width: 100%;
  margin-bottom: 14px;
`;

const ConfirmActivities = styled.div`
  position: relative;
  left: 75%;
  top: 25%;
`;
