
export default function Splash() {
  return (
    <div className="w-full h-full">
      <video
        poster="https://img1.wsimg.com/isteam/videos/o35ayQk"
        autoPlay={true}
        loop={true}
        muted={false}
        playsInline={true}
        className="w-full h-full min-h-full object-cover"
        src="https://categories.api.godaddy.com/v4/videos/raw/video/o35ayQk"
      ></video>
    </div>
  );
}