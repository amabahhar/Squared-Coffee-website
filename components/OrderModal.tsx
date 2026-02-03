import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';

interface OrderModalProps {
    isOpen: boolean;
    onClose: () => void;
    initialUrl?: string | null;
}

const OrderModal: React.FC<OrderModalProps> = ({ isOpen, onClose, initialUrl }) => {
    const DEFAULT_URL = "https://squared-coffee.foodics.online/menu/-226471";
    const [key, setKey] = useState(0); // Used to force reload iframe if URL changes

    // Prevent background scrolling when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            // Force refresh of iframe when opening with a new URL
            setKey(prev => prev + 1);
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, initialUrl]);

    if (!isOpen) return null;

    const targetSrc = initialUrl || DEFAULT_URL;

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 backdrop-blur-xl p-4 md:p-12 animate-fade-in">
            <div className="relative w-full h-full max-w-6xl glass rounded-[4.5rem] shadow-[0_40px_100px_rgba(0,0,0,0.2)] overflow-hidden flex flex-col border border-white/40 group">
                <div className="absolute inset-0 bg-gradient-to-br from-squared-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none"></div>

                {/* Header */}
                <div className="flex justify-between items-center px-12 py-10 border-b border-white/20 glass backdrop-blur-3xl relative z-10">
                    <h2 className="text-4xl font-serif font-black text-squared-gray-900 tracking-tight">
                        Order <span className="text-squared-cyan">Online</span>
                    </h2>
                    <button
                        onClick={onClose}
                        className="p-5 glass rounded-full transition-all duration-700 cursor-pointer text-squared-gray-600 hover:text-red-500 hover:scale-110 shadow-2xl border border-white/50 active:scale-95 group/close"
                    >
                        <X className="w-8 h-8 group-hover/close:rotate-90 transition-transform duration-500" />
                    </button>
                </div>

                {/* Iframe Container */}
                <div className="flex-grow relative bg-squared-cream/20">
                    <iframe
                        key={key}
                        src={targetSrc}
                        title="Squared Coffee Ordering"
                        className="absolute inset-0 w-full h-full border-0"
                        allow="payment"
                    />
                </div>

            </div>
        </div>
    );
};

export default OrderModal;
