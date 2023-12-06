"use client"

import { useState } from "react";
import { VideoPlayer } from "./components/VideoPlayer";


const Page = () => {

  const [playing, setPlaying] = useState(false);

  return (
    <div>
      <div className="border border-white p-3 mb-4">
        <p className="text-2xl text-blue-400 mb-3">{playing ? 'Rodando' : 'Pausado'}</p>
        <button className="bg-blue-400 rounded-md p-3" onClick={() => setPlaying(!playing)} >Play/Pause</button>
      </div>

      <VideoPlayer src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" isPlaying = {playing} />
    </div>
  );
};

export default Page;


