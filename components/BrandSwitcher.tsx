import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Settings, Palette, Type, Box } from 'lucide-react';
import { BrandPresetList } from './BrandPresetList';
import { PaletteEditor } from './PaletteEditor';
import { TextContentEditor } from './TextContentEditor';

const BrandSwitcher: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeTab, setActiveTab] = useState<'brand' | 'palette' | 'content'>('brand');

    const tabs = [
        { id: 'brand', icon: Box, title: 'Switch Brands' },
        { id: 'palette', icon: Palette, title: 'Edit Palette' },
        { id: 'content', icon: Type, title: 'Edit Content' },
    ] as const;

    return (
        <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-3">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 10 }}
                        className="bg-squared-black border border-squared-gray-800 p-4 shadow-2xl rounded-sm w-80 max-h-[80vh] overflow-y-auto scrollbar-hide"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <div className="text-[10px] font-bold text-squared-gray-500 uppercase tracking-widest font-mono">
                                Template Controls
                            </div>
                            <div className="flex gap-1">
                                {tabs.map(tab => (
                                    <button 
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`p-1.5 rounded-sm transition-colors ${activeTab === tab.id ? 'bg-brand-primary text-black' : 'text-squared-gray-400 hover:bg-squared-gray-800'}`}
                                        title={tab.title}
                                    >
                                        <tab.icon size={14} />
                                    </button>
                                ))}
                            </div>
                        </div>

                        {activeTab === 'brand' && <BrandPresetList />}
                        {activeTab === 'palette' && <PaletteEditor />}
                        {activeTab === 'content' && <TextContentEditor />}

                        <div className="mt-4 pt-4 border-t border-squared-gray-800 text-[9px] text-squared-gray-600 leading-tight font-mono">
                            {activeTab === 'brand' 
                                ? "Switching brands updates all tokens, links, and assets." 
                                : "Changes are saved to local storage for this session."
                            }
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`w-12 h-12 flex items-center justify-center rounded-full shadow-2xl border transition-all duration-300 ${
                    isOpen ? 'bg-squared-white text-black border-squared-white' : 'bg-brand-primary text-black border-brand-primary hover:scale-110'
                }`}
                aria-label="Toggle brand switcher"
            >
                <Settings size={20} className={isOpen ? 'rotate-90' : ''} />
            </button>
        </div>
    );
};

export default BrandSwitcher;
