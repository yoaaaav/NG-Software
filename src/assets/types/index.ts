export enum ESteps {
  SERVICE_TYPE = 1,
  ADDRESSES = 2,
  DELIVERY_TYPE = 3,
}

export enum EServiceTypes {
  STORE_DELIVARY = "Store Delivery",
  SMALL_MOVE = "Small Move",
  STORAGE_MOVE = "Storage Move",
  JUNK_REMOVAL = "Junk Removal",
  CRAGISLIST_PICKUP = "Craigslist Pickup",
  DONATION_PICKUP = "Donation Pickup",
  OTHER = "Other",
}

export enum EInputThemes {
  PICK_UP = "UP",
  DESTINATION = "DOWN",
}

export enum EDelivaryTypes {
  ITEM_ONE = "One Person",
  ITEM_TWO = "Two Person",
  ROOM = "Van",
  APT = "XL",
}

export type TAddressesState = {
  origin?: TAddressCoordinates;
  destination?: TAddressCoordinates;
};

export enum EAddressesReducerActions {
  ORIGIN = "Assign Origin",
  DESTINATION = "Assign Destination",
  RESET = "Reset Values",
}

export type TAddressCoordinates = {
  longitude: number;
  latitude: number;
  address: string;
};
