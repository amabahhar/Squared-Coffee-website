import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { RefreshCcw } from 'lucide-react';

const contentSections = [
    { id: 'hero', label: 'Hero', fields: ['est', 'title_start', 'title_highlight', 'subtitle', 'cta_primary', 'cta_secondary'] },
    { id: 'about', label: 'About', fields: ['eyebrow', 'title_start', 'title_highlight', 'p1', 'p2', 'p3', 'since'] },
    { id: 'loyalty', label: 'Loyalty', fields: ['eyebrow', 'title', 'title_highlight', 'description', 'cta'] },
    { id: 'footer', label: 'Footer', fields: ['rights', 'privacy', 'terms'] },
];

export const TextContentEditor: React.FC = () => {
    const { tEn, tAr, updateText, resetText } = useLanguage();
    const [editSection, setEditSection] = useState<string>('hero');

    return (
        <div className="flex flex-col gap-3">
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide border-b border-squared-gray-800 mb-2">
                {contentSections.map(s => (
                    <button
                        key={s.id}
                        onClick={() => setEditSection(s.id)}
                        className={`text-[9px] uppercase font-bold whitespace-nowrap px-2 py-1 rounded-sm transition-colors ${editSection === s.id ? 'bg-squared-gray-800 text-brand-primary' : 'text-squared-gray-600 hover:text-white'}`}
                    >
                        {s.label}
                    </button>
                ))}
            </div>

            <div className="flex flex-col gap-4">
                {contentSections.find(s => s.id === editSection)?.fields.map(field => (
                    <div key={field} className="flex flex-col gap-2">
                        <div className="text-[9px] text-squared-gray-500 font-bold uppercase tracking-widest">{field.replace('_', ' ')}</div>
                        
                        {/* English Input */}
                        <div className="flex flex-col gap-1">
                            <div className="text-[8px] text-squared-gray-600 uppercase">English</div>
                            <textarea
                                value={(tEn as any)[editSection][field]}
                                onChange={(e) => updateText('en', `${editSection}.${field}`, e.target.value)}
                                className="w-full bg-squared-gray-900 border border-squared-gray-800 p-2 text-xs text-squared-gray-300 focus:text-white focus:border-brand-primary/50 focus:outline-none rounded-sm min-h-[60px]"
                            />
                        </div>

                        {/* Arabic Input */}
                        <div className="flex flex-col gap-1">
                            <div className="text-[8px] text-squared-gray-600 uppercase text-right">العربية</div>
                            <textarea
                                dir="rtl"
                                value={(tAr as any)[editSection][field]}
                                onChange={(e) => updateText('ar', `${editSection}.${field}`, e.target.value)}
                                className="w-full bg-squared-gray-900 border border-squared-gray-800 p-2 text-xs text-squared-gray-300 focus:text-white focus:border-brand-primary/50 focus:outline-none rounded-sm font-arabic min-h-[60px]"
                            />
                        </div>
                    </div>
                ))}
            </div>

            <button 
                onClick={resetText}
                className="flex items-center justify-center gap-2 py-2 mt-4 text-[10px] uppercase font-bold text-squared-gray-400 hover:text-white border border-squared-gray-800 hover:border-squared-gray-600 transition-all font-mono"
            >
                <RefreshCcw size={10} />
                Reset All Content
            </button>
        </div>
    );
};
