import React from "react";


const Video = ({ url }) => {

    const index = url.indexOf("=");
   
    const embedId = url.slice(index + 1, url.length).trim();

return (
  <div className="video-responsive">
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
)};



export default Video;