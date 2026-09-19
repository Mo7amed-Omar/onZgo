import React, { useState } from 'react';
import { MapPin, Clock, Phone, Navigation, Copy, Check, Sun, Wifi, Sparkles, Coffee } from 'lucide-react';
import { locationData } from '../../../data/locations';
import { Button } from '../../ui/Button/Button';
import { Badge } from '../../ui/Badge/Badge';

const featureIcons: Record<string, React.ReactNode> = {
  Sun: <Sun className="w-5 h-5 text-onzgo-orange" />,
  Wifi: <Wifi className="w-5 h-5 text-onzgo-turquoise" />,
  Sparkles: <Sparkles className="w-5 h-5 text-onzgo-orange" />,
  Coffee: <Coffee className="w-5 h-5 text-onzgo-turquoise" />,
};

export const LocationCard: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(locationData.address.fullFormatted);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 border border-onzgo-espresso/10 shadow-xl space-y-8">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-onzgo-espresso/10">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2.5 h-2.5 rounded-full bg-onzgo-turquoise animate-pulse" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-onzgo-turquoise-800">
              {locationData.currentStatus.statusText}
            </span>
          </div>
          <h3 className="font-sans font-black text-2xl sm:text-3xl uppercase tracking-tight text-onzgo-espresso">
            {locationData.name}
          </h3>
          <p className="text-xs font-mono text-onzgo-espresso/60">{locationData.subname}</p>
        </div>

        <Badge variant="orange" size="md">
          FLAGSHIP SPOT
        </Badge>
      </div>

      {/* Address & Copy Action */}
      <div className="space-y-3">
        <span className="text-xs font-mono uppercase tracking-widest text-onzgo-espresso/60 block">
          Address & Directions
        </span>
        <div className="flex items-start justify-between gap-4 p-4 rounded-2xl bg-onzgo-cream-100 border border-onzgo-espresso/5">
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-onzgo-orange shrink-0 mt-0.5" />
            <span className="text-sm sm:text-base font-semibold text-onzgo-espresso">
              {locationData.address.fullFormatted}
            </span>
          </div>
          <button
            onClick={handleCopyAddress}
            aria-label="Copy Address"
            className="p-2 rounded-xl bg-white text-onzgo-espresso/70 hover:text-onzgo-orange hover:shadow-xs transition-all shrink-0"
            title="Copy address"
          >
            {copied ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Opening Hours Schedule */}
      <div className="space-y-3">
        <span className="text-xs font-mono uppercase tracking-widest text-onzgo-espresso/60 block">
          Operating Hours
        </span>
        <div className="space-y-2">
          {locationData.schedule.map((item, i) => (
            <div
              key={i}
              className={`flex items-center justify-between p-3 rounded-xl text-xs sm:text-sm font-mono ${
                item.isToday
                  ? 'bg-onzgo-orange/10 border border-onzgo-orange/30 text-onzgo-espresso font-bold'
                  : 'bg-onzgo-cream-100 text-onzgo-espresso/80'
              }`}
            >
              <div className="flex items-center gap-2">
                <Clock className={`w-4 h-4 ${item.isToday ? 'text-onzgo-orange' : 'text-onzgo-espresso/40'}`} />
                <span>{item.days}</span>
                {item.isToday && (
                  <span className="text-[0.65rem] px-1.5 py-0.5 rounded bg-onzgo-orange text-white">
                    TODAY
                  </span>
                )}
              </div>
              <span>{item.hours}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Amenities Grid */}
      <div className="space-y-3 pt-2">
        <span className="text-xs font-mono uppercase tracking-widest text-onzgo-espresso/60 block">
          Location Features
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {locationData.features.map((feature, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-2xl bg-onzgo-cream-50 border border-onzgo-espresso/5 flex items-start gap-3"
            >
              <div className="p-2 rounded-xl bg-white shadow-xs shrink-0">
                {featureIcons[feature.icon] || <Sparkles className="w-4 h-4 text-onzgo-orange" />}
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase text-onzgo-espresso mb-0.5">
                  {feature.title}
                </h4>
                <p className="text-[0.7rem] text-onzgo-espresso/70 leading-normal">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="pt-4 flex flex-col sm:flex-row gap-3">
        <Button
          href={locationData.maps.googleMapsUrl}
          isExternal
          variant="primary"
          size="md"
          icon={<Navigation className="w-4 h-4" />}
          className="flex-1 justify-center"
        >
          Open In Google Maps
        </Button>

        <Button
          href={`tel:${locationData.contact.phone}`}
          variant="outline"
          size="md"
          icon={<Phone className="w-4 h-4" />}
          iconPosition="left"
          className="justify-center"
        >
          {locationData.contact.displayPhone}
        </Button>
      </div>
    </div>
  );
};

