import map from "./map.png";

export default function Services() {
  return (
    <section
      id="services"
      className="relative w-full h-[100dvh] z-20 bg-white text-neutral-700"
    >
      <h3 className="w-full text-4xl font-bold z-10 border-b p-4 pt-10">
        Our Services
      </h3>
      <div className="w-full flex flex-col gap-4 p-4">
        <div className="w-full flex flex-col md:flex-row items-center justify-start md:pt-10 gap-6 md:gap-4">
          <div className="w-[90%] md:w-[60%] flex flex-col gap-2">
            <p className="indent-2 text-sm md:text-lg">
              We offer our services to residential and commercial properties
              throughout the greater Philadelphia area. We are a full-service
              lawn care company equipped to handle all of your lawn care needs.
              We offer a variety of services including:
            </p>
            <ul className="list-disc list-inside text-sm md:text-base md:pt-8 grid grid-cols-2 pl-10 gap-2">
              <li className="whitespace-pre truncate">Weekly Lawn Care</li>
              <li className="whitespace-pre truncate">Spring and Fall Cleanups</li>
              <li className="whitespace-pre truncate">Leaf Removal</li>
              <li className="whitespace-pre truncate">Snow Removal</li>
              <li className="whitespace-pre truncate">Ice Management</li>
              <li className="whitespace-pre truncate">Landscaping</li>
              <li className="whitespace-pre truncate">Tree and Shrub Care</li>
              <li className="whitespace-pre truncate">Edging</li>
              <li className="whitespace-pre truncate">Trimming</li>
              <li className="whitespace-pre truncate">Blowing</li>
              <li className="whitespace-pre truncate">Pruning</li>
              <li className="whitespace-pre truncate">Planting</li>
              <li className="whitespace-pre truncate">Seeding</li>
              <li className="whitespace-pre truncate">Drainage</li>
              <li className="whitespace-pre truncate">Composting</li>
              <li className="whitespace-pre truncate">Mulching</li>
            </ul>
          </div>
          <img
            src={map}
            alt="Our Service Area Map"
            className="h-[35vh] md:h-[65vh] md:w-[50%] max-w-[600px] aspect-video object-contain"
          />
        </div>
      </div>
    </section>
  );
}
