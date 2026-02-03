import React, { useState } from 'react';
import { SOCIAL_POSTS } from '../constants';
import { Instagram } from 'lucide-react';
import StoryViewer from './StoryViewer';

const SocialSection: React.FC = () => {
    const [isViewerOpen, setIsViewerOpen] = useState(false);
    const [selectedStoryIndex, setSelectedStoryIndex] = useState(0);

    const handleStoryClick = (index: number) => {
        setSelectedStoryIndex(index);
        setIsViewerOpen(true);
    };

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
                        className="flex items-center gap-2 group cursor-pointer"
                    >
                        <span className="text-xs font-black tracking-[0.2em] uppercase text-squared-gray-900 group-hover:text-squared-cyan transition-colors">
                            @squared_coffee
                        </span>
                        <div className="w-10 h-10 rounded-full bg-squared-gray-900 text-white flex items-center justify-center group-hover:bg-squared-cyan transition-colors duration-300">
                            <Instagram className="w-5 h-5" />
                        </div>
                    </a>
                </div>

                {/* Story Rings Scroll Container */}
                <div className="relative -mx-4 px-4 md:mx-0 md:px-0">
                    <div className="flex overflow-x-auto pb-8 gap-6 md:gap-10 snap-x snap-mandatory no-scrollbar">
                        {SOCIAL_POSTS.map((post, index) => (
                            <div
                                key={post.id}
                                className="flex-shrink-0 snap-center flex flex-col items-center gap-3 group cursor-pointer"
                                onClick={() => handleStoryClick(index)}
                            >
                                {/* Ring Container */}
                                <div className="p-[3px] rounded-full bg-gradient-to-tr from-squared-cyan via-purple-400 to-squared-gold group-hover:from-squared-gold group-hover:to-squared-cyan transition-all duration-500 shadow-xl group-hover:shadow-squared-cyan/40 group-hover:-translate-y-2 transform">
                                    <div className="p-[3px] bg-white rounded-full">
                                        <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden relative">
                                            <img
                                                src={post.image}
                                                alt="Story Thumbnail"
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <span className="text-[10px] font-bold tracking-widest uppercase text-squared-gray-800 opacity-70 group-hover:opacity-100 group-hover:text-squared-cyan transition-all">
                                    Click to View
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Scroll fade overlay (mobile only) */}
                    <div className="absolute top-0 right-0 h-full w-12 bg-gradient-to-l from-white to-transparent pointer-events-none md:hidden"></div>
                </div>

            </div>

            <StoryViewer
                isOpen={isViewerOpen}
                onClose={() => setIsViewerOpen(false)}
                initialStartIndex={selectedStoryIndex}
                posts={SOCIAL_POSTS}
            />
        </section>
    );
};

export default SocialSection;
