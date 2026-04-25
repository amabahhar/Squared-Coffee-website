import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../utils/translations';
import { deepMerge, setByPath } from '../utils/object';

type Language = 'en' | 'ar';
type Dictionary = typeof translations.en;

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: Dictionary;
    tEn: Dictionary;
    tAr: Dictionary;
    updateText: (lang: Language, path: string, value: string) => void;
    resetText: () => void;
    dir: 'ltr' | 'rtl';
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [language, setLanguage] = useState<Language>(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('squared_language') as Language;
            if (saved) return saved;
        }
        return 'ar';
    });

    const [overrides, setOverrides] = useState<{en: any, ar: any}>(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('content_overrides');
            return saved ? JSON.parse(saved) : { en: {}, ar: {} };
        }
        return { en: {}, ar: {} };
    });

    useEffect(() => {
        localStorage.setItem('squared_language', language);
    }, [language]);

    const updateText = (lang: Language, path: string, value: string) => {
        setOverrides(prev => {
            const updated = { ...prev };
            updated[lang] = setByPath({ ...prev[lang] }, path, value);
            localStorage.setItem('content_overrides', JSON.stringify(updated));
            return updated;
        });
    };

    const resetText = () => {
        setOverrides({ en: {}, ar: {} });
        localStorage.removeItem('content_overrides');
    };

    useEffect(() => {
        const dir = language === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.dir = dir;
        document.documentElement.lang = language;

        if (language === 'ar') {
            document.body.classList.add('font-arabic');
            document.body.classList.remove('font-sans');
        } else {
            document.body.classList.add('font-sans');
            document.body.classList.remove('font-arabic');
        }
    }, [language]);

    // Compute actual dictionaries by merging defaults with overrides
    const tEn = deepMerge(translations.en, overrides.en) as Dictionary;
    const tAr = deepMerge(translations.ar, overrides.ar) as Dictionary;
    const t = language === 'ar' ? tAr : tEn;

    const value: LanguageContextType = {
        language,
        setLanguage,
        t,
        tEn,
        tAr,
        updateText,
        resetText,
        dir: (language === 'ar' ? 'rtl' : 'ltr') as 'ltr' | 'rtl'
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
