import React, { useCallback } from "react";
import cx from "classnames";

import { EServiceTypes } from "../../assets/types";
import {
  CraigslistPickup,
  DonationPickup,
  JunkRemoval,
  Other,
  SmallMove,
  StorageMove,
  StoreDelivary,
} from "../../assets/icons";

import styles from "./serviceBox.module.scss";

interface IServiceBox {
  value: EServiceTypes;
  onServiceClick: (pick: EServiceTypes) => void;
}

export const ServiceBox = ({ value, onServiceClick }: IServiceBox) => {
  const ServiceIcon = useCallback(() => {
    switch (value) {
      case EServiceTypes.CRAGISLIST_PICKUP:
        return <CraigslistPickup />;
      case EServiceTypes.DONATION_PICKUP:
        return <DonationPickup />;
      case EServiceTypes.JUNK_REMOVAL:
        return <JunkRemoval />;
      case EServiceTypes.SMALL_MOVE:
        return <SmallMove />;
      case EServiceTypes.STORAGE_MOVE:
        return <StorageMove />;
      case EServiceTypes.STORE_DELIVARY:
        return <StoreDelivary />;
      default:
        return <Other />;
    }
  }, [value]);

  return (
    <td
      onClick={() => onServiceClick(value)}
      className={cx(
        styles.service_box_container,
        {
          [styles.other]: value === EServiceTypes.OTHER,
        },
        {
          [styles.top_left]: value === EServiceTypes.STORE_DELIVARY,
        },
        {
          [styles.top_right]: value === EServiceTypes.STORAGE_MOVE,
        }
      )}
      colSpan={value === EServiceTypes.OTHER ? 3 : 1}
    >
      <ServiceIcon />
      <p>{value}</p>
    </td>
  );
};
