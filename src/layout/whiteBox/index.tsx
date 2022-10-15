import React, { useContext, useEffect, useReducer } from "react";
import cx from "classnames";

import {
  EAddressesReducerActions,
  EInputThemes,
  ESteps,
  TAddressCoordinates,
  TAddressesState,
} from "../../assets/types";
import { AddressInput } from "../../components/addressInput";
import { StepContext } from "../../components/stepContext";

import styles from "./whiteBox.module.scss";

const addressReducer = (
  state: TAddressesState,
  action: {
    type: EAddressesReducerActions;
    payload?: TAddressCoordinates;
  }
) => {
  if (action) {
    switch (action.type) {
      case EAddressesReducerActions.ORIGIN: {
        if (action.payload) {
          return { ...state, origin: action.payload };
        }
        break;
      }
      case EAddressesReducerActions.DESTINATION: {
        if (action.payload) {
          return { ...state, destination: action.payload };
        }
        break;
      }
      default: {
        return { destination: undefined, origin: undefined };
      }
    }
  }
  return state;
};

interface IWhiteBox {
  children: React.ReactNode;
  onAddressesPick: (coordinates: TAddressesState) => void;
}

export const WhiteBox = ({ children, onAddressesPick }: IWhiteBox) => {
  const { step } = useContext(StepContext);

  const [addresses, dispatchAddresses] = useReducer(addressReducer, {
    destination: undefined,
    origin: undefined,
  });

  useEffect(() => {
    if (addresses.destination !== undefined && addresses.origin !== undefined) {
      onAddressesPick(addresses);
    }
  }, [addresses]);

  return (
    <div
      className={cx(styles.white_box_container, {
        [styles.delivery]: step === ESteps.DELIVERY_TYPE,
      })}
    >
      <AddressInput
        theme={EInputThemes.PICK_UP}
        onSubmitAddress={(coordinates) =>
          dispatchAddresses({
            type: EAddressesReducerActions.ORIGIN,
            payload: coordinates,
          })
        }
      />
      <div className={styles.division_line} />
      <AddressInput
        theme={EInputThemes.DESTINATION}
        onSubmitAddress={(coordinates) =>
          dispatchAddresses({
            type: EAddressesReducerActions.DESTINATION,
            payload: coordinates,
          })
        }
      />
      {children}
    </div>
  );
};
