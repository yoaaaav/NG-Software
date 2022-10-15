import React from "react";

import { EDelivaryTypes } from "../../assets/types";
import { DelivaryOption } from "../../components/delivaryOption";

import styles from "./delivery.module.scss";

interface IDelivery {
  pointsDistance: number;
}

export const Delivery = ({ pointsDistance }: IDelivery) => {
  return (
    <div className={styles.delivery_container}>
      {Object.values(EDelivaryTypes).map((value) => (
        <DelivaryOption key={value} value={value} distance={pointsDistance} />
      ))}
    </div>
  );
};
