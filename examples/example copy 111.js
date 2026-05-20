'use client'
import { useState, useRef, useEffect } from 'react';

function VideoPlayer({ src, isPlaying }) {
  const ref = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  }, [isPlaying]);

  return <video style={{width:'250px'}} ref={ref} src={src} loop playsInline />;
}

export function Example111() {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <>
      <button style={{display: 'block', marginBottom: '20px'}} onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      <VideoPlayer
        isPlaying={isPlaying}
        src="/images/flower.mp4"
      />
    </>
  );
}