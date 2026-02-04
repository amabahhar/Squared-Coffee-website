import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../utils/translations';

type Language = 'en' | 'ar';
type Dictionary = typeof translations.en;

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: Dictionary;
    dir: 'ltr' | 'rtl';
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [language, setLanguage] = useState<Language>('en');

    useEffect(() => {
        // Update HTML attributes for global direction and language
        const dir = language === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.dir = dir;
        document.documentElement.lang = language;

        // Optional: Switch font class on body if needed, but managing via CSS/Tailwind config is cleaner.
        if (language === 'ar') {
            document.body.classList.add('font-arabic');
            document.body.classList.remove('font-sans');
        } else {
            document.body.classList.add('font-sans');
            document.body.classList.remove('font-arabic');
        }

    }, [language]);

    const value = {
        language,
        setLanguage,
        t: translations[language],
        dir: language === 'ar' ? 'rtl' : 'ltr'
    };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
