import map from "./map.png";

export default function Services() {
  return (
    <section
      id="services"
      className="relative w-full h-[100vh] z-20 bg-neutral-100"
    >
      <h3 className="w-full text-4xl font-bold z-10 border-b p-4 pt-10">
        Our Services
      </h3>
      <div className="w-full flex flex-col gap-4 p-4">
        <div className="w-full flex flex-col md:flex-row items-center justify-start md:pt-10 gap-6 md:gap-4">
          <div className="w-[90%] md:w-[60%] flex flex-col gap-2">
            <p className="text-neutral-700 indent-2 text-sm md:text-base">
              We offer our services to residential and commercial properties
              throughout the greater Philadelphia area. We are a full-service
              lawn care company equipped to handle all of your lawn care needs.
              We offer a variety of services including:
            </p>
            <ul className="list-disc list-inside text-sm md:text-base pl-8">
              <li>Weekly Lawn Care</li>
              <li>Spring and Fall Cleanups</li>
              <li>Leaf Removal</li>
              <li>Snow Removal</li>
              <li>Ice Management</li>
              <li>Landscaping</li>
              <li>Tree and Shrub Care</li>
              <li>Edging</li>
              <li>Trimming</li>
              <li>Blowing</li>
              <li>Pruning</li>
              <li>Planting</li>
              <li>Seeding</li>
              <li>Drainage</li>
              <li>Composting</li>
              <li>Mulching</li>
            </ul>
          </div>
          <img
            src={map}
            alt="Our Service Area Map"
            className="h-[30vh] md:h-[65vh] md:w-[50%] max-w-[600px] aspect-video object-contain mix-blend-multiply"
          />
        </div>
      </div>
    </section>
  );
}
