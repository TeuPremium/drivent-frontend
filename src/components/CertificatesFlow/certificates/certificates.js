import styled from 'styled-components';
import CertificateCard from './certificateCard';
import { Typography } from '@material-ui/core';

import { useState } from 'react';
import PrintCertificateContainer from './printCertificateContainer';

export default function Certificates() {
  const name = 'Worksohop de assembly';
  const [showCertificate, setShowCertificate] = useState(false);
  //trocar para certificateData
  const [user, setUser] = useState('');
  const [activity, setActivity] = useState('');
  const [workshop, setWorkshop] = useState('');
  const [date, setDate] = useState('');

  if (showCertificate) {
    return <PrintCertificateContainer ShowCertificate={setShowCertificate} />;
  }

  return (
    <>
      <div>
        <StyledTypography>Aqui estão seus certificados: </StyledTypography>
      </div>
      <CertificatesContainer>
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
