import React from 'react';
import { useBrand } from '../contexts/BrandContext';
import { useLanguage } from '../contexts/LanguageContext';

interface LoyaltyCardPreviewProps {
    memberName: string;
}

export const LoyaltyCardPreview: React.FC<LoyaltyCardPreviewProps> = ({ memberName }) => {
    const { brand } = useBrand();
    const { t, language } = useLanguage();

    return (
        <div className="relative group perspective">
            <div className="w-full aspect-[1.586] bg-squared-black dark:bg-squared-white rounded-xl shadow-2xl relative overflow-hidden transform transition-transform duration-700 hover:rotate-y-12 preserve-3d">
                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                        <div className="text-2xl font-bold text-squared-white dark:text-squared-black tracking-tighter uppercase">
                            {brand.name.split(' ')[0]}
                        </div>
                        <div className="w-12 h-12 border border-brand-primary/50 rounded-full flex items-center justify-center">
                            <div className="w-8 h-8 bg-brand-primary/20 rounded-full animate-pulse"></div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="flex justify-between items-end font-mono text-xs text-squared-gray-400 dark:text-squared-gray-600 uppercase">
                            <div>
                                <div className="mb-1">{t.loyalty.card_labels.member_name}</div>
                                <div className="text-squared-white dark:text-squared-black text-sm tracking-widest">
                                    {memberName || t.loyalty.card_labels.dummy_name}
                                </div>
                            </div>
                            <div>{t.loyalty.card_labels.dummy_number}</div>
                        </div>
                    </div>
                    
                    {/* Background Graphic */}
                    <div className="absolute -bottom-24 -right-24 w-64 h-64 border-[20px] border-brand-primary/10 rounded-full"></div>
                    <div className="absolute top-0 left-0 w-full h-full bg-noise opacity-10 pointer-events-none"></div>
                </div>
            </div>

            {/* Decorative Elements behind card */}
            <div className="absolute -inset-4 border border-squared-gray-200 dark:border-squared-gray-800 rounded-xl -z-10 bg-squared-white dark:bg-squared-black/50"></div>
        </div>
    );
};
