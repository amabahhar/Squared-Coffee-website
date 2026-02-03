export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  price?: string;
  category: string;
  image?: string;
  foodicsId?: string;
}

export interface Location {
  id: string;
  name: string;
  address: string;
  city: string;
  hours: string;
  mapUrl?: string;
}

export interface NavItem {
  label: string;
  href: string;
}