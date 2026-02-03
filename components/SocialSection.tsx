import React, { useEffect } from 'react';
import { Instagram } from 'lucide-react';

const SocialSection: React.FC = () => {
    useEffect(() => {
        // This will load the EmbedSocial script when the component mounts
        const script = document.createElement('script');
        script.src = 'https://embedsocial.com/js/iframe.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            // Cleanup: remove script when component unmounts
            if (script.parentNode) {
                script.parentNode.removeChild(script);
            }
        };
    }, []);

    return (
        <section id="social" className="py-12 md:py-24 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-12 relative z-10">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-squared-gray-900/10 pb-6">
                    <div className="mb-4 md:mb-0">
                        <span className="inline-block py-1 pr-12 border-b-2 border-squared-cyan/30 text-xs md:text-sm font-black tracking-[0.4em] text-squared-cyan uppercase mb-4">
                            Social
                        </span>
                        <h2 className="text-4xl md:text-6xl font-serif text-squared-gray-900 leading-[0.9] font-black tracking-tight">
                            Follow<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-squared-cyan to-squared-gold-light">
                                The Vibe
                            </span>
                        </h2>
                    </div>

                    <a
                        href="https://www.instagram.com/squared_coffee/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 group cursor-pointer z-20"
                    >
                        <span className="text-xs font-black tracking-[0.2em] uppercase text-squared-gray-900 group-hover:text-squared-cyan transition-colors">
                            @squared_coffee
                        </span>
                        <div className="w-10 h-10 rounded-full bg-squared-gray-900 text-white flex items-center justify-center group-hover:bg-squared-cyan transition-colors duration-300">
                            <Instagram className="w-5 h-5" />
                        </div>
                    </a>
                </div>

                {/* Instagram Feed Container */}
                <div className="relative">
                    {/* 
                        INSTRUCTIONS FOR SETUP:
                        ========================
                        1. Go to https://embedsocial.com/ or https://behold.so/
                        2. Sign up for a free account
                        3. Connect your Instagram account (@squared_coffee)
                        4. Create an Instagram feed widget
                        5. Customize it to show:
                           - Grid layout
                           - 6 posts (2 rows of 3 on desktop)
                           - Square images
                        6. Copy the embed code they give you
                        7. Replace the div below with your embed code
                        
                        The embed code will look something like this:
                        <iframe ... embedsocial-hashtag ...></iframe>
                        or
                        <div class="embedsocial-instagram" ...></div>
                    */}

                    {/* TEMPORARY PLACEHOLDER - Replace this entire div with your embed code */}
                    <div className="bg-squared-cream-soft rounded-2xl p-12 text-center border-2 border-dashed border-squared-cyan/30">
                        <div className="max-w-2xl mx-auto">
                            <Instagram className="w-16 h-16 mx-auto mb-6 text-squared-cyan" />
                            <h3 className="text-2xl font-bold text-squared-gray-900 mb-4">
                                Instagram Feed Coming Soon
                            </h3>
                            <p className="text-squared-gray-600 mb-6 leading-relaxed">
                                To display your live Instagram feed here, follow these steps:
                            </p>
                            <ol className="text-left text-sm space-y-3 mb-8 bg-white p-6 rounded-xl">
                                <li className="flex items-start gap-3">
                                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-squared-cyan text-white flex items-center justify-center text-xs font-bold">1</span>
                                    <span>Sign up at <a href="https://embedsocial.com" target="_blank" rel="noopener noreferrer" className="text-squared-cyan font-bold hover:underline">embedsocial.com</a> (free plan available)</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-squared-cyan text-white flex items-center justify-center text-xs font-bold">2</span>
                                    <span>Connect your @squared_coffee Instagram account</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-squared-cyan text-white flex items-center justify-center text-xs font-bold">3</span>
                                    <span>Create a Grid widget (6 posts, square format)</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-squared-cyan text-white flex items-center justify-center text-xs font-bold">4</span>
                                    <span>Copy the embed code and send it to your developer</span>
                                </li>
                            </ol>
                            <a
                                href="https://embedsocial.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-squared-cyan text-white px-8 py-3 rounded-full font-bold text-sm uppercase tracking-wider hover:bg-squared-cyan/90 transition-colors"
                            >
                                Get Started Free →
                            </a>
                        </div>
                    </div>
                    {/* END PLACEHOLDER */}

                </div>

            </div>
        </section>
    );
};

export default SocialSection;
