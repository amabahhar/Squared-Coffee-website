import React, { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight, Heart, Send } from 'lucide-react';

interface StoryViewerProps {
    isOpen: boolean;
    onClose: () => void;
    initialStartIndex: number;
    posts: Array<{ id: number; image: string; caption: string }>;
}

const StoryViewer: React.FC<StoryViewerProps> = ({ isOpen, onClose, initialStartIndex, posts }) => {
    const [currentIndex, setCurrentIndex] = useState(initialStartIndex);
    const [progress, setProgress] = useState(0);

    // Reset index when opening
    useEffect(() => {
        if (isOpen) {
            setCurrentIndex(initialStartIndex);
            setProgress(0);
        }
    }, [isOpen, initialStartIndex]);

    // Auto-progress logic (simple simulation)
    useEffect(() => {
        if (!isOpen) return;

        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    if (currentIndex < posts.length - 1) {
                        setCurrentIndex((prevIndex) => prevIndex + 1);
                        return 0;
                    } else {
                        onClose(); // Close at end of all stories
                        return 100;
                    }
                }
                return prev + 2; // Increments to 100 over ~5 seconds (50ms * 50)
            });
        }, 50);

        return () => clearInterval(timer);
    }, [currentIndex, isOpen, posts.length, onClose]);

    const handleNext = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (currentIndex < posts.length - 1) {
            setCurrentIndex(currentIndex + 1);
            setProgress(0);
        } else {
            onClose();
        }
    };

    const handlePrev = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
            setProgress(0);
        }
    };

    if (!isOpen) return null;

    const currentPost = posts[currentIndex];

    return (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center">
            {/* Close Button */}
            <button
                onClick={onClose}
                className="absolute top-6 right-6 z-50 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
            >
                <X className="w-8 h-8" />
            </button>

            {/* Main Story Container */}
            <div className="relative w-full max-w-md aspect-[9/16] bg-black rounded-xl overflow-hidden shadow-2xl mx-4 sm:h-[80vh] sm:w-auto sm:mx-0">

                {/* Progress Bars */}
                <div className="absolute top-0 left-0 right-0 z-20 flex gap-1 p-2">
                    {posts.map((_, idx) => (
                        <div key={idx} className="h-1 flex-1 bg-white/30 rounded-full overflow-hidden">
                            <div
                                className={`h-full bg-white transition-all duration-100 ease-linear ${idx < currentIndex ? 'w-full' :
                                        idx === currentIndex ? 'w-full origin-left' : 'w-0'
                                    }`}
                                style={{
                                    width: idx === currentIndex ? `${progress}%` : undefined
                                }}
                            />
                        </div>
                    ))}
                </div>

                {/* Header / User Info */}
                <div className="absolute top-6 left-0 right-0 z-20 p-4 flex items-center justify-between bg-gradient-to-b from-black/60 to-transparent">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-squared-Logo border border-white/20 overflow-hidden">
                            {/* Logo placeholder */}
                            <div className="w-full h-full bg-squared-cyan flex items-center justify-center text-white font-black text-[8px]">S2</div>
                        </div>
                        <span className="text-white font-sans font-bold text-sm">squared_coffee</span>
                        <span className="text-white/60 text-xs">2h</span>
                    </div>
                </div>

                {/* Content Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={currentPost.image}
                        alt="Story"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                </div>

                {/* Navigation Taps */}
                <div className="absolute inset-0 z-10 flex">
                    <div className="flex-1 h-full" onClick={handlePrev}></div>
                    <div className="flex-1 h-full" onClick={handleNext}></div>
                </div>

                {/* Bottom Actions / Caption */}
                <div className="absolute bottom-0 left-0 right-0 z-20 p-6 flex flex-col gap-4">
                    <div className="text-white text-lg font-medium drop-shadow-md text-center">
                        {currentPost.caption}
                    </div>

                    <div className="flex items-center gap-4">
                        <input
                            type="text"
                            readOnly
                            placeholder="Reply to squared_coffee..."
                            className="flex-1 bg-transparent border border-white/40 text-white placeholder-white/70 rounded-full px-5 py-3 text-sm focus:outline-none backdrop-blur-sm"
                        />
                        <Heart className="w-7 h-7 text-white" />
                        <Send className="w-7 h-7 text-white rotate-12" />
                    </div>

                    <a
                        href="https://www.instagram.com/squared_coffee/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-squared-cyan/90 text-white text-center py-3 rounded-xl font-bold text-sm mt-2 hover:bg-squared-cyan transition-colors"
                    >
                        View on Instagram
                    </a>
                </div>

            </div>
        </div>
    );
};

export default StoryViewer;
