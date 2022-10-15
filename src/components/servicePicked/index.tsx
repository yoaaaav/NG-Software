import React, { useContext } from "react";

import { EServiceTypes, ESteps } from "../../assets/types";
import { StepContext } from "../stepContext";

import styles from "./servicePicked.module.scss";

interface IServicePicked {
  value: EServiceTypes;
}

export const ServicePicked = ({ value }: IServicePicked) => {
  const { changeStep } = useContext(StepContext);

  return (
    <div className={styles.service_picked_container}>
      <p>{value}</p>
      <button onClick={() => changeStep(ESteps.SERVICE_TYPE)}>Change</button>
    </div>
  );
};
