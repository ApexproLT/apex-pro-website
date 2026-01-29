export interface Vehicle {
  id?: string;
  image_url: string;
  make: string;
  model: string;
  year: number;
  mileage: number;
  price: number;
  fuel_type: string;
  transmission: string;
  body_type: string;
  description_lt: string;
  description_en: string;
  status: 'available' | 'reserved' | 'sold';
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  vehicle?: string;
  message: string;
}

export type FormStatus = 'idle' | 'sending' | 'success' | 'error';
