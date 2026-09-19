export interface OpeningHours {
  days: string;
  hours: string;
  isToday?: boolean;
}

export interface LocationFeature {
  icon: string;
  title: string;
  description: string;
}

export interface LocationInfo {
  id: string;
  name: string;
  subname: string;
  address: {
    street: string;
    city: string;
    district: string;
    country: string;
    fullFormatted: string;
  };
  contact: {
    phone: string;
    displayPhone: string;
    email: string;
  };
  schedule: OpeningHours[];
  currentStatus: {
    isOpen: boolean;
    statusText: string;
    closingTime: string;
  };
  features: LocationFeature[];
  maps: {
    embedQuery: string;
    googleMapsUrl: string;
    appleMapsUrl: string;
  };
  images: {
    hero: string;
    outdoor: string;
    counter: string;
  };
}

