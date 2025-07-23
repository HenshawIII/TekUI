'use client';

import { useEffect, useRef, useState } from 'react';

export default function Video() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    
    if (video) {
      const handleLoadedData = () => {
        console.log('Video loaded successfully');
        setIsVideoLoaded(true);
      };

      const handleError = (e: Event) => {
        console.error('Error loading video:', e);
      };

      video.addEventListener('loadeddata', handleLoadedData);
      video.addEventListener('error', handleError);

      const playVideo = async () => {
        try {
          video.muted = true;
          video.playsInline = true;
          video.autoplay = true;
          
          const playPromise = video.play();
          
          if (playPromise !== undefined) {
            playPromise
              .then(() => {
                console.log('Video started playing');
              })
              .catch(error => {
                console.error('Error playing video:', error);
                document.addEventListener('click', () => {
                  video.play().catch(console.error);
                }, { once: true });
              });
          }
        } catch (error) {
          console.error('Error in playVideo:', error);
        }
      };

      playVideo();

      return () => {
        video.removeEventListener('loadeddata', handleLoadedData);
        video.removeEventListener('error', handleError);
      };
    }
  }, []);

  return (
    <div className="w-full h-full">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
        preload="auto"
        style={{
          opacity: isVideoLoaded ? 1 : 0
        }}
      >
        <source src={"https://res.cloudinary.com/dgqczyv20/video/upload/v1746891577/hzznlpns1eofgoe7jxg9.mp4"} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <video width="640" height="360" controls>
    <source src="/videos/thee.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
    </div>
  );
} 