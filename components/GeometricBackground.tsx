import React from 'react';

const GeometricBackground: React.FC = () => {
    return (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-squared-cream dark:bg-squared-gray-900 transition-colors duration-500">
            {/* Base Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
                style={{
                    backgroundImage: `radial-gradient(#009FB8 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}>
            </div>

            {/* Large Geometric Composition */}
            <svg className="absolute w-full h-full opacity-10 dark:opacity-5" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
                {/* Top Left Cluster */}
                <rect x="5" y="5" width="20" height="20" className="fill-squared-cyan" />
                <circle cx="25" cy="5" r="5" className="fill-squared-navy dark:fill-white" />
                <path d="M 5 25 L 25 25 L 5 45 Z" className="fill-squared-brown-light" />

                {/* Center Right Cluster */}
                <rect x="70" y="30" width="30" height="30" className="stroke-squared-cyan stroke-[0.5] fill-none" />
                <rect x="75" y="35" width="20" height="20" className="fill-squared-navy dark:fill-white opacity-20" />
                <circle cx="90" cy="20" r="15" className="stroke-squared-brown stroke-[0.5] fill-none" />

                {/* Bottom Left Cluster */}
                <path d="M -10 80 L 20 80 L -10 110 Z" className="fill-squared-cyan opacity-50" />
                <rect x="10" y="70" width="15" height="15" className="stroke-squared-brown-dark dark:stroke-white stroke-[0.5] fill-none" />
                <rect x="13" y="73" width="9" height="9" className="fill-squared-brown-light opacity-30" />

                {/* Floating Accent Shapes */}
                <circle cx="50" cy="50" r="2" className="fill-squared-cyan" />
                <rect x="40" y="60" width="4" height="4" className="fill-squared-navy dark:fill-white" transform="rotate(45 42 62)" />
                <path d="M 80 80 L 90 90 L 80 100 Z" className="fill-squared-cyan opacity-40" />
            </svg>

            {/* Overlay for Depth */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/10 dark:from-black/20 dark:via-transparent dark:to-black/40"></div>
        </div>
    );
};

export default GeometricBackground;
