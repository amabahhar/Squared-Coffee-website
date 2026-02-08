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
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-8 animate-fade-in">
            {/* Modal Container - Precision Lab Style */}
            <div className="relative w-full h-full max-w-6xl bg-squared-gray-950 border border-squared-gray-800 rounded-none md:rounded-lg shadow-2xl flex flex-col overflow-hidden">

                {/* Technical Corners (Desktop only) */}
                <div className="hidden md:block absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-squared-cyan z-20 pointer-events-none"></div>
                <div className="hidden md:block absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-squared-cyan z-20 pointer-events-none"></div>
                <div className="hidden md:block absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-squared-cyan z-20 pointer-events-none"></div>
                <div className="hidden md:block absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-squared-cyan z-20 pointer-events-none"></div>

                {/* Header */}
                <div className="flex justify-between items-center px-6 py-4 md:px-8 md:py-5 border-b border-squared-gray-800 bg-squared-gray-900">
                    <div className="flex items-center gap-4">
                        <div className="w-2 h-2 bg-squared-cyan animate-pulse"></div>
                        <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight uppercase font-serif">
                            Order <span className="text-squared-cyan">Online</span>
                        </h2>
                    </div>

                    <button
                        onClick={onClose}
                        className="group relative px-4 py-2 overflow-hidden bg-transparent border border-squared-gray-700 text-white hover:border-squared-cyan transition-all duration-300"
                    >
                        <span className="relative z-10 flex items-center gap-2 font-mono text-xs md:text-sm uppercase tracking-wider">
                            Close <X className="w-4 h-4" />
                        </span>
                        <div className="absolute inset-0 bg-squared-cyan/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                    </button>
                </div>

                {/* Iframe Container */}
                <div className="flex-grow relative bg-white">
                    <iframe
                        key={key}
                        src={targetSrc}
                        title="Squared Coffee Ordering"
                        className="absolute inset-0 w-full h-full border-0"
                        allow="payment"
                    />
                </div>

                {/* Status Bar */}
                <div className="h-6 bg-squared-gray-900 border-t border-squared-gray-800 flex items-center justify-between px-4 text-[10px] font-mono text-squared-gray-500 uppercase tracking-widest hidden md:flex">
                    <div>System Status: Online</div>
                    <div className="flex gap-2 items-center">
                        <span>Secure Connection</span>
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default OrderModal;
