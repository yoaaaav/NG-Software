import { EDelivaryTypes } from "../types";

export const delivaryTypesDetails: {
  [key in EDelivaryTypes]: {
    title: string;
    subtitle: string;
    details: string;
    pricePerKm: number;
    pricePerMinute: number;
  };
} = {
  [EDelivaryTypes.ITEM_ONE]: {
    title: "Pickup",
    subtitle: "1 Lugger",
    details: "Single item and small loads",
    pricePerKm: 1,
    pricePerMinute: 1,
  },
  [EDelivaryTypes.ITEM_TWO]: {
    title: "Pickup",
    subtitle: "2 Lugger",
    details: "Single item and small loads",
    pricePerKm: 2,
    pricePerMinute: 1.4,
  },
  [EDelivaryTypes.ROOM]: {
    title: "Van",
    subtitle: "2 Lugger",
    details: "Room full of stuff",
    pricePerKm: 3,
    pricePerMinute: 1.8,
  },
  [EDelivaryTypes.APT]: {
    title: "XL",
    subtitle: "2 Lugger",
    details: "Studio and 1 bedroom apts",
    pricePerKm: 4,
    pricePerMinute: 2,
  },
};

export { geoLocationApi } from "./api";
export { geoLocationApiHost } from "./api";
export { distanceApi } from "./api";
export { distanceApiHost } from "./api";
