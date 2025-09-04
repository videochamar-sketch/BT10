import React from 'react'
import HoverLift from '../effects/HoverLift'
import AmbientLight from '../effects/AmbientLight'

const VideoCard = ({ videoId, aspectRatio, index }) => {
  return (
    <HoverLift liftAmount={12} scale={1.05} glowEffect={true}>
      <AmbientLight className={`video-container group relative ${aspectRatio || 'aspect-video'} video-glass gpu-accelerated w-full video-enhanced border-glow spotlight tilt-effect`}>
        {/* YouTube iframe embed with responsive 16:9 aspect ratio */}
        <iframe
          className='absolute top-0 left-0 w-full h-full rounded-lg sm:rounded-xl'
          src={`https://www.youtube.com/embed/${videoId}?autoplay=0&mute=1&loop=1&playlist=${videoId}&controls=1&modestbranding=1&rel=0&showinfo=0`}
          title={`Project Video ${index + 1}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
        />
        
        {/* Subtle hover effect overlay - minimal to not interfere with video controls */}
        <div className='absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-lg sm:rounded-xl' />
      </AmbientLight>
    </HoverLift>
  )
}

export default VideoCard