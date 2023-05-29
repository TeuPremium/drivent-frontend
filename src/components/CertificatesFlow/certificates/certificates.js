import styled from 'styled-components';
import CertificateCard from './components/certificateCard';
import { Button, Typography } from '@material-ui/core';

import { useState } from 'react';
import PrintCertificateContainer from './components/printCertificateContainer';
import useEnrollment from '../../../hooks/api/useEnrollment';

export default function Certificates({ activities }) {
  const [showCertificate, setShowCertificate] = useState(false);
  const [chosenCertificate, setChosenCertificate] = useState();
  const { enrollment } = useEnrollment();

  const handleWheelScroll = (event) => {
    const container = event.currentTarget;
    const scrollAmount = event.deltaY > 0 ? 100 : -100;
    container.scrollLeft += scrollAmount;
  };

  if (showCertificate) {
    return (
      <PrintCertificateContainer
        enrollment={enrollment}
        activity={chosenCertificate}
        ShowCertificate={setShowCertificate}
      />
    );
  }

  if (!activities) return <></>;
  return (
    <>
      <div>
        <StyledTypography>Aqui estão seus certificados: </StyledTypography>
      </div>
      <CertificatesContainer onWheel={handleWheelScroll}>
        {activities.map((activity) => (
          <div
            onClick={() => {
              setShowCertificate(true);
              setChosenCertificate(activity.name);
            }}
          >
            <CertificateCard name={activity.name} />
          </div>
        ))}
      </CertificatesContainer>
      <ConfirmActivities>
        <Button onClick={() => alert('funcionalidade será implementada em breve')} style={{ background: 'lightgrey' }}>
          Confirmar atividades
        </Button>
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
