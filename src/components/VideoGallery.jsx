import React, { useState, useEffect } from 'react';

const VideoGallery = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const videoNames = [
        'dogrun',
        'test',
        'granjota',
        'perritos',
    ];
    const videos = videoNames.map(name => `/pro-animal-calle-larga/frontGallery/${name}.mp4`);

    useEffect(() => {
        if (videos.length === 0) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % videos.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [videos.length]);

    if (videos.length === 0) {
        return null;
    }

    return (
        <div className="relative w-full h-screen overflow-hidden bg-gray-900">
            {videos.map((video, index) => (
                <video
                    key={video}
                    src={video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
                    style={{
                        opacity: currentIndex === index ? 1 : 0,
                        zIndex: currentIndex === index ? 1 : 0
                    }}
                />
            ))}
            
            <div className="absolute inset-0 z-10" />
            
            <div className="absolute inset-0 z-20 flex items-center justify-center">
                <div className="text-center text-white px-6">
                    <h1 className="text-6xl font-bold mb-4">
                        Bienvenidos
                    </h1>
                    <p className="text-2xl">
                        Transformando vidas, un perro a la vez
                    </p>
                </div>
            </div>
        </div>
    );
};

export default VideoGallery;