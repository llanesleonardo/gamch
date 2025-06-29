// components/LanguageSwitcher.tsx
'use client';
import { useTranslation } from 'react-i18next';
import ReactCountryFlag from 'react-country-flag';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  return (
    <div className="flex gap-2">
      <button
        onClick={() => i18n.changeLanguage('en')}
        className="focus:outline-none"
        aria-label="Switch to English"
      >
        <ReactCountryFlag countryCode="US" svg style={{ width: '34px', height: '34px' }} />
      </button>
      <button
        onClick={() => i18n.changeLanguage('es')}
        className="focus:outline-none"
        aria-label="Switch to Spanish"
      >
        <ReactCountryFlag countryCode="MX" svg style={{ width: '34px', height: '34px' }} />
      </button>
    </div>
  );
}
