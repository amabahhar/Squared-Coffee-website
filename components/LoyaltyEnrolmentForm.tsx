import React, { useState } from 'react';
import { useBrand } from '../contexts/BrandContext';
import { useLanguage } from '../contexts/LanguageContext';
import { CheckCircle, Loader } from 'lucide-react';
import { cn } from '../utils/i18nUtils';
import { InteractiveHoverButton } from './ui/interactive-hover-button';
import { FloatingInput } from './ui/floating-input';

interface FormData {
    name: string;
    phone: string;
    birthday: string;
    email: string;
    termsAccepted: boolean;
    marketingConsent: boolean;
}

export const LoyaltyEnrolmentForm: React.FC<{ onNameChange: (name: string) => void }> = ({ onNameChange }) => {
    const { brand } = useBrand();
    const { t, language } = useLanguage();
    
    const [formData, setFormData] = useState<FormData>({
        name: '', phone: '', birthday: '', email: '',
        termsAccepted: false, marketingConsent: false
    });
    
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [cardUrl, setCardUrl] = useState<string | null>(null);

    const handleInputChange = (field: keyof FormData, value: string | boolean) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        if (field === 'name') onNameChange(value as string);
    };

    const formatPhoneNumber = (phone: string): string => {
        let cleaned = phone.replace(/\D/g, '');
        if (cleaned.startsWith('0')) cleaned = cleaned.substring(1);
        if (!cleaned.startsWith('966')) cleaned = '966' + cleaned;
        return `+${cleaned}`;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.termsAccepted) {
            alert(t.loyalty.validation.accept_terms);
            return;
        }

        setIsSubmitting(true);
        setStatus('idle');

        try {
            const payload = {
                campaignId: brand.integrations.loopyLoyaltyCampaignId,
                customerData: {
                    'Name': formData.name,
                    'Email address': formData.email,
                    'Contact Number': formatPhoneNumber(formData.phone),
                    'Birthday': `${formData.birthday}T00:00:00+03:00`
                },
                dataConsentOptIn: formData.marketingConsent
            };

            const response = await fetch(brand.integrations.loopyLoyaltyEnrolUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (response.ok) {
                const data = await response.json();
                setStatus('success');
                setCardUrl(data.url || null);
                setFormData({ name: '', phone: '', birthday: '', email: '', termsAccepted: false, marketingConsent: false });
                onNameChange('');
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (status === 'success') {
        return (
            <div className="text-center py-10 bg-white dark:bg-squared-black border border-squared-gray-200 dark:border-squared-gray-800 p-8 rounded-none">
                <CheckCircle className="w-16 h-16 text-brand-primary mx-auto mb-6" />
                <h3 className={cn("text-2xl font-sans font-bold text-squared-black dark:text-squared-white mb-4", language === 'ar' && "font-arabic")}>
                    {t.loyalty.status.success}
                </h3>
                <div className="flex flex-col gap-4">
                    {cardUrl && (
                        <InteractiveHoverButton 
                            text={t.loyalty.cta_add_wallet}
                            onClick={() => window.open(cardUrl, '_blank')}
                        />
                    )}
                    <InteractiveHoverButton
                        onClick={() => setStatus('idle')}
                        text={t.loyalty.cta_register_another}
                    />
                </div>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-10 max-w-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <FloatingInput
                    label={t.loyalty.form.name}
                    value={formData.name}
                    required
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    language={language}
                />
                <FloatingInput
                    label={t.loyalty.form.phone}
                    type="tel"
                    value={formData.phone}
                    required
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    language={language}
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <FloatingInput
                    label={t.loyalty.form.birthday}
                    type="date"
                    value={formData.birthday}
                    required
                    onChange={(e) => handleInputChange('birthday', e.target.value)}
                    language={language}
                />
                <FloatingInput
                    label={t.loyalty.form.email}
                    type="email"
                    value={formData.email}
                    required
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    language={language}
                />
            </div>

            <div className="space-y-4 pt-2">
                {[
                    { id: 'terms', field: 'termsAccepted', label: t.loyalty.form.terms, required: true },
                    { id: 'marketing', field: 'marketingConsent', label: t.loyalty.form.marketing }
                ].map((item) => (
                    <label key={item.id} className="checkbox-wrapper">
                        <input
                            type="checkbox"
                            required={item.required}
                            checked={formData[item.field as keyof FormData] as boolean}
                            onChange={(e) => handleInputChange(item.field as keyof FormData, e.target.checked)}
                        />
                        <div className="checkmark">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                        </div>
                        <span className={cn("label-text", language === 'ar' && "font-arabic")}>
                            {item.label} {item.required && t.loyalty.form.required_mark}
                        </span>
                    </label>
                ))}
            </div>

            {status === 'error' && (
                <div className="bg-red-50 text-red-600 p-4 border-l-4 border-red-500 text-sm">
                    {t.loyalty.status.error}
                </div>
            )}

            <div className="pt-6">
                <InteractiveHoverButton
                    type="submit"
                    disabled={isSubmitting}
                    text={isSubmitting ? undefined : t.loyalty.cta}
                >
                    {isSubmitting && <Loader className="animate-spin" />}
                </InteractiveHoverButton>
            </div>
        </form>
    );
};
