import React from "react";

import image from "../../assets/pictures/Visual.png";

import styles from "./address.module.scss";

export const Address = () => {
  return (
    <div className={styles.address_container}>
      <img alt="search for address" src={image} />
      <h5>
        All our Luggers are equipped with the necessary tools such as straps,
        blankets and wrap to protect your items.
      </h5>
    </div>
  );
};
