'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Fuel, Settings, Box } from 'lucide-react';
import { useLanguage } from './LanguageProvider';
import { Vehicle } from '@/lib/types';
import { formatPrice, formatMileage } from '@/lib/utils';

interface VehicleCardProps {
  vehicle: Vehicle;
}

export function VehicleCard({ vehicle }: VehicleCardProps) {
  const { locale, t } = useLanguage();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const description = locale === 'lt' ? vehicle.description_lt : vehicle.description_en;

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      // Store selected vehicle for contact form
      if (typeof window !== 'undefined') {
        sessionStorage.setItem(
          'selectedVehicle',
          `${vehicle.make} ${vehicle.model} (${vehicle.year})`
        );
      }
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const fallbackImage =
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop';

  return (
    <div className="card group h-full flex flex-col">
      {/* Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-apex-charcoal">
      {/* Vehicle Image */}
    <img
      src={vehicle.image_url || fallbackImage}
      alt={`${vehicle.make} ${vehicle.model}`}
      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
      onError={(e) => {
        (e.target as HTMLImageElement).src = fallbackImage;
      }}
    />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-apex-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Status Badge */}
        {vehicle.status === 'reserved' && (
          <div className="absolute top-4 right-4">
            <span className="badge badge-reserved">{t.inventory.reserved}</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        {/* Make & Model */}
        <h3 className="font-display text-xl tracking-wide text-apex-white uppercase group-hover:text-apex-gold transition-colors duration-300">
          {vehicle.make} {vehicle.model}
        </h3>

        {/* Year & Mileage */}
        <p className="mt-1 text-apex-silver text-sm font-body">
          {vehicle.year} · {formatMileage(vehicle.mileage)} {t.inventory.mileage}
        </p>

        {/* Specs */}
        <div className="mt-4 space-y-2">
          <div className="flex items-center text-apex-silver text-sm">
            <Fuel className="w-4 h-4 mr-2 text-apex-gold" />
            <span>{vehicle.fuel_type}</span>
          </div>
          <div className="flex items-center text-apex-silver text-sm">
            <Settings className="w-4 h-4 mr-2 text-apex-gold" />
            <span>{vehicle.transmission}</span>
          </div>
          {vehicle.body_type && (
            <div className="flex items-center text-apex-silver text-sm">
              <Box className="w-4 h-4 mr-2 text-apex-gold" />
              <span>{vehicle.body_type}</span>
            </div>
          )}
        </div>

        {/* Description - if exists */}
        {description && (
          <p className="mt-4 text-apex-silver/80 text-sm font-body leading-relaxed line-clamp-2">
            {description}
          </p>
        )}

        {/* Price & CTA */}
        <div className="mt-auto pt-5">
          <div className="flex items-end justify-between">
            <span className="font-display text-2xl text-apex-gold tracking-wide">
              {formatPrice(vehicle.price)}
            </span>
          </div>

          <motion.button
            onClick={scrollToContact}
            className="w-full mt-4 btn-gold-outline"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={vehicle.status === 'reserved'}
          >
            {vehicle.status === 'reserved' ? t.inventory.reserved : t.inventory.inquire}
          </motion.button>
        </div>
      </div>
    </div>
  );
}
