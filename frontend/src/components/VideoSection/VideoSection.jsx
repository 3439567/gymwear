import './VideoSection.css';

function VideoSection() {

  const videos = [
    {
      image:
        'https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg',
      title: "INDIA'S"
    },
    {
      image:
        'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg',
      title: 'FAVOURITE'
    },
    {
      image:
        'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg',
      title: 'GYM WEAR'
    }
  ];

  return (
    <section className="video-section">

      {videos.map((video, index) => (
        <div className="video-card" key={index}>

          <img
            src={video.image}
            alt={video.title}
          />

          <div className="video-overlay">

            {index === 1 && (
              <div className="play-btn">
                ▶
              </div>
            )}

            <h2>{video.title}</h2>

          </div>

        </div>
      ))}

    </section>
  );
}

export default VideoSection;