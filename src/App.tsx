import React, { useState } from "react";

import { getDistance } from "./services/api/maps";
import { EServiceTypes, ESteps, TAddressesState } from "./assets/types";
import { ServicePicked } from "./components/servicePicked";
import { StepContextProvider } from "./components/stepContext";
import { ServiceTypes } from "./pages/serviceTypes";
import { Address } from "./pages/address";
import { Delivery } from "./pages/delivary";
import { MainLayout } from "./layout/main";
import styles from "./app.module.scss";
import { WhiteBox } from "./layout/whiteBox";

function App() {
  const [step, setStep] = useState<ESteps>(ESteps.SERVICE_TYPE);
  const [serviceType, setServiceType] = useState<EServiceTypes>(
    EServiceTypes.OTHER
  );
  const [pointsDistance, setPointsDistance] = useState<number>(0);

  const handleServicePick = (pick: EServiceTypes) => {
    setServiceType(pick);
    setStep(ESteps.ADDRESSES);
  };

  const onAddressesPick = async (coordinates: TAddressesState) => {
    try {
      const distance = await getDistance(coordinates);
      if (distance) {
        setPointsDistance(distance);
        setStep(ESteps.DELIVERY_TYPE);
      }
    } catch {
      setStep(ESteps.SERVICE_TYPE);
      window.alert("problem occured");
    }
  };

  return (
    <div className={styles.app}>
      <StepContextProvider
        step={step}
        changeStep={(newStep) => setStep(newStep)}
      >
        <MainLayout>
          {step === ESteps.SERVICE_TYPE && (
            <ServiceTypes onServicePick={handleServicePick} />
          )}
          {step !== ESteps.SERVICE_TYPE && (
            <div className={styles.content_container}>
              <ServicePicked value={serviceType} />
              <WhiteBox onAddressesPick={onAddressesPick}>
                {step === ESteps.ADDRESSES ? (
                  <Address />
                ) : (
                  <Delivery pointsDistance={pointsDistance} />
                )}
              </WhiteBox>
            </div>
          )}
        </MainLayout>
      </StepContextProvider>
    </div>
  );
}

export default App;
