import React, { useState } from 'react';
import './App.css';

import Plyr from 'plyr';
import '../node_modules/plyr/dist/plyr.css';

function App() {

  let [videoId, setVideoId] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    if (videoId.match(/^http/)) {
      videoId = videoId.split('v=')[0];
      if (videoId.match(/\&/)) {
        videoId = videoId.split(/\&/)[0];
      }
    }

    const plyr = new Plyr('#plyr', {
      fullscreen: true,
      autoplay: true
    });
  };

  return (
    <div id="plyr" data-plyr-provider="youtube"
      allowFullScreen
      allow="autoplay"
      data-plyr-embed-id={videoId}>

      <div className="container big-padding">
        <form onSubmit={submitHandler}>
          <input type="text"
            className="form-control"
            value={videoId}
            onChange={e => setVideoId(e.target.value)}
            placeholder="Paste YouTube video URL here and hit ⮐ key" autoFocus />
        </form>
        <span>Please note that playback on other websites might have been disabled for some videos by the video owner. Such videos may not be played here.</span>
      </div>
    </div>
  );
}

// CDEeOWKza2Q
export default App;
