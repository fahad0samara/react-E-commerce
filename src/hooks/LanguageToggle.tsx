import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Switch from 'react-switch';

const LanguageToggle = () => {
  const { i18n } = useTranslation();

  // Function to handle language change
  const handleLanguageChange = (checked) => {
    const language = checked ? 'ar' : 'en';
    i18n.changeLanguage(language);
    localStorage.setItem('selectedLanguage', language); // Store selected language in local storage
  };

  useEffect(() => {
    // Get selected language from local storage on component mount
    const selectedLanguage = localStorage.getItem('selectedLanguage');
    if (selectedLanguage) {
      i18n.changeLanguage(selectedLanguage);
    }
  }, [i18n]);

  return (
    <div className="flex justify-end p-4">
      <Switch
       id="language-toggle" 
        onChange={handleLanguageChange}
        checked={i18n.language === 'ar'}
        uncheckedIcon={false}
        checkedIcon={false}
      />
      <div className="ml-2">{i18n.language === 'ar' ? 'العربية' : 'English'}</div>
    </div>
  );
};

export default LanguageToggle;
