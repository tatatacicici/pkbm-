import YouTube from 'react-youtube';

export const VideoPlayerPanduan = ({ isActive }: { isActive: string }) => {
  const generateVideo = () => {
    switch (isActive) {
      case 'panduan':
        return (
          <video
            key="panduan"
            controls
            className="rounded-xl w-full md:w-[768px] h-auto"
          >
            <source src="/video/panduan-kampus-gratis.mp4" type="video/mp4" />
            <source src="/video/panduan-kampus-gratis.ogv" type="video/ogg" />
            Your browser does not support the video tag.
          </video>
        );
      case 'faq':
        return (
          <video
            key="faq"
            controls
            className="rounded-xl w-full md:w-[768px] h-auto"
          >
            <source src="/video/faq-kampus-gratis.mp4" type="video/mp4" />
            <source src="/video/faq-kampus-gratis.ogv" type="video/ogg" />
            Your browser does not support the video tag.
          </video>
        );
      case 'bisnis':
        return (
          <video
            key="bisnis"
            controls
            className="rounded-xl w-full md:w-[768px] h-auto"
          >
            <source src="/video/bisnis.mp4" type="video/mp4" />
            <source src="/video/bisnis.ogv" type="video/ogg" />
            Your browser does not support the video tag.
          </video>
        );
      case 'teknologi':
        return (
          <video
            key="teknologi"
            controls
            className="rounded-xl w-full md:w-[768px] h-auto"
          >
            <source src="/video/teknologi-digital.mp4" type="video/mp4" />
            <source src="/video/teknologi-digital.ogv" type="video/ogg" />
            Your browser does not support the video tag.
          </video>
        );
      case 'rpl':
        return (
          <video
            key="rpl"
            controls
            className="rounded-xl w-full md:w-[768px] h-auto"
          >
            <source src="/video/rpl.mp4" type="video/mp4" />
            <source src="/video/rpl.ogv" type="video/ogg" />
            Your browser does not support the video tag.
          </video>
        );
      case 'point-rpl':
        return (
          <video
            key="point-rpl"
            controls
            className="rounded-xl w-full md:w-[768px] h-auto"
          >
            <source src="/video/point-rpl.mp4" type="video/mp4" />
            <source src="/video/point-rpl.ogv" type="video/ogg" />
            Your browser does not support the video tag.
          </video>
        );
      case 'krs':
        return (
          <YouTube
            videoId="isPjC360emA"
            opts={{
              width: '100%',
              height: 'auto',
              playerVars: {
                autoplay: 1,
              },
            }}
            iframeClassName="rounded-xl w-full md:w-max h-auto"
          />
        );
      case 'kampus-gratis':
        return (
          <YouTube
            videoId="WhZ11n-kL8o"
            opts={{
              width: '100%',
              height: 'auto',
              playerVars: {
                autoplay: 1,
              },
            }}
            iframeClassName="rounded-xl w-full md:w-max h-auto"
          />
        );
      default:
        <div>Video tidak ditemukan</div>;
    }
  };

  return <div className="h-max mx-auto md:w-max w-full">{generateVideo()}</div>;
};
