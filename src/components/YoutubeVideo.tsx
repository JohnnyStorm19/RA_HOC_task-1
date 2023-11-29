const YouTubeVideo = ({id}: {id: string}) => {

    return (
      <div className="video">
        <h1>YouTube Video</h1>
        <iframe 
          width="560" 
          height="315" 
          src={`https://www.youtube.com/embed/${id}`} 
          allow="autoplay; encrypted-media" 
          allowFullScreen
        ></iframe>
      </div>
    );
  };
  
  export default YouTubeVideo;