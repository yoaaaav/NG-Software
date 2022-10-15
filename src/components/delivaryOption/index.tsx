import React, { useCallback } from "react";
import { delivaryTypesDetails } from "../../assets/constants";

import {
  Appartment,
  OnePersonItem,
  Room,
  TwoPersonItem,
} from "../../assets/icons";
import { EDelivaryTypes } from "../../assets/types";

import styles from "./delivaryOption.module.scss";

interface IDelivaryOption {
  value: EDelivaryTypes;
  distance: number;
}

export const DelivaryOption = ({ value, distance }: IDelivaryOption) => {
  const DelivaryIcon = useCallback(() => {
    switch (value) {
      case EDelivaryTypes.APT:
        return <Appartment />;
      case EDelivaryTypes.ITEM_ONE:
        return <OnePersonItem />;
      case EDelivaryTypes.ITEM_TWO:
        return <TwoPersonItem />;
      default:
        return <Room />;
    }
  }, [value]);

  return (
    <div className={styles.delivary_option_container}>
      <div className={styles.details}>
        <h2>
          {delivaryTypesDetails[value].title}
          <span>{delivaryTypesDetails[value].subtitle}</span>
        </h2>
        <h4>{delivaryTypesDetails[value].details}</h4>
        <h3>{`$${delivaryTypesDetails[value].pricePerKm * distance} + $${
          delivaryTypesDetails[value].pricePerMinute
        }${
          delivaryTypesDetails[value].pricePerMinute % 1 === 0 ? "" : "0"
        } per minute`}</h3>
      </div>
      <span>
        <DelivaryIcon />
        <button onClick={() => window.alert("Delivery Booked!")}>Book</button>
      </span>
    </div>
  );
};
