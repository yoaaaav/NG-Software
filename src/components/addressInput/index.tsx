import React, { useContext, useEffect, useState } from "react";
import cx from "classnames";

import { getCoordinates } from "../../services/api/maps";
import { ArrowUp } from "../../assets/icons";
import { TAddressCoordinates, EInputThemes, ESteps } from "../../assets/types";
import { StepContext } from "../stepContext";

import styles from "./addressInput.module.scss";

interface IAddressInput {
  theme: EInputThemes;
  onSubmitAddress: (coordinates: TAddressCoordinates) => void;
  startValue?: string;
}

export const AddressInput = ({
  theme,
  onSubmitAddress,
  startValue = "",
}: IAddressInput) => {
  const { step, changeStep } = useContext(StepContext);

  const [value, setValue] = useState(startValue);
  const [fixed, setFixed] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setFixed(false);
    if (!startValue) {
      setError(false);
      if (value && !fixed) {
        const time = setTimeout(async () => {
          try {
            const options = await getCoordinates(value);
            if (
              options &&
              Array.isArray(options.Results) &&
              options.Results.length
            ) {
              const { address, latitude, longitude } = options.Results[0];
              onSubmitAddress({ address, latitude, longitude });
              setFixed(true);
              setValue(address);
            } else {
              setError(true);
            }
          } catch (err) {
            changeStep(ESteps.SERVICE_TYPE);
            window.alert("problem occured");
          }
        }, 1200);
        return () => {
          clearTimeout(time);
        };
      }
    }
  }, [value]);

  return (
    <div
      className={cx(styles.address_input_container, {
        [styles.arrow_down]: theme === EInputThemes.DESTINATION,
        [styles.fixed]: fixed,
        [styles.error]: error,
      })}
    >
      <ArrowUp />
      <div className={styles.field}>
        {step === ESteps.ADDRESSES && (
          <p>
            {theme === EInputThemes.PICK_UP ? "Pick up from" : "Destination"}
          </p>
        )}
        <input
          placeholder="type address"
          value={value}
          onChange={({ target }) => setValue(target.value)}
          onClick={() =>
            step === ESteps.DELIVERY_TYPE && changeStep(ESteps.ADDRESSES)
          }
        />
      </div>
      {error && (
        <div className={styles.error}>
          Address was not found, please try again.
        </div>
      )}
    </div>
  );
};
