import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Send, CheckCircle, Loader, Gift } from 'lucide-react';
import Logo from './Logo';
import { InteractiveHoverButton } from './ui/interactive-hover-button';

interface LoyaltySectionProps {
    isDarkMode: boolean;
}

const LoyaltySection: React.FC<LoyaltySectionProps> = ({ isDarkMode }) => {
    const { t, language } = useLanguage();
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        birthday: '',
        email: '',
        termsAccepted: false,
        marketingConsent: false
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [cardUrl, setCardUrl] = useState<string | null>(null);

    // Helper functions preserved from original
    const formatPhoneNumber = (phone: string): string => {
        let cleaned = phone.replace(/\D/g, '');
        if (cleaned.startsWith('0')) cleaned = cleaned.substring(1);
        if (!cleaned.startsWith('966')) cleaned = '966' + cleaned;
        return '+' + cleaned;
    };

    const formatBirthday = (dateString: string): string => {
        return `${dateString}T00:00:00+03:00`;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.termsAccepted) {
            alert(language === 'ar' ? 'يرجى الموافقة على الشروط والأحكام' : 'Please accept the terms and conditions');
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            const formattedPhone = formatPhoneNumber(formData.phone);
            const formattedBirthday = formatBirthday(formData.birthday);

            const payload = {
                campaignId: '1rmMhxhNM13OIXfFWJOxKU',
                customerData: {
                    'Name': formData.name,
                    'Email address': formData.email,
                    'Contact Number': formattedPhone,
                    'Birthday': formattedBirthday
                },
                dataConsentOptIn: formData.marketingConsent
            };

            const response = await fetch('https://api.loopyloyalty.com/v1/enrol/1rmMhxhNM13OIXfFWJOxKU', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (response.ok) {
                const data = await response.json();
                setSubmitStatus('success');
                setCardUrl(data.url || null);
                setFormData({ name: '', phone: '', birthday: '', email: '', termsAccepted: false, marketingConsent: false });
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="loyalty" className="py-20 md:py-32 bg-squared-white dark:bg-squared-black relative overflow-hidden">
            {/* Background Grid - Hero Style */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]"
                style={{
                    backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px),
                           linear-gradient(to bottom, #000 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            ></div>
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* Card Preview Side (Left/Right depending on Lang) */}
                    <div className={`lg:col-span-5 ${language === 'ar' ? 'lg:order-2' : ''}`}>
                        <div className="relative group perspective">
                            <div className="w-full aspect-[1.586] bg-squared-black dark:bg-squared-white rounded-xl shadow-2xl relative overflow-hidden transform transition-transform duration-700 hover:rotate-y-12 preserve-3d">
                                {/* Card Design - Technical & Sharp */}
                                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                                    <div className="flex justify-between items-start">
                                        <div className="text-2xl font-bold text-squared-white dark:text-squared-black tracking-tighter">SQUARED</div>
                                        <div className="w-12 h-12 border border-squared-cyan/50 rounded-full flex items-center justify-center">
                                            <div className="w-8 h-8 bg-squared-cyan/20 rounded-full animate-pulse"></div>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="flex justify-between items-end font-mono text-xs text-squared-gray-400 dark:text-squared-gray-600 uppercase">
                                            <div>
                                                <div className="mb-1">Member Name</div>
                                                <div className="text-squared-white dark:text-squared-black text-sm tracking-widest">{formData.name || 'YOUR NAME'}</div>
                                            </div>
                                            <div>0000 0000 0000</div>
                                        </div>
                                    </div>
                                    {/* Background Graphic */}
                                    <div className="absolute -bottom-24 -right-24 w-64 h-64 border-[20px] border-squared-cyan/10 rounded-full"></div>
                                    <div className="absolute top-0 left-0 w-full h-full bg-noise opacity-10 pointer-events-none"></div>
                                </div>
                            </div>

                            {/* Decorative Elements behind card */}
                            <div className="absolute -inset-4 border border-squared-gray-200 dark:border-squared-gray-800 rounded-xl -z-10 bg-squared-white dark:bg-squared-black/50"></div>
                        </div>
                    </div>

                    {/* Form Side */}
                    <div className={`lg:col-span-7 ${language === 'ar' ? 'lg:order-1' : ''}`}>
                        {submitStatus === 'success' ? (
                            <div className="text-center py-10 bg-white dark:bg-squared-black border border-squared-gray-200 dark:border-squared-gray-800 p-8 rounded-none">
                                <CheckCircle className="w-16 h-16 text-squared-cyan mx-auto mb-6" />
                                <h3 className={`text-2xl font-sans font-bold text-squared-black dark:text-squared-white mb-4 ${language === 'ar' ? 'font-arabic' : ''}`}>
                                    {language === 'ar' ? 'تم التسجيل بنجاح!' : 'Successfully Enrolled!'}
                                </h3>
                                {cardUrl && (
                                    <InteractiveHoverButton 
                                        text={language === 'ar' ? 'إضافة إلى المحفظة' : 'Add to Wallet'}
                                        onClick={() => window.open(cardUrl, '_blank')}
                                        variant="dark"
                                    />
                                )}
                                <InteractiveHoverButton
                                    onClick={() => setSubmitStatus('idle')}
                                    text={language === 'ar' ? 'تسجيل عضو آخر' : 'Register another member'}
                                    variant={isDarkMode ? 'dark' : 'light'}
                                />
                            </div>
                        ) : (
                            <>
                                <div className="mb-12">
                                    <div className={`flex items-center gap-3 mb-4 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
                                        <div className="w-2 h-2 bg-squared-cyan"></div>
                                        <span className={`text-xs font-bold tracking-widest uppercase text-squared-cyan ${language === 'ar' ? 'font-arabic' : 'font-mono'}`}>
                                            {t.loyalty.eyebrow}
                                        </span>
                                    </div>
                                    <h2 className={`text-4xl md:text-5xl font-sans font-bold text-squared-black dark:text-squared-white mb-6 ${language === 'ar' ? 'font-arabic' : ''}`}>
                                        {t.loyalty.title}
                                    </h2>
                                    <p className={`text-lg text-squared-gray-600 dark:text-squared-gray-400 max-w-lg ${language === 'ar' ? 'font-arabic' : ''}`}>
                                        {t.loyalty.desc}
                                    </p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-6 max-w-lg">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="group">
                                            <label className={`block text-xs font-mono text-squared-gray-500 uppercase mb-2 ${language === 'ar' ? 'text-right' : ''}`}>
                                                {language === 'ar' ? 'الاسم' : 'Name'}
                                            </label>
                                            <input
                                                type="text"
                                                value={formData.name}
                                                required
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                className={`w-full bg-transparent border-b border-squared-gray-300 dark:border-squared-gray-700 py-3 px-2 text-lg text-squared-black dark:text-squared-white focus:outline-none focus:border-squared-cyan transition-colors ${language === 'ar' ? 'text-right' : ''}`}
                                            />
                                        </div>
                                        <div className="group">
                                            <label className={`block text-xs font-mono text-squared-gray-500 uppercase mb-2 ${language === 'ar' ? 'text-right' : ''}`}>
                                                {language === 'ar' ? 'رقم الهاتف' : 'Phone'}
                                            </label>
                                            <input
                                                type="tel"
                                                value={formData.phone}
                                                required
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                className={`w-full bg-transparent border-b border-squared-gray-300 dark:border-squared-gray-700 py-3 px-2 text-lg text-squared-black dark:text-squared-white focus:outline-none focus:border-squared-cyan transition-colors ${language === 'ar' ? 'text-right' : ''}`}
                                                placeholder="+966"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="group">
                                            <label className={`block text-xs font-mono text-squared-gray-500 uppercase mb-2 ${language === 'ar' ? 'text-right' : ''}`}>
                                                {language === 'ar' ? 'تاريخ الميلاد' : 'Birthday'}
                                            </label>
                                            <input
                                                type="date"
                                                value={formData.birthday}
                                                required
                                                onChange={(e) => setFormData({ ...formData, birthday: e.target.value })}
                                                className={`w-full bg-transparent border-b border-squared-gray-300 dark:border-squared-gray-700 py-3 px-2 text-lg text-squared-black dark:text-squared-white focus:outline-none focus:border-squared-cyan transition-colors ${language === 'ar' ? 'text-right' : ''}`}
                                            />
                                        </div>
                                        <div className="group">
                                            <label className={`block text-xs font-mono text-squared-gray-500 uppercase mb-2 ${language === 'ar' ? 'text-right' : ''}`}>
                                                {language === 'ar' ? 'البريد الإلكتروني' : 'Email'}
                                            </label>
                                            <input
                                                type="email"
                                                value={formData.email}
                                                required
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                className={`w-full bg-transparent border-b border-squared-gray-300 dark:border-squared-gray-700 py-3 px-2 text-lg text-squared-black dark:text-squared-white focus:outline-none focus:border-squared-cyan transition-colors ${language === 'ar' ? 'text-right' : ''}`}
                                            />
                                        </div>
                                    </div>

                                    {/* Terms & Marketing */}
                                    <div className="space-y-4 pt-2">
                                        <div className={`flex items-start gap-3 ${language === 'ar' ? 'flex-row-reverse text-right' : ''}`}>
                                            <input
                                                type="checkbox"
                                                id="terms"
                                                required
                                                checked={formData.termsAccepted}
                                                onChange={(e) => setFormData({ ...formData, termsAccepted: e.target.checked })}
                                                className="mt-1.5 w-4 h-4 rounded-none border border-squared-gray-400 text-squared-cyan focus:ring-squared-cyan"
                                            />
                                            <label htmlFor="terms" className="text-sm text-squared-gray-600 dark:text-squared-gray-400">
                                                {language === 'ar' ? 'أوافق على الشروط والأحكام' : 'I agree to the terms and conditions'} *
                                            </label>
                                        </div>
                                        <div className={`flex items-start gap-3 ${language === 'ar' ? 'flex-row-reverse text-right' : ''}`}>
                                            <input
                                                type="checkbox"
                                                id="marketing"
                                                checked={formData.marketingConsent}
                                                onChange={(e) => setFormData({ ...formData, marketingConsent: e.target.checked })}
                                                className="mt-1.5 w-4 h-4 rounded-none border border-squared-gray-400 text-squared-cyan focus:ring-squared-cyan"
                                            />
                                            <label htmlFor="marketing" className="text-sm text-squared-gray-600 dark:text-squared-gray-400">
                                                {language === 'ar' ? 'أرغب في تلقي العروض والتحديثات' : 'I want to receive offers and updates'}
                                            </label>
                                        </div>
                                    </div>

                                    {submitStatus === 'error' && (
                                        <div className="bg-red-50 text-red-600 p-4 border-l-4 border-red-500 text-sm">
                                            {language === 'ar' ? 'حدث خطأ. يرجى المحاولة مرة أخرى.' : 'An error occurred. Please try again.'}
                                        </div>
                                    )}

                                    <div className="pt-6">
                                        <InteractiveHoverButton
                                            type="submit"
                                            disabled={isSubmitting}
                                            text={isSubmitting ? undefined : t.loyalty.cta}
                                            variant={isDarkMode ? 'dark' : 'light'}
                                        >
                                            {isSubmitting && <Loader className="animate-spin" />}
                                        </InteractiveHoverButton>
                                    </div>
                                </form>
                            </>
                        )}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default LoyaltySection;
