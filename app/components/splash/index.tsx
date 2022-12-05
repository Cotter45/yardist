
export default function Splash() {
  return (
    <div className="w-full h-full">
      <video
        poster="https://img1.wsimg.com/isteam/videos/o35ayQk"
        autoPlay={true}
        loop={true}
        muted={true}
        playsInline={true}
        className="w-[100vw] h-[100vh] object-cover absolute z-0"
        src="https://categories.api.godaddy.com/v4/videos/raw/video/o35ayQk"
      ></video>
    </div>
  );
}