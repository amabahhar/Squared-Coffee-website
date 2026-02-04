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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.termsAccepted) {
            alert(language === 'ar' ? 'يرجى الموافقة على الشروط والأحكام' : 'Please accept the terms and conditions');
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            const response = await fetch('https://api.loopyloyalty.com/v1/enrol/1rmMhxhNM13OIXfFWJOxKU', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    campaignId: '1rmMhxhNM13OIXfFWJOxKU',
                    customerData: {
                        'Name': formData.name,
                        'Email address': formData.email,
                        'Contact Number': formData.phone,
                        'Birthday': formData.birthday
                    },
                    dataConsentOptIn: formData.marketingConsent
                })
            });

            if (response.ok) {
                const data = await response.json();
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

            <div className="container mx-auto px-4 md:px-12 relative z-10">
                {/* Header */}
                <div className="text-center mb-12 md:mb-16">
                    <span className={`inline-block py-1 px-6 border-b-2 border-squared-cyan/30 text-xs md:text-sm font-black tracking-[0.4em] text-squared-cyan uppercase mb-6 ${language === 'ar' ? 'font-arabic tracking-normal' : ''}`}>
                        {t.loyalty.eyebrow}
                    </span>
                    <h2 className={`text-4xl md:text-6xl font-serif text-squared-gray-900 leading-[0.9] font-black tracking-tight ${language === 'ar' ? 'font-arabic font-bold' : ''}`}>
                        {t.loyalty.title} <span className="text-squared-cyan">{t.loyalty.title_highlight}</span>
                    </h2>
                    <p className={`text-base md:text-xl text-squared-gray-600 max-w-2xl mx-auto mt-6 ${language === 'ar' ? 'font-arabic' : ''}`}>
                        {t.loyalty.description}
                    </p>
                </div>

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
                    {/* Left: Card Visual */}
                    <div className="glass-card p-8 md:p-12 rounded-[2.5rem] shadow-warm-lg border border-white/40 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-squared-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>

                        <div className="relative z-10 text-center">
                            {/* Gift Icon */}
                            <div className="inline-flex items-center justify-center w-24 h-24 md:w-32 md:h-32 rounded-3xl bg-gradient-to-br from-squared-cyan to-squared-cyan-dark shadow-warm-lg mb-6">
                                <Gift className="w-12 h-12 md:w-16 md:h-16 text-white" strokeWidth={1.5} />
                            </div>

                            <h3 className={`text-3xl md:text-4xl font-serif font-black text-squared-gray-900 mb-4 ${language === 'ar' ? 'font-arabic font-bold' : ''}`}>
                                {language === 'ar' ? 'مشروب مجاني' : 'Free Drink'}
                            </h3>
                            <p className={`text-squared-gray-600 mb-8 text-lg ${language === 'ar' ? 'font-arabic' : ''}`}>
                                {language === 'ar' ? 'لكل 8 مشروبات مشتراة' : 'Every 8 drinks purchased'}
                            </p>

                            {/* Benefits */}
                            <div className="space-y-4">
                                {[
                                    { num: '1', text: language === 'ar' ? 'سجل مجاناً' : 'Sign Up Free' },
                                    { num: '2', text: language === 'ar' ? 'اجمع النقاط' : 'Collect Points' },
                                    { num: '3', text: language === 'ar' ? 'احصل على مكافآت' : 'Get Rewards' }
                                ].map((item) => (
                                    <div key={item.num} className="flex items-center gap-4 glass p-4 rounded-xl border border-white/20">
                                        <div className="text-2xl font-black text-squared-cyan w-8">{item.num}</div>
                                        <p className={`text-sm text-squared-gray-600 ${language === 'ar' ? 'font-arabic' : ''}`}>{item.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right: Signup Form */}
                    <div className="glass-card p-8 md:p-12 rounded-[2.5rem] shadow-warm-lg border border-white/40 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-white/30 to-transparent pointer-events-none"></div>

                        <div className="relative z-10">
                            {submitStatus === 'success' ? (
                                <div className="text-center py-12">
                                    <CheckCircle className="w-20 h-20 text-squared-cyan mx-auto mb-6" />
                                    <h3 className={`text-2xl font-serif font-black text-squared-gray-900 mb-4 ${language === 'ar' ? 'font-arabic font-bold' : ''}`}>
                                        {language === 'ar' ? 'تم التسجيل بنجاح!' : 'Successfully Enrolled!'}
                                    </h3>
                                    <p className={`text-squared-gray-600 mb-6 ${language === 'ar' ? 'font-arabic' : ''}`}>
                                        {language === 'ar' ? 'شكراً لانضمامك إلى برنامج الولاء' : 'Thank you for joining our loyalty program'}
                                    </p>
                                    {cardUrl && (
                                        <a
                                            href={cardUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`inline-block cursor-pointer bg-squared-cyan text-white px-8 py-3 rounded-full text-sm font-black uppercase tracking-[0.2em] hover:bg-squared-cyan-dark transition-all duration-500 shadow-xl ${language === 'ar' ? 'font-arabic tracking-normal' : ''}`}
                                        >
                                            {language === 'ar' ? 'احصل على بطاقتك' : 'Get Your Card'}
                                        </a>
                                    )}
                                    <button
                                        onClick={() => setSubmitStatus('idle')}
                                        className={`block mx-auto mt-4 text-sm text-squared-gray-500 hover:text-squared-cyan ${language === 'ar' ? 'font-arabic' : ''}`}
                                    >
                                        {language === 'ar' ? 'تسجيل عضو آخر' : 'Register another member'}
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <h3 className={`text-xl md:text-2xl font-serif font-black text-squared-gray-900 mb-6 text-center ${language === 'ar' ? 'font-arabic font-bold' : ''}`}>
                                        {t.loyalty.signup_below}
                                    </h3>

                                    {/* Name */}
                                    <div>
                                        <label className={`block text-sm font-bold text-squared-gray-700 mb-2 ${language === 'ar' ? 'font-arabic text-right' : ''}`}>
                                            {language === 'ar' ? 'الاسم' : 'Name'} *
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className={`w-full px-4 py-3 rounded-xl border border-squared-cyan/20 focus:border-squared-cyan focus:ring-2 focus:ring-squared-cyan/20 outline-none transition-all ${language === 'ar' ? 'font-arabic text-right' : ''}`}
                                            placeholder={language === 'ar' ? 'أدخل اسمك' : 'Enter your name'}
                                        />
                                    </div>

                                    {/* Phone */}
                                    <div>
                                        <label className={`block text-sm font-bold text-squared-gray-700 mb-2 ${language === 'ar' ? 'font-arabic text-right' : ''}`}>
                                            {language === 'ar' ? 'رقم الهاتف' : 'Phone Number'} *
                                        </label>
                                        <input
                                            type="tel"
                                            required
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            className={`w-full px-4 py-3 rounded-xl border border-squared-cyan/20 focus:border-squared-cyan focus:ring-2 focus:ring-squared-cyan/20 outline-none transition-all ${language === 'ar' ? 'font-arabic text-right' : ''}`}
                                            placeholder={language === 'ar' ? '05XXXXXXXX' : '05XXXXXXXX'}
                                        />
                                    </div>

                                    {/* Birthday */}
                                    <div>
                                        <label className={`block text-sm font-bold text-squared-gray-700 mb-2 ${language === 'ar' ? 'font-arabic text-right' : ''}`}>
                                            {language === 'ar' ? 'تاريخ الميلاد' : 'Birthday'} *
                                        </label>
                                        <input
                                            type="date"
                                            required
                                            value={formData.birthday}
                                            onChange={(e) => setFormData({ ...formData, birthday: e.target.value })}
                                            className={`w-full px-4 py-3 rounded-xl border border-squared-cyan/20 focus:border-squared-cyan focus:ring-2 focus:ring-squared-cyan/20 outline-none transition-all ${language === 'ar' ? 'font-arabic text-right' : ''}`}
                                        />
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label className={`block text-sm font-bold text-squared-gray-700 mb-2 ${language === 'ar' ? 'font-arabic text-right' : ''}`}>
                                            {language === 'ar' ? 'البريد الإلكتروني' : 'Email'} *
                                        </label>
                                        <input
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className={`w-full px-4 py-3 rounded-xl border border-squared-cyan/20 focus:border-squared-cyan focus:ring-2 focus:ring-squared-cyan/20 outline-none transition-all ${language === 'ar' ? 'font-arabic text-right' : ''}`}
                                            placeholder={language === 'ar' ? 'example@email.com' : 'example@email.com'}
                                        />
                                    </div>

                                    {/* Terms */}
                                    <div className="flex items-start gap-3">
                                        <input
                                            type="checkbox"
                                            id="terms"
                                            required
                                            checked={formData.termsAccepted}
                                            onChange={(e) => setFormData({ ...formData, termsAccepted: e.target.checked })}
                                            className="mt-1 w-5 h-5 rounded border-squared-cyan/20 text-squared-cyan focus:ring-squared-cyan"
                                        />
                                        <label htmlFor="terms" className={`text-sm text-squared-gray-600 ${language === 'ar' ? 'font-arabic text-right' : ''}`}>
                                            {language === 'ar' ? 'أوافق على الشروط والأحكام' : 'I agree to the terms and conditions'} *
                                        </label>
                                    </div>

                                    {/* Marketing */}
                                    <div className="flex items-start gap-3">
                                        <input
                                            type="checkbox"
                                            id="marketing"
                                            checked={formData.marketingConsent}
                                            onChange={(e) => setFormData({ ...formData, marketingConsent: e.target.checked })}
                                            className="mt-1 w-5 h-5 rounded border-squared-cyan/20 text-squared-cyan focus:ring-squared-cyan"
                                        />
                                        <label htmlFor="marketing" className={`text-sm text-squared-gray-600 ${language === 'ar' ? 'font-arabic text-right' : ''}`}>
                                            {language === 'ar' ? 'أرغب في تلقي العروض والتحديثات' : 'I want to receive offers and updates'}
                                        </label>
                                    </div>

                                    {submitStatus === 'error' && (
                                        <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl text-sm">
                                            {language === 'ar' ? 'حدث خطأ. يرجى المحاولة مرة أخرى.' : 'An error occurred. Please try again.'}
                                        </div>
                                    )}

                                    {/* Submit */}
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className={`w-full cursor-pointer bg-squared-cyan text-white px-8 py-4 rounded-full text-sm font-black uppercase tracking-[0.2em] hover:bg-squared-cyan-dark transition-all duration-500 shadow-xl shadow-squared-cyan/20 hover:shadow-squared-cyan/40 hover:-translate-y-1 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 ${language === 'ar' ? 'font-arabic tracking-normal' : ''}`}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <Loader className="w-5 h-5 animate-spin" />
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
        </section>
    );
};

export default LoyaltySection;
