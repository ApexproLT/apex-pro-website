'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Check, AlertCircle, Loader2 } from 'lucide-react';
import { useLanguage } from './LanguageProvider';
import { Vehicle, ContactFormData, FormStatus } from '@/lib/types';

interface ContactFormProps {
  vehicles: Vehicle[];
}

export function ContactForm({ vehicles }: ContactFormProps) {
  const { locale, t } = useLanguage();
  const [status, setStatus] = useState<FormStatus>('idle');
  const [selectedVehicle, setSelectedVehicle] = useState<string>('');

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isValid },
  } = useForm<ContactFormData>({
    mode: 'onChange',
  });

  // Check for pre-selected vehicle from inventory
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = sessionStorage.getItem('selectedVehicle');
      if (saved) {
        setSelectedVehicle(saved);
        setValue('vehicle', saved);
        sessionStorage.removeItem('selectedVehicle');
      }
    }
  }, [setValue]);

  const onSubmit = async (data: ContactFormData) => {
    setStatus('sending');

    const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;

    // If no Formspree ID configured, simulate success
    if (!formspreeId) {
      console.log('Form data:', data);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus('success');
      reset();
      setSelectedVehicle('');
      setTimeout(() => setStatus('idle'), 5000);
      return;
    }

    try {
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone || 'Not provided',
          vehicle: data.vehicle || 'General inquiry',
          message: data.message,
          locale: locale,
          timestamp: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        setStatus('success');
        reset();
        setSelectedVehicle('');
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Form error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const availableVehicles = vehicles.filter(
    (v) => v.status === 'available' || v.status === 'reserved'
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {/* Name Field */}
      <div>
        <label htmlFor="name" className="form-label">
          {t.contact.form.name} *
        </label>
        <input
          type="text"
          id="name"
          className={`form-input ${errors.name ? 'border-red-500' : ''}`}
          placeholder={t.contact.form.namePlaceholder}
          {...register('name', { required: true, minLength: 2 })}
        />
        {errors.name && (
          <p className="mt-1 text-red-500 text-xs">{t.contact.form.name} is required</p>
        )}
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email" className="form-label">
          {t.contact.form.email} *
        </label>
        <input
          type="email"
          id="email"
          className={`form-input ${errors.email ? 'border-red-500' : ''}`}
          placeholder={t.contact.form.emailPlaceholder}
          {...register('email', {
            required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          })}
        />
        {errors.email && (
          <p className="mt-1 text-red-500 text-xs">{t.contact.form.email} is required</p>
        )}
      </div>

      {/* Phone Field */}
      <div>
        <label htmlFor="phone" className="form-label">
          {t.contact.form.phone}
        </label>
        <input
          type="tel"
          id="phone"
          className="form-input"
          placeholder={t.contact.form.phonePlaceholder}
          {...register('phone')}
        />
      </div>

      {/* Vehicle Select */}
      <div>
        <label htmlFor="vehicle" className="form-label">
          {t.contact.form.vehicle}
        </label>
        <select
          id="vehicle"
          className="form-input cursor-pointer"
          value={selectedVehicle}
          {...register('vehicle')}
          onChange={(e) => {
            setSelectedVehicle(e.target.value);
            setValue('vehicle', e.target.value);
          }}
        >
          <option value="">{t.contact.form.vehicleDefault}</option>
          <option value="general">{t.contact.form.vehicleGeneral}</option>
          {availableVehicles.map((vehicle, index) => (
            <option key={vehicle.id || index} value={`${vehicle.make} ${vehicle.model} (${vehicle.year})`}>
              {vehicle.make} {vehicle.model} ({vehicle.year})
            </option>
          ))}
        </select>
      </div>

      {/* Message Field */}
      <div>
        <label htmlFor="message" className="form-label">
          {t.contact.form.message} *
        </label>
        <textarea
          id="message"
          rows={4}
          className={`form-input resize-none ${errors.message ? 'border-red-500' : ''}`}
          placeholder={t.contact.form.messagePlaceholder}
          {...register('message', { required: true, minLength: 10 })}
        />
        {errors.message && (
          <p className="mt-1 text-red-500 text-xs">{t.contact.form.message} is required</p>
        )}
      </div>

      {/* Submit Button */}
      <motion.button
        type="submit"
        className="w-full btn-primary relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={status === 'sending' || status === 'success'}
        whileHover={status === 'idle' ? { scale: 1.02 } : {}}
        whileTap={status === 'idle' ? { scale: 0.98 } : {}}
      >
        <AnimatePresence mode="wait">
          {status === 'idle' && (
            <motion.span
              key="idle"
              className="flex items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <Send className="w-4 h-4 mr-2" />
              {t.contact.form.submit}
            </motion.span>
          )}
          {status === 'sending' && (
            <motion.span
              key="sending"
              className="flex items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              {t.contact.form.sending}
            </motion.span>
          )}
          {status === 'success' && (
            <motion.span
              key="success"
              className="flex items-center justify-center text-apex-black"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <Check className="w-4 h-4 mr-2" />
              {t.contact.form.success}
            </motion.span>
          )}
          {status === 'error' && (
            <motion.span
              key="error"
              className="flex items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <AlertCircle className="w-4 h-4 mr-2" />
              {t.contact.form.error}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </form>
  );
}
