import Papa from 'papaparse';
import { Vehicle } from './types';
import { generateId } from './utils';

// Placeholder vehicles for demo (when no Google Sheets URL is configured)
const placeholderVehicles: Vehicle[] = [
  {
    id: 'v1',
    image_url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop',
    make: 'Mercedes-Benz',
    model: 'Sprinter 316 CDI',
    year: 2019,
    mileage: 145000,
    price: 18500,
    fuel_type: 'Diesel',
    transmission: 'Automatic',
    body_type: 'L3H2 Furgon',
    description_lt: 'Puikios būklės Sprinter iš Vokietijos. Pilna serviso istorija, vienas savininkas.',
    description_en: 'Excellent condition Sprinter from Germany. Full service history, one owner.',
    status: 'available',
  },
  {
    id: 'v2',
    image_url: 'https://images.unsplash.com/photo-1532581140115-3e355d1ed1de?w=800&auto=format&fit=crop',
    make: 'Volkswagen',
    model: 'Crafter 35 TDI',
    year: 2020,
    mileage: 98000,
    price: 22500,
    fuel_type: 'Diesel',
    transmission: 'Automatic',
    body_type: 'L4H3 Furgon',
    description_lt: 'Erdvus Crafter su aukštu stogu. Idealus kurjeriams ir logistikai.',
    description_en: 'Spacious Crafter with high roof. Ideal for couriers and logistics.',
    status: 'available',
  },
  {
    id: 'v3',
    image_url: 'https://images.unsplash.com/photo-1566008885218-90abf9200ddb?w=800&auto=format&fit=crop',
    make: 'Mercedes-Benz',
    model: 'Sprinter 314 CDI',
    year: 2018,
    mileage: 178000,
    price: 14900,
    fuel_type: 'Diesel',
    transmission: 'Manual',
    body_type: 'L2H2 Furgon',
    description_lt: 'Ekonomiškas variantas verslui. Techniškai tvarkingas, paruoštas darbui.',
    description_en: 'Economical option for business. Technically sound, ready for work.',
    status: 'available',
  },
  {
    id: 'v4',
    image_url: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&auto=format&fit=crop',
    make: 'Ford',
    model: 'Transit 350 EcoBlue',
    year: 2021,
    mileage: 67000,
    price: 26900,
    fuel_type: 'Diesel',
    transmission: 'Automatic',
    body_type: 'L3H2 Furgon',
    description_lt: 'Beveik naujas Transit su maža rida. Premium komplektacija.',
    description_en: 'Nearly new Transit with low mileage. Premium specification.',
    status: 'reserved',
  },
  {
    id: 'v5',
    image_url: 'https://images.unsplash.com/photo-1568844293986-8c1c5681e4f4?w=800&auto=format&fit=crop',
    make: 'Peugeot',
    model: 'Boxer 335 BlueHDi',
    year: 2019,
    mileage: 134000,
    price: 15500,
    fuel_type: 'Diesel',
    transmission: 'Manual',
    body_type: 'L3H2 Furgon',
    description_lt: 'Patikimas Boxer su erdvia krovinine dalimi. Geras kainos ir kokybės santykis.',
    description_en: 'Reliable Boxer with spacious cargo area. Good value for money.',
    status: 'available',
  },
];

interface SheetRow {
  image_url?: string;
  make?: string;
  model?: string;
  year?: string | number;
  mileage?: string | number;
  price?: string | number;
  fuel_type?: string;
  transmission?: string;
  body_type?: string;
  description_lt?: string;
  description_en?: string;
  status?: string;
}

export async function fetchVehicles(): Promise<Vehicle[]> {
  const sheetsUrl = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_URL;
  
  // If no Google Sheets URL configured, return placeholder data
  if (!sheetsUrl) {
    console.log('No Google Sheets URL configured, using placeholder data');
    return placeholderVehicles;
  }
  
  try {
    const response = await fetch(sheetsUrl, {
      next: { revalidate: 300 }, // Cache for 5 minutes
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.status}`);
    }
    
    const csvText = await response.text();
    
    const result = Papa.parse<SheetRow>(csvText, {
      header: true,
      skipEmptyLines: true,
      transformHeader: (header: string) => header.trim().toLowerCase().replace(/\s+/g, '_'),
    });
    
    if (result.errors.length > 0) {
      console.error('CSV parsing errors:', result.errors);
    }
    
    const vehicles: Vehicle[] = result.data
      .map((row, index) => ({
        id: `sheet-${index}`,
        image_url: row.image_url || 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop',
        make: row.make || 'Unknown',
        model: row.model || 'Model',
        year: parseInt(String(row.year)) || new Date().getFullYear(),
        mileage: parseInt(String(row.mileage)?.replace(/[^0-9]/g, '')) || 0,
        price: parseInt(String(row.price)?.replace(/[^0-9]/g, '')) || 0,
        fuel_type: row.fuel_type || 'Diesel',
        transmission: row.transmission || 'Manual',
        body_type: row.body_type || '',
        description_lt: row.description_lt || '',
        description_en: row.description_en || '',
        status: (row.status as Vehicle['status']) || 'available',
      }))
      .filter(v => v.status !== 'sold'); // Hide sold vehicles
    
    return vehicles.length > 0 ? vehicles : placeholderVehicles;
  } catch (error) {
    console.error('Error fetching vehicles from Google Sheets:', error);
    return placeholderVehicles;
  }
}

// Client-side fetch function
export async function fetchVehiclesClient(): Promise<Vehicle[]> {
  const sheetsUrl = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_URL;
  
  if (!sheetsUrl) {
    return placeholderVehicles;
  }
  
  try {
    const response = await fetch(sheetsUrl);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.status}`);
    }
    
    const csvText = await response.text();
    
    const result = Papa.parse<SheetRow>(csvText, {
      header: true,
      skipEmptyLines: true,
      transformHeader: (header: string) => header.trim().toLowerCase().replace(/\s+/g, '_'),
    });
    
    const vehicles: Vehicle[] = result.data
      .map((row, index) => ({
        id: `sheet-${index}`,
        image_url: row.image_url || 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop',
        make: row.make || 'Unknown',
        model: row.model || 'Model',
        year: parseInt(String(row.year)) || new Date().getFullYear(),
        mileage: parseInt(String(row.mileage)?.replace(/[^0-9]/g, '')) || 0,
        price: parseInt(String(row.price)?.replace(/[^0-9]/g, '')) || 0,
        fuel_type: row.fuel_type || 'Diesel',
        transmission: row.transmission || 'Manual',
        body_type: row.body_type || '',
        description_lt: row.description_lt || '',
        description_en: row.description_en || '',
        status: (row.status as Vehicle['status']) || 'available',
      }))
      .filter(v => v.status !== 'sold');
    
    return vehicles.length > 0 ? vehicles : placeholderVehicles;
  } catch (error) {
    console.error('Error fetching vehicles:', error);
    return placeholderVehicles;
  }
}
