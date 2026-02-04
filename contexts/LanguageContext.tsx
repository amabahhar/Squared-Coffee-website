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
    const [language, setLanguage] = useState<Language>(() => {
        // Try to get from local storage first
        const saved = localStorage.getItem('squared_language') as Language;
        if (saved) return saved;

        // Otherwise check device language
        const deviceLang = navigator.language.toLowerCase();
        return deviceLang.startsWith('ar') ? 'ar' : 'en';
    });

    useEffect(() => {
        localStorage.setItem('squared_language', language);
    }, [language]);

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
