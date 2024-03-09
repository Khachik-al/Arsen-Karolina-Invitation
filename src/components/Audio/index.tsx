'use client';

import Image from 'next/image';

import { useRef, useState } from 'react';

const play_icon = <Image src="/images/audio/play.png" alt="play" width={45} height={45} />;
const pause_icon = <Image src="/images/audio/pause.png" alt="play" width={45} height={45} />;

export default function Audio() {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement>();

  const onToggleAudio = () => {
    setIsPlaying(playing => !playing);
    if (!isPlaying) void audioRef.current.play();
    else void audioRef.current.pause();
  };

  return (
    <div className="fixed z-50 top-[16px] left-[16px]">
      <button className="p-2.5 bg-gray-50 rounded-full shadow-xl" onClick={onToggleAudio}>
        {isPlaying ? pause_icon : play_icon}
      </button>
      <audio ref={audioRef}>
        <source src="/audio/aerosmith-i-don-t-want-to-miss-a-thing.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}
