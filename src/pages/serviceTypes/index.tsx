import React from "react";

import { EServiceTypes } from "../../assets/types";
import { ServiceBox } from "../../components/serviceBox";

import styles from "./serviceTypes.module.scss";

interface IServiceTypes {
  onServicePick: (pick: EServiceTypes) => void;
}

export const ServiceTypes = ({ onServicePick }: IServiceTypes) => {
  return (
    <table className={styles.service_types_container}>
      <tbody>
        <tr>
          {Object.values(EServiceTypes)
            .slice(0, 3)
            .map((value) => (
              <ServiceBox
                key={value}
                value={value}
                onServiceClick={onServicePick}
              />
            ))}
        </tr>
        <tr>
          {Object.values(EServiceTypes)
            .slice(3, 6)
            .map((value) => (
              <ServiceBox
                key={value}
                value={value}
                onServiceClick={onServicePick}
              />
            ))}
        </tr>
        <tr>
          {Object.values(EServiceTypes)
            .slice(-1)
            .map((value) => (
              <ServiceBox
                key={value}
                value={value}
                onServiceClick={onServicePick}
              />
            ))}
        </tr>
      </tbody>
    </table>
  );
};
