import React, { useState } from 'react';
import { Gift, CheckCircle, Loader } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

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
        <section id="loyalty" className="py-12 md:py-24 relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-squared-cyan/5 via-transparent to-squared-gold/5 pointer-events-none" />
            <div className="absolute top-20 right-20 w-96 h-96 bg-squared-cyan/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 md:px-12 relative z-10 flex justify-center">
                <div className="glass p-8 md:p-16 rounded-[2.5rem] md:rounded-[4rem] max-w-7xl w-full border border-white/30 shadow-2xl relative overflow-hidden group backdrop-blur-md">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>

                    {/* Geometric Accents - Main Bubble */}
                    <div className="absolute top-12 right-12 opacity-15 pointer-events-none group-hover:opacity-30 transition-opacity duration-700 -rotate-12">
                        <div className="relative w-32 h-32">
                            <div className="absolute inset-0 border-2 border-squared-navy rounded-sm"></div>
                            <div className="absolute inset-6 border-2 border-squared-cyan/60 rounded-sm"></div>
                        </div>
                    </div>
                    <div className="absolute bottom-16 left-12 opacity-15 pointer-events-none group-hover:opacity-30 transition-opacity duration-700 rotate-12">
                        <div className="w-40 h-20 overflow-hidden">
                            <div className="w-40 h-40 border-2 border-squared-navy rounded-full"></div>
                        </div>
                    </div>
                    <div className="absolute top-1/4 left-8 opacity-10 pointer-events-none group-hover:opacity-25 transition-opacity duration-700">
                        <div className="w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[35px] border-b-squared-cyan"></div>
                    </div>
                    <div className="absolute bottom-1/3 right-10 opacity-10 pointer-events-none group-hover:opacity-25 transition-opacity duration-700">
                        <div className="w-16 h-16 border-2 border-squared-cyan/40 rotate-45"></div>
                    </div>

                    <div className="relative z-10">
                        {/* Header */}
                        <div className="text-center mb-12 md:mb-20">
                            <span className={`inline-block py-1 px-6 border-b-2 border-squared-cyan/30 text-xs md:text-sm font-black tracking-[0.4em] text-squared-cyan uppercase mb-6 ${language === 'ar' ? 'font-arabic tracking-normal' : ''}`}>
                                {t.loyalty.eyebrow}
                            </span>
                            <h2 className={`text-5xl md:text-7xl font-serif text-squared-gray-900 leading-[0.9] font-black tracking-tight ${language === 'ar' ? 'font-arabic font-bold' : ''}`}>
                                {t.loyalty.title} <span className="text-squared-cyan">{t.loyalty.title_highlight}</span>
                            </h2>
                            <p className={`text-base md:text-2xl text-squared-gray-600 max-w-3xl mx-auto mt-8 font-medium ${language === 'ar' ? 'font-arabic' : ''}`}>
                                {t.loyalty.description}
                            </p>
                        </div>

                        {/* Main Content Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-start">
                            {/* Left: Card Visual */}
                            <div className="relative p-2 h-full flex flex-col justify-center">
                                <div className="text-center p-4 md:p-8">
                                    {/* Gift Icon */}
                                    <div className="inline-flex items-center justify-center w-24 h-24 md:w-32 md:h-32 rounded-3xl bg-gradient-to-br from-squared-cyan to-squared-cyan-dark shadow-warm-lg mb-8">
                                        <Gift className="w-12 h-12 md:w-16 md:h-16 text-white" strokeWidth={1.5} />
                                    </div>

                                    <h3 className={`text-3xl md:text-5xl font-serif font-black text-squared-gray-900 mb-4 ${language === 'ar' ? 'font-arabic font-bold' : ''}`}>
                                        {language === 'ar' ? 'مشروب مجاني' : 'Free Drink'}
                                    </h3>
                                    <p className={`text-squared-gray-600 mb-10 text-xl font-medium ${language === 'ar' ? 'font-arabic' : ''}`}>
                                        {language === 'ar' ? 'لكل 8 مشروبات مشتراة' : 'Every 8 drinks purchased'}
                                    </p>

                                    {/* Benefits */}
                                    <div className="grid grid-cols-1 gap-4 text-left">
                                        {[
                                            { num: '1', text: language === 'ar' ? 'سجل مجاناً' : 'Sign Up Free' },
                                            { num: '2', text: language === 'ar' ? 'اجمع النقاط' : 'Collect Points' },
                                            { num: '3', text: language === 'ar' ? 'احصل على مكافآت' : 'Get Rewards' }
                                        ].map((item) => (
                                            <div key={item.num} className="flex items-center gap-6 glass p-5 rounded-2xl border border-white/20 hover:bg-white/30 transition-colors duration-500">
                                                <div className="text-3xl font-black text-squared-cyan w-10">{item.num}</div>
                                                <p className={`text-base md:text-lg font-bold text-squared-gray-800 ${language === 'ar' ? 'font-arabic' : ''}`}>{item.text}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Right: Signup Form */}
                            <div className="relative p-2">
                                <div className="p-4 md:p-8 h-full">
                                    <div className="relative z-10">
                                        {submitStatus === 'success' ? (
                                            <div className="text-center py-10">
                                                <CheckCircle className="w-20 h-20 text-squared-cyan mx-auto mb-6" />
                                                <h3 className={`text-2xl font-serif font-black text-squared-gray-900 mb-4 ${language === 'ar' ? 'font-arabic font-bold' : ''}`}>
                                                    {language === 'ar' ? 'تم التسجيل بنجاح!' : 'Successfully Enrolled!'}
                                                </h3>
                                                <p className={`text-squared-gray-600 mb-8 text-lg ${language === 'ar' ? 'font-arabic' : ''}`}>
                                                    {language === 'ar' ? 'أضف بطاقتك إلى محفظتك الآن' : 'Add your card to your wallet now'}
                                                </p>
                                                {cardUrl && (
                                                    <div className="w-full mb-8">
                                                        <iframe
                                                            src={cardUrl}
                                                            className="w-full h-[550px] rounded-2xl border-2 border-squared-cyan/20 bg-white shadow-inner"
                                                            title="Loyalty Card"
                                                            sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                                                        />
                                                    </div>
                                                )}
                                                <button
                                                    onClick={() => setSubmitStatus('idle')}
                                                    className={`text-base font-bold text-squared-gray-500 hover:text-squared-cyan transition-colors ${language === 'ar' ? 'font-arabic' : ''}`}
                                                >
                                                    {language === 'ar' ? 'تسجيل عضو آخر' : 'Register another member'}
                                                </button>
                                            </div>
                                        ) : (
                                            <form onSubmit={handleSubmit} className="space-y-6">
                                                <h3 className={`text-2xl md:text-3xl font-serif font-black text-squared-gray-900 mb-8 text-center ${language === 'ar' ? 'font-arabic font-bold' : ''}`}>
                                                    {t.loyalty.signup_below}
                                                </h3>

                                                {/* Name */}
                                                <div>
                                                    <label className={`block text-sm font-black text-squared-gray-700 mb-2 uppercase tracking-widest ${language === 'ar' ? 'font-arabic text-right' : ''}`}>
                                                        {language === 'ar' ? 'الاسم' : 'Name'} *
                                                    </label>
                                                    <input
                                                        type="text"
                                                        required
                                                        value={formData.name}
                                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                        className={`w-full px-6 py-4 rounded-2xl border border-squared-cyan/20 focus:border-squared-cyan focus:ring-4 focus:ring-squared-cyan/10 outline-none transition-all bg-white/40 font-medium ${language === 'ar' ? 'font-arabic text-right' : ''}`}
                                                        placeholder={language === 'ar' ? 'أدخل اسمك' : 'Enter your name'}
                                                    />
                                                </div>

                                                {/* Phone */}
                                                <div>
                                                    <label className={`block text-sm font-black text-squared-gray-700 mb-2 uppercase tracking-widest ${language === 'ar' ? 'font-arabic text-right' : ''}`}>
                                                        {language === 'ar' ? 'رقم الهاتف' : 'Phone Number'} *
                                                    </label>
                                                    <div className="relative">
                                                        <span className="absolute left-6 top-1/2 -translate-y-1/2 text-squared-gray-500 font-bold">
                                                            +966
                                                        </span>
                                                        <input
                                                            type="tel"
                                                            required
                                                            value={formData.phone}
                                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                            className={`w-full pl-20 pr-6 py-4 rounded-2xl border border-squared-cyan/20 focus:border-squared-cyan focus:ring-4 focus:ring-squared-cyan/10 outline-none transition-all bg-white/40 font-bold ${language === 'ar' ? 'font-arabic' : ''}`}
                                                            placeholder={language === 'ar' ? '5XXXXXXXX' : '5XXXXXXXX'}
                                                            pattern="[0-9]{9,10}"
                                                        />
                                                    </div>
                                                    <p className={`text-xs text-squared-gray-500 mt-2 font-medium ${language === 'ar' ? 'font-arabic text-right' : ''}`}>
                                                        {language === 'ar' ? 'أدخل رقمك بدون الصفر (مثال: 512345678)' : 'Enter without leading 0 (e.g., 512345678)'}
                                                    </p>
                                                </div>

                                                {/* Birthday */}
                                                <div>
                                                    <label className={`block text-sm font-black text-squared-gray-700 mb-2 uppercase tracking-widest ${language === 'ar' ? 'font-arabic text-right' : ''}`}>
                                                        {language === 'ar' ? 'تاريخ الميلاد' : 'Birthday'} *
                                                    </label>
                                                    <input
                                                        type="date"
                                                        required
                                                        value={formData.birthday}
                                                        onChange={(e) => setFormData({ ...formData, birthday: e.target.value })}
                                                        className={`w-full px-6 py-4 rounded-2xl border border-squared-cyan/20 focus:border-squared-cyan focus:ring-4 focus:ring-squared-cyan/10 outline-none transition-all bg-white/40 font-medium ${language === 'ar' ? 'font-arabic text-right' : ''}`}
                                                    />
                                                </div>

                                                {/* Email */}
                                                <div>
                                                    <label className={`block text-sm font-black text-squared-gray-700 mb-2 uppercase tracking-widest ${language === 'ar' ? 'font-arabic text-right' : ''}`}>
                                                        {language === 'ar' ? 'البريد الإلكتروني' : 'Email'} *
                                                    </label>
                                                    <input
                                                        type="email"
                                                        required
                                                        value={formData.email}
                                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                        className={`w-full px-6 py-4 rounded-2xl border border-squared-cyan/20 focus:border-squared-cyan focus:ring-4 focus:ring-squared-cyan/10 outline-none transition-all bg-white/40 font-medium ${language === 'ar' ? 'font-arabic text-right' : ''}`}
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
                                                        className="mt-1.5 w-6 h-6 rounded-lg border-squared-cyan/20 text-squared-cyan focus:ring-squared-cyan"
                                                    />
                                                    <label htmlFor="terms" className={`text-base text-squared-gray-600 font-medium ${language === 'ar' ? 'font-arabic text-right' : ''}`}>
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
                                                        className="mt-1.5 w-6 h-6 rounded-lg border-squared-cyan/20 text-squared-cyan focus:ring-squared-cyan"
                                                    />
                                                    <label htmlFor="marketing" className={`text-base text-squared-gray-600 font-medium ${language === 'ar' ? 'font-arabic text-right' : ''}`}>
                                                        {language === 'ar' ? 'أرغب في تلقي العروض والتحديثات' : 'I want to receive offers and updates'}
                                                    </label>
                                                </div>

                                                {submitStatus === 'error' && (
                                                    <div className="bg-red-50 border border-red-200 text-red-600 px-6 py-4 rounded-2xl text-base font-medium">
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
