import {
  distanceApi,
  distanceApiHost,
  geoLocationApi,
  geoLocationApiHost,
} from "../../assets/constants";
import { TAddressCoordinates } from "../../assets/types";

export const getCoordinatesRequest = (input: string) => {
  return {
    method: "GET",
    url: geoLocationApi,
    params: { address: input },
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_GEO_API_KEY,
      "X-RapidAPI-Host": geoLocationApiHost,
    },
  };
};

export const getDistanceRequest = (
  point1: TAddressCoordinates,
  point2: TAddressCoordinates
) => {
  return {
    method: "GET",
    url: distanceApi,
    params: {
      lat_1: point1.latitude,
      long_1: point1.longitude,
      lat_2: point2.latitude,
      long_2: point2.longitude,
      decimal_places: "2",
    },
    headers: {
      "Content-Type": "application/json",
      "X-RapidAPI-Key": process.env.REACT_APP_GEO_API_KEY,
      "X-RapidAPI-Host": distanceApiHost,
    },
  };
};
