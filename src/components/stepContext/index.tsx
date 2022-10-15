import React, { createContext } from "react";

import { ESteps } from "../../assets/types";

export interface IStepContext {
  children: React.ReactNode;
  step: ESteps;
  changeStep: (newStep: ESteps) => void;
}

export const StepContext = createContext<{
  step: ESteps;
  changeStep: (newStep: ESteps) => void;
}>({ step: ESteps.SERVICE_TYPE, changeStep: () => {} });

export const StepContextProvider = ({
  children,
  step,
  changeStep,
}: IStepContext) => {
  return (
    <StepContext.Provider value={{ step, changeStep }}>
      {children}
    </StepContext.Provider>
  );
};
