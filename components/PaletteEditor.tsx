import React from 'react';
import { useBrand } from '../contexts/BrandContext';
import { RefreshCcw } from 'lucide-react';

const paletteColors = [
    { label: 'Primary', key: 'primary' },
    { label: 'Hover', key: 'primaryHover' },
    { label: 'Dark', key: 'primaryDark' },
    { label: 'Background', key: 'background' },
    { label: 'Surface', key: 'surface' },
    { label: 'Text', key: 'text' },
] as const;

export const PaletteEditor: React.FC = () => {
    const { brand, updateBrandColors, setBrandById } = useBrand();

    return (
        <div className="flex flex-col gap-3">
            <div className="text-[9px] text-squared-gray-600 uppercase mb-1">Custom Palette Editor</div>
            <div className="grid grid-cols-2 gap-2">
                {paletteColors.map((c) => (
                    <div key={c.key} className="flex flex-col gap-1">
                        <label className="text-[9px] text-squared-gray-500 uppercase">{c.label}</label>
                        <div className="flex items-center gap-2 bg-squared-gray-900 p-1 rounded-sm border border-squared-gray-800 focus-within:border-brand-primary/50 transition-colors">
                            <input 
                                type="color" 
                                value={brand.colors[c.key]?.startsWith('rgba') ? '#000000' : brand.colors[c.key]}
                                onChange={(e) => updateBrandColors({ [c.key]: e.target.value })}
                                className="w-6 h-6 bg-transparent cursor-pointer border-none p-0 flex-shrink-0"
                            />
                            <input 
                                type="text"
                                value={brand.colors[c.key]}
                                onChange={(e) => updateBrandColors({ [c.key]: e.target.value })}
                                className="w-full bg-transparent border-none p-0 text-[8px] font-mono text-squared-gray-400 focus:text-white focus:outline-none uppercase"
                                spellCheck={false}
                            />
                        </div>
                    </div>
                ))}
            </div>
            <button 
                onClick={() => setBrandById(brand.id)}
                className="flex items-center justify-center gap-2 py-2 mt-2 text-[10px] uppercase font-bold text-squared-gray-400 hover:text-white border border-squared-gray-800 hover:border-squared-gray-600 transition-all font-mono"
            >
                <RefreshCcw size={10} />
                Reset to {brand.name} Defaults
            </button>
        </div>
    );
};
