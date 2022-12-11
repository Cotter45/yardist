export default function Splash() {
  return (
    <div className="relative top-0 w-full h-full">
      <video
        poster="https://img1.wsimg.com/isteam/videos/o35ayQk"
        autoPlay={true}
        loop={true}
        muted={true}
        playsInline={true}
        className="w-[100vw] h-[110vh] object-cover absolute z-0"
        src="https://categories.api.godaddy.com/v4/videos/raw/video/o35ayQk"
      ></video>
      <div className="w-full h-[90vh] flex flex-col items-center justify-center">
        <div className="w-[90vw] h-[10vh] rounded-xl flex flex-col gap-2 items-center justify-center backdrop-blur-sm">
          <p className="text-white text-3xl md:text-5xl font-bold italic">
            Forget about the Jones's
          </p>
          <div className="text-white py-2 px-16  backdrop-blur-sm flex gap-4 md:gap-8 items-center justify-center w-full">
            <p className="text-3xl">FREE</p>
            <p className="text-md max-w-[100px] md:max-w-full">
              Consultation & Estimate
            </p>
          </div>
        </div>

        <div className="w-full flex flex-col items-center justify-center z-50">
          <div className="flex justify-evenly mt-10 gap-4">
            <a
              href="tel:1-801-809-0000"
              className="bg-yellow-900 text-white py-2 px-16 rounded-xl shadow-md shadow-neutral-800 hover:shadow-lg hover:scale-105 transition-all ease-in-out duration-500 flex gap-4 md:gap-8 items-center"
            >
              Call Now
            </a>
            <a
              href="mailto:test@test.com?subject=The%20Yardist%20Lawn%20Services"
              className="bg-yellow-900 text-white py-2 px-16 rounded-xl shadow-md shadow-neutral-800 hover:shadow-lg hover:scale-105 transition-all ease-in-out duration-500 flex gap-4 md:gap-8 items-center"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}