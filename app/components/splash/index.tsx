export default function Splash() {
  return (
    <div className="relative w-full h-full">
      <video
        poster="https://img1.wsimg.com/isteam/videos/o35ayQk"
        autoPlay={true}
        loop={true}
        muted={true}
        playsInline={true}
        className="w-[100vw] h-[100vh] object-cover absolute z-0"
        src="https://categories.api.godaddy.com/v4/videos/raw/video/o35ayQk"
      ></video>
      <div className="absolute z-10 bottom-0 w-full h-[90vh] flex flex-col items-center justify-center gap-2">
        <div className="w-[90vw] h-[15vh] rounded-xl flex flex-col gap-2 items-center justify-center backdrop-blur-sm">
          <p className="text-white text-4xl md:text-5xl font-bold italic">
            Forget about the Jones's
          </p>
        </div>
        
        <button className="bg-yellow-900 text-white py-2 px-24 rounded-xl cursor-pointer shadow-md shadow-neutral-800 hover:shadow-lg hover:scale-105 transition-all ease-in-out duration-500 flex gap-2 md:gap-4 items-center">
          <label className="text-3xl cursor-pointer">FREE</label>
          <label className="text-md max-w-[100px] md:max-w-full cursor-pointer">
            Consultation & Estimate
          </label>
        </button>
      </div>
    </div>
  );
}