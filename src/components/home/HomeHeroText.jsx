import React from 'react';
import TextRevealMask from '../effects/TextRevealMask';
import ShimmerOverlay from '../effects/ShimmerOverlay';

const HomeHeroText = () => {
  return (
    <div className="font-[font1] text-center relative depth-4 px-4 flex-1 flex items-center justify-center">
      <div className="w-full">
        <TextRevealMask className="text-[12vw] sm:text-[9vw] lg:text-[9.5vw] justify-center flex items-center uppercase leading-[10vw] sm:leading-[7.5vw] lg:leading-[8vw] text-layer-3 mb-2 sm:mb-0 gradient-text-animated">
          <ShimmerOverlay>
            You do the work
          </ShimmerOverlay>
        </TextRevealMask>
        <TextRevealMask className="text-[12vw] sm:text-[9vw] lg:text-[9.5vw] justify-center flex items-center uppercase leading-[10vw] sm:leading-[7.5vw] lg:leading-[8vw] text-layer-3 flex-wrap justify-center mb-2 sm:mb-0 gradient-text-animated">
          <span className="breathe">we</span>
          <div className="h-[8vw] w-[20vw] sm:h-[7vw] sm:w-[16vw] rounded-full overflow-hidden mx-2 sm:mx-2 glass glow-accent flex-shrink-0 my-1 sm:my-0 pulse-glow video-enhanced">
            <video
              className="h-full w-full object-cover hero-inline-video"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
            >
              <source src="/video.mp4" type="video/mp4" />
            </video>
          </div>
          <span className="breathe">do the</span>
        </TextRevealMask>
        <TextRevealMask className="text-[12vw] sm:text-[9vw] lg:text-[9.5vw] justify-center flex items-center uppercase leading-[10vw] sm:leading-[7.5vw] lg:leading-[8vw] text-layer-3 gradient-text-animated">
          <ShimmerOverlay>
            stitches
          </ShimmerOverlay>
        </TextRevealMask>
      </div>
    </div>
  );
};

export default HomeHeroText;