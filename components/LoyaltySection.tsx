import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { cn } from '../utils/i18nUtils';
import GridBackground from './GridBackground';
import { LoyaltyCardPreview } from './LoyaltyCardPreview';
import { LoyaltyEnrolmentForm } from './LoyaltyEnrolmentForm';

const LoyaltySection: React.FC = () => {
    const { t, language } = useLanguage();
    const [previewName, setPreviewName] = useState('');

    return (
        <section id="loyalty" className="py-20 md:py-32 bg-squared-white dark:bg-squared-black relative overflow-hidden">
            <GridBackground />
            
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* Left/Right Card Preview based on Language */}
                    <div className={cn("lg:col-span-5", language === 'ar' ? 'lg:order-2' : '')}>
                        <LoyaltyCardPreview memberName={previewName} />
                    </div>

                    {/* Content & Form Side */}
                    <div className={cn("lg:col-span-7", language === 'ar' ? 'lg:order-1' : '')}>
                        <div className="mb-12">
                            <div className={cn("flex items-center gap-3 mb-4", language === 'ar' && "flex-row-reverse")}>
                                <div className="w-2 h-2 bg-brand-primary"></div>
                                <span className={cn("text-xs font-bold tracking-widest uppercase text-brand-primary", language === 'ar' ? 'font-arabic' : 'font-mono')}>
                                    {t.loyalty.eyebrow}
                                </span>
                            </div>
                            
                            <h2 className={cn("text-4xl md:text-5xl font-sans font-bold text-squared-black dark:text-squared-white mb-6", language === 'ar' && "font-arabic")}>
                                {t.loyalty.title} {t.loyalty.title_highlight}
                            </h2>
                            
                            <p className={cn("text-lg text-squared-gray-600 dark:text-squared-gray-400 max-w-lg", language === 'ar' && "font-arabic")}>
                                {t.loyalty.description}
                            </p>
                        </div>

                        <LoyaltyEnrolmentForm onNameChange={setPreviewName} />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default LoyaltySection;
