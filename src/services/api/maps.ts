import axios from "axios";

import { getCoordinatesRequest, getDistanceRequest } from ".";
import { TAddressesState } from "../../assets/types";

export const getCoordinates = async (userInput: string) => {
  try {
    const response = await axios(getCoordinatesRequest(userInput));
    return response?.data;
  } catch (err) {
    return err;
  }
};

export const getDistance = async (coordinates: TAddressesState) => {
  const { origin, destination } = coordinates;
  try {
    if (origin !== undefined && destination !== undefined) {
      const response = await axios(getDistanceRequest(origin, destination));
      return response?.data.distance;
    } else {
      throw new Error();
    }
  } catch (err) {
    return err;
  }
};
