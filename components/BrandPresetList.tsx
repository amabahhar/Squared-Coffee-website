import React from 'react';
import { useBrand } from '../contexts/BrandContext';
import { Check } from 'lucide-react';

export const BrandPresetList: React.FC = () => {
    const { brand, setBrandById, availablePresets } = useBrand();

    return (
        <div className="flex flex-col gap-2">
            <div className="text-[9px] text-squared-gray-600 uppercase mb-1">Select Brand Preset</div>
            {availablePresets.map((presetId) => (
                <button
                    key={presetId}
                    onClick={() => setBrandById(presetId)}
                    className={`flex items-center justify-between px-3 py-2 text-xs font-mono uppercase tracking-tight transition-colors ${
                        brand.id === presetId
                            ? 'bg-brand-primary text-black'
                            : 'bg-squared-gray-900 text-squared-gray-400 hover:bg-squared-gray-800'
                    }`}
                >
                    {presetId.replace('-', ' ')}
                    {brand.id === presetId && <Check size={12} />}
                </button>
            ))}
        </div>
    );
};
