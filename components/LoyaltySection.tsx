import React, { useState } from 'react';
import { Gift, CheckCircle, Loader } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import Logo from './Logo';

const LoyaltySection: React.FC = () => {
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

    // Helper function to format phone number with country code
    const formatPhoneNumber = (phone: string): string => {
        // Remove all non-digit characters
        let cleaned = phone.replace(/\D/g, '');

        // If starts with 0, remove it (Saudi numbers start with 05...)
        if (cleaned.startsWith('0')) {
            cleaned = cleaned.substring(1);
        }

        // Add Saudi country code if not present
        if (!cleaned.startsWith('966')) {
            cleaned = '966' + cleaned;
        }

        // Add + prefix
        return '+' + cleaned;
    };

    // Helper function to format birthday to ISO8601 with timezone
    const formatBirthday = (dateString: string): string => {
        // dateString is in format YYYY-MM-DD from the date input
        // Convert to ISO8601 with timezone: YYYY-MM-DDT00:00:00+03:00 (Saudi Arabia timezone)
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
            // Format phone number with country code
            const formattedPhone = formatPhoneNumber(formData.phone);

            // Format birthday to ISO8601 with timezone
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

            console.log('Sending enrollment request:', payload);

            const response = await fetch('https://api.loopyloyalty.com/v1/enrol/1rmMhxhNM13OIXfFWJOxKU', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload)
            });

            console.log('Response status:', response.status);
            console.log('Response headers:', response.headers);

            const responseText = await response.text();
            console.log('Response body:', responseText);

            if (response.ok) {
                const data = JSON.parse(responseText);
                setSubmitStatus('success');
                setCardUrl(data.url || null);
                // Reset form
                setFormData({
                    name: '',
                    phone: '',
                    birthday: '',
                    email: '',
                    termsAccepted: false,
                    marketingConsent: false
                });
            } else {
                console.error('API Error Response:', responseText);
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error('Enrollment error:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="loyalty" className="py-8 md:py-12 relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-squared-cyan/5 via-transparent to-squared-gold/5 pointer-events-none" />
            <div className="absolute top-20 right-20 w-96 h-96 bg-squared-cyan/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 md:px-12 relative z-10 flex justify-center">
                <div className="glass p-8 md:p-16 rounded-[2.5rem] md:rounded-[4rem] max-w-7xl w-full border border-white/30 dark:border-white/10 shadow-2xl relative overflow-hidden group backdrop-blur-md transition-colors duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>

                    {/* Geometric Accents - Main Bubble */}
                    <div className="absolute top-12 right-12 opacity-15 pointer-events-none group-hover:opacity-30 transition-all duration-700 -rotate-12">
                        <div className="relative w-32 h-32">
                            <div className="absolute inset-0 border-2 border-squared-navy dark:border-white/20 rounded-sm"></div>
                            <div className="absolute inset-6 border-2 border-squared-cyan/60 rounded-sm"></div>
                        </div>
                    </div>
                    <div className="absolute bottom-16 left-12 opacity-15 pointer-events-none group-hover:opacity-30 transition-all duration-700 rotate-12">
                        <div className="w-40 h-20 overflow-hidden">
                            <div className="w-40 h-40 border-2 border-squared-navy dark:border-white/20 rounded-full"></div>
                        </div>
                    </div>
                    <div className="absolute top-1/4 left-8 opacity-10 pointer-events-none group-hover:opacity-25 transition-all duration-700">
                        <div className="w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[35px] border-b-squared-cyan"></div>
                    </div>
                    <div className="absolute bottom-1/3 right-10 opacity-10 pointer-events-none group-hover:opacity-25 transition-all duration-700">
                        <div className="w-16 h-16 border-2 border-squared-cyan/40 rotate-45"></div>
                    </div>

                    <div className="relative z-10">
                        {/* Header */}
                        <div className="text-center mb-8 md:mb-10">
                            <span className={`inline-block py-1 px-6 border-b-2 border-squared-cyan/30 text-xs md:text-sm font-black tracking-[0.4em] text-squared-cyan uppercase mb-6 ${language === 'ar' ? 'font-arabic tracking-normal' : ''}`}>
                                {t.loyalty.eyebrow}
                            </span>
                            <h2 className={`text-5xl md:text-7xl font-serif text-squared-brown-dark dark:text-white leading-[0.9] font-black tracking-tight transition-colors duration-500 ${language === 'ar' ? 'font-arabic font-bold' : ''}`}>
                                {t.loyalty.title} <span className="text-squared-cyan">{t.loyalty.title_highlight}</span>
                            </h2>
                            <p className={`text-base md:text-2xl text-squared-brown-light dark:text-white/70 max-w-3xl mx-auto mt-4 md:mt-6 font-medium transition-colors duration-500 ${language === 'ar' ? 'font-arabic' : ''}`}>
                                {t.loyalty.description}
                            </p>
                        </div>

                        {/* Main Content Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-start mt-2 md:mt-4">
                            {/* Left: Card Visual */}
                            <div className="relative p-2 h-full flex flex-col justify-center">
                                <div className="text-center px-4 md:px-8 pb-4 md:pb-8 pt-0">
                                    {/* Gift Icon */}
                                    <div className="inline-flex items-center justify-center w-24 h-24 md:w-32 md:h-32 rounded-3xl bg-gradient-to-br from-squared-cyan to-squared-cyan-dark shadow-2xl-lg mb-8 shadow-[0_20px_40px_rgba(0,194,224,0.3)]">
                                        <Gift className="w-12 h-12 md:w-16 md:h-16 text-white" strokeWidth={1.5} />
                                    </div>

                                    <h3 className={`text-3xl md:text-5xl font-serif font-black text-squared-brown-dark dark:text-white mb-4 transition-colors duration-500 ${language === 'ar' ? 'font-arabic font-bold' : ''}`}>
                                        {language === 'ar' ? 'مشروب مجاني' : 'Free Drink'}
                                    </h3>
                                    <p className={`text-squared-brown-light dark:text-white/60 mb-10 text-xl font-medium transition-colors duration-500 ${language === 'ar' ? 'font-arabic' : ''}`}>
                                        {language === 'ar' ? 'لكل 8 مشروبات مشتراة' : 'Every 8 drinks purchased'}
                                    </p>

                                    {/* Benefits */}
                                    <div className="grid grid-cols-1 gap-4 text-left">
                                        {[
                                            { num: '1', text: language === 'ar' ? 'سجل مجاناً' : 'Sign Up Free' },
                                            { num: '2', text: language === 'ar' ? 'اجمع النقاط' : 'Collect Points' },
                                            { num: '3', text: language === 'ar' ? 'احصل على مكافآت' : 'Get Rewards' }
                                        ].map((item) => (
                                            <div key={item.num} className="flex items-center gap-6 glass p-5 rounded-2xl border border-white/20 dark:border-white/10 hover:bg-white/30 dark:hover:bg-white/5 transition-colors duration-500">
                                                <div className="text-3xl font-black text-squared-cyan w-10">{item.num}</div>
                                                <p className={`text-base md:text-lg font-bold text-squared-brown dark:text-white/90 ${language === 'ar' ? 'font-arabic' : ''}`}>{item.text}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Right: Signup Form */}
                            <div className="relative p-2">
                                <div className="px-4 md:px-8 pb-4 md:pb-8 pt-0 h-full">
                                    <div className="relative z-10">
                                        {submitStatus === 'success' ? (
                                            <div className="text-center py-10">
                                                <CheckCircle className="w-20 h-20 text-squared-cyan mx-auto mb-6" />
                                                <h3 className={`text-2xl font-serif font-black text-squared-brown-dark dark:text-white mb-4 transition-colors duration-500 ${language === 'ar' ? 'font-arabic font-bold' : ''}`}>
                                                    {language === 'ar' ? 'تم التسجيل بنجاح!' : 'Successfully Enrolled!'}
                                                </h3>
                                                <p className={`text-squared-brown-light dark:text-white/60 mb-8 text-lg transition-colors duration-500 ${language === 'ar' ? 'font-arabic' : ''}`}>
                                                    {language === 'ar' ? 'أضف بطاقتك إلى محفظتك الآن' : 'Add your card to your wallet now'}
                                                </p>
                                                {cardUrl && (
                                                    <div className="w-full mb-8 space-y-8">
                                                        {/* Unified Visual Card Preview for all devices */}
                                                        <div className="relative w-full aspect-[1.6/1] rounded-[2rem] md:rounded-[2.5rem] bg-gradient-to-br from-squared-navy to-squared-brown-dark p-8 md:p-12 border border-white/10 shadow-2xl flex flex-col justify-between overflow-hidden group/card shadow-[0_30px_60px_rgba(0,0,0,0.4)] transition-transform duration-700 hover:scale-[1.02]">
                                                            <div className="absolute top-0 right-0 w-48 h-48 bg-squared-cyan/20 blur-[80px] rounded-full translate-x-1/4 -translate-y-1/4"></div>
                                                            <div className="absolute bottom-0 left-0 w-40 h-40 bg-squared-gold/10 blur-[60px] rounded-full -translate-x-1/4 translate-y-1/4"></div>

                                                            <div className="relative z-10 flex justify-between items-start">
                                                                <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-inner">
                                                                    <Gift className="w-8 h-8 text-squared-cyan" />
                                                                </div>
                                                                <div className="text-right">
                                                                    <div className="text-[12px] md:text-[14px] font-black uppercase tracking-[0.3em] text-white/50 mb-1">Squared Coffee</div>
                                                                    <div className="text-sm md:text-base font-bold text-squared-cyan">{language === 'ar' ? 'عضو الولاء' : 'Loyalty Member'}</div>
                                                                </div>
                                                            </div>

                                                            <div className="relative z-10 py-6">
                                                                <div className="h-2 w-16 bg-squared-gold/60 rounded-full mb-3 shadow-[0_0_15px_rgba(212,175,55,0.4)]"></div>
                                                                <div className="h-2 w-32 bg-white/20 rounded-full"></div>
                                                            </div>

                                                            <div className="relative z-10 flex items-end justify-between">
                                                                <div>
                                                                    <div className="text-[10px] uppercase tracking-widest text-white/30 mb-2 font-black">Member ID</div>
                                                                    <div className="text-lg md:text-xl font-black text-white tracking-[0.3em] uppercase drop-shadow-lg">★★★★ ★★★★</div>
                                                                </div>
                                                                <div className="relative group/logo">
                                                                    <div className="absolute inset-0 bg-squared-cyan/20 blur-xl rounded-full scale-150 opacity-0 group-hover/logo:opacity-100 transition-opacity duration-700"></div>
                                                                    <div className="relative w-14 h-14 md:w-20 md:h-20 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/20 p-2 md:p-3 shadow-2xl flex items-center justify-center transition-transform duration-500 hover:rotate-3">
                                                                        <Logo size="sm" variant="dark" className="scale-125 md:scale-150" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        {/* Primary CTA Button for all devices */}
                                                        <a
                                                            href={cardUrl}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className={`flex items-center justify-center gap-4 w-full py-6 px-10 rounded-full bg-squared-cyan text-white font-black uppercase tracking-[0.15em] shadow-[0_25px_50px_rgba(0,194,224,0.35)] hover:shadow-[0_30px_60px_rgba(0,194,224,0.5)] transition-all duration-500 hover:-translate-y-1.5 active:scale-95 text-lg ${language === 'ar' ? 'font-arabic tracking-normal flex-row-reverse' : ''}`}
                                                        >
                                                            <Gift className="w-7 h-7" />
                                                            <span>{language === 'ar' ? 'إضافة إلى المحفظة / عرض البطاقة' : 'Add to Wallet / View Card'}</span>
                                                            <svg className="w-6 h-6 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                            </svg>
                                                        </a>
                                                    </div>
                                                )}
                                                <button
                                                    onClick={() => setSubmitStatus('idle')}
                                                    className={`text-base font-bold text-squared-brown-light dark:text-white/40 hover:text-squared-cyan transition-colors ${language === 'ar' ? 'font-arabic' : ''}`}
                                                >
                                                    {language === 'ar' ? 'تسجيل عضو آخر' : 'Register another member'}
                                                </button>
                                            </div>
                                        ) : (
                                            <form onSubmit={handleSubmit} className="space-y-6">
                                                <h3 className={`text-2xl md:text-3xl font-serif font-black text-squared-brown-dark dark:text-white mb-8 text-center transition-colors duration-500 ${language === 'ar' ? 'font-arabic font-bold' : ''}`}>
                                                    {t.loyalty.signup_below}
                                                </h3>

                                                {/* Name */}
                                                <div>
                                                    <label className={`block text-sm font-black text-squared-brown-dark/70 dark:text-white/70 mb-2 uppercase tracking-widest transition-colors duration-500 ${language === 'ar' ? 'font-arabic text-right' : ''}`}>
                                                        {language === 'ar' ? 'الاسم' : 'Name'} *
                                                    </label>
                                                    <input
                                                        type="text"
                                                        required
                                                        value={formData.name}
                                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                        className={`w-full px-6 py-4 rounded-2xl border border-squared-cyan/20 dark:border-white/10 focus:border-squared-cyan focus:ring-4 focus:ring-squared-cyan/10 outline-none transition-all bg-white/40 dark:bg-white/5 dark:text-white font-medium ${language === 'ar' ? 'font-arabic text-right' : ''}`}
                                                        placeholder={language === 'ar' ? 'أدخل اسمك' : 'Enter your name'}
                                                    />
                                                </div>

                                                {/* Phone */}
                                                <div>
                                                    <label className={`block text-sm font-black text-squared-brown-dark/70 dark:text-white/70 mb-2 uppercase tracking-widest transition-colors duration-500 ${language === 'ar' ? 'font-arabic text-right' : ''}`}>
                                                        {language === 'ar' ? 'رقم الهاتف' : 'Phone Number'} *
                                                    </label>
                                                    <div className="relative">
                                                        <span className="absolute left-6 top-1/2 -translate-y-1/2 text-squared-brown-light dark:text-white/40 font-bold">
                                                            +966
                                                        </span>
                                                        <input
                                                            type="tel"
                                                            required
                                                            value={formData.phone}
                                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                            className={`w-full pl-20 pr-6 py-4 rounded-2xl border border-squared-cyan/20 dark:border-white/10 focus:border-squared-cyan focus:ring-4 focus:ring-squared-cyan/10 outline-none transition-all bg-white/40 dark:bg-white/5 dark:text-white font-bold ${language === 'ar' ? 'font-arabic' : ''}`}
                                                            placeholder={language === 'ar' ? '5XXXXXXXX' : '5XXXXXXXX'}
                                                            pattern="[0-9]{9,10}"
                                                        />
                                                    </div>
                                                    <p className={`text-xs text-squared-brown-light dark:text-white/30 mt-2 font-medium transition-colors duration-500 ${language === 'ar' ? 'font-arabic text-right' : ''}`}>
                                                        {language === 'ar' ? 'أدخل رقمك بدون الصفر (مثال: 512345678)' : 'Enter without leading 0 (e.g., 512345678)'}
                                                    </p>
                                                </div>

                                                {/* Birthday */}
                                                <div>
                                                    <label className={`block text-sm font-black text-squared-brown-dark/70 dark:text-white/70 mb-2 uppercase tracking-widest transition-colors duration-500 ${language === 'ar' ? 'font-arabic text-right' : ''}`}>
                                                        {language === 'ar' ? 'تاريخ الميلاد' : 'Birthday'} *
                                                    </label>
                                                    <div className="relative group/date">
                                                        <input
                                                            type="date"
                                                            required
                                                            value={formData.birthday}
                                                            onChange={(e) => setFormData({ ...formData, birthday: e.target.value })}
                                                            className="absolute inset-0 w-full h-full opacity-0 z-20 cursor-pointer peer"
                                                        />
                                                        <div className={`w-full px-6 py-4 rounded-2xl border border-squared-cyan/20 dark:border-white/10 peer-focus:border-squared-cyan peer-focus:ring-4 peer-focus:ring-squared-cyan/10 transition-all bg-white/40 dark:bg-white/5 dark:text-white font-medium flex items-center min-h-[58px] ${language === 'ar' ? 'font-arabic flex-row-reverse' : ''}`}>
                                                            {formData.birthday ? (
                                                                <span className="font-bold">{formData.birthday.split('-').reverse().join(' / ')}</span>
                                                            ) : (
                                                                <span className="text-squared-brown-dark/30 dark:text-white/30 uppercase tracking-[0.2em] text-[10px] font-black">
                                                                    {language === 'ar' ? 'اليوم / الشهر / السنة' : 'DD / MM / YYYY'}
                                                                </span>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Email */}
                                                <div>
                                                    <label className={`block text-sm font-black text-squared-brown-dark/70 dark:text-white/70 mb-2 uppercase tracking-widest transition-colors duration-500 ${language === 'ar' ? 'font-arabic text-right' : ''}`}>
                                                        {language === 'ar' ? 'البريد الإلكتروني' : 'Email'} *
                                                    </label>
                                                    <input
                                                        type="email"
                                                        required
                                                        value={formData.email}
                                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                        className={`w-full px-6 py-4 rounded-2xl border border-squared-cyan/20 dark:border-white/10 focus:border-squared-cyan focus:ring-4 focus:ring-squared-cyan/10 outline-none transition-all bg-white/40 dark:bg-white/5 dark:text-white font-medium ${language === 'ar' ? 'font-arabic text-right' : ''}`}
                                                        placeholder={language === 'ar' ? 'example@email.com' : 'example@email.com'}
                                                    />
                                                </div>

                                                {/* Terms */}
                                                <div className="flex items-start gap-4">
                                                    <input
                                                        type="checkbox"
                                                        id="terms"
                                                        required
                                                        checked={formData.termsAccepted}
                                                        onChange={(e) => setFormData({ ...formData, termsAccepted: e.target.checked })}
                                                        className="mt-1.5 w-6 h-6 rounded-lg border-squared-cyan/20 dark:border-white/10 text-squared-cyan dark:bg-white/5 focus:ring-squared-cyan"
                                                    />
                                                    <label htmlFor="terms" className={`text-base text-squared-brown-light dark:text-white/60 font-medium transition-colors duration-500 ${language === 'ar' ? 'font-arabic text-right' : ''}`}>
                                                        {language === 'ar' ? 'أوافق على الشروط والأحكام' : 'I agree to the terms and conditions'} *
                                                    </label>
                                                </div>

                                                {/* Marketing */}
                                                <div className="flex items-start gap-4">
                                                    <input
                                                        type="checkbox"
                                                        id="marketing"
                                                        checked={formData.marketingConsent}
                                                        onChange={(e) => setFormData({ ...formData, marketingConsent: e.target.checked })}
                                                        className="mt-1.5 w-6 h-6 rounded-lg border-squared-cyan/20 dark:border-white/10 text-squared-cyan dark:bg-white/5 focus:ring-squared-cyan"
                                                    />
                                                    <label htmlFor="marketing" className={`text-base text-squared-brown-light dark:text-white/60 font-medium transition-colors duration-500 ${language === 'ar' ? 'font-arabic text-right' : ''}`}>
                                                        {language === 'ar' ? 'أرغب في تلقي العروض والتحديثات' : 'I want to receive offers and updates'}
                                                    </label>
                                                </div>

                                                {submitStatus === 'error' && (
                                                    <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 px-6 py-4 rounded-2xl text-base font-medium transition-colors duration-500">
                                                        {language === 'ar' ? 'حدث خطأ. يرجى المحاولة مرة أخرى.' : 'An error occurred. Please try again.'}
                                                    </div>
                                                )}

                                                {/* Submit */}
                                                <button
                                                    type="submit"
                                                    disabled={isSubmitting}
                                                    className={`w-full cursor-pointer bg-squared-cyan text-white px-8 py-5 rounded-full text-base font-black uppercase tracking-[0.2em] shadow-[0_20px_40px_rgba(0,194,224,0.3)] hover:shadow-[0_25px_50px_rgba(0,194,224,0.5)] transition-all duration-500 hover:-translate-y-1 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-4 ${language === 'ar' ? 'font-arabic tracking-normal' : ''}`}
                                                >
                                                    {isSubmitting ? (
                                                        <>
                                                            <Loader className="w-6 h-6 animate-spin" />
                                                            {language === 'ar' ? 'جاري التسجيل...' : 'Signing up...'}
                                                        </>
                                                    ) : (
                                                        t.loyalty.cta
                                                    )}
                                                </button>
                                            </form>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LoyaltySection;
