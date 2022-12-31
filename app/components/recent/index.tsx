import Carousel from "../carousel";

const data = [
  {
    id: 1,
    link: "https://www.facebook.com/TheYardistLawnServices/photos",
    title: "Leaf Removal",
    src: "https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/315542174_114873238097843_8650827647903284645_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=jbjBAS5iA-4AX_JOb-z&_nc_oc=AQkVFAgDNyo8xkYk1yefCqoVUdOA4jiss45fsVW7ebnAppRwsrOPrhmxX-bwN9gWgTA&_nc_ht=scontent-lga3-1.xx&oh=00_AfD69pb_ODEKva7-qH4KtJh-RAWNmdZBJDhsNyVCMmaFjQ&oe=63B5B82C",
  },
  {
    id: 2,
    link: "https://www.facebook.com/TheYardistLawnServices/photos",
    title: "Brush Removal",
    src: "https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/323206693_3269274303284093_8911568777661139558_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=FaDj35OqZk0AX-rQNWl&_nc_ht=scontent-lga3-1.xx&oh=00_AfDm7HhGDi58eL94-WsU_CeQ-LUZvWcKnJW75_vxwxrGVw&oe=63B4C5EB",
  },
  {
    id: 3,
    link: "https://www.facebook.com/TheYardistLawnServices/photos",
    title: "Yard Clean Up",
    src: "https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/312993385_103237599261407_569466735783117514_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=Tfg1jjXPLeMAX8Up_2J&_nc_oc=AQmYq_7sdPsA5KmfILjCFdzWeFZAJ8mEIBAkuJLJXrdRMhlZ1Vwy8PcrkPGKbp7xWyQ&tn=oaJ_0fAc8daAv1mt&_nc_ht=scontent-lga3-1.xx&oh=00_AfAVNH2l98QROvxpY_y5CLYxoVkRJo7s9VSZI7k5S4FPNQ&oe=63B50F56",
  },
  {
    id: 4,
    link: "https://www.facebook.com/TheYardistLawnServices/photos",
    title: "Landscaping",
    src: "https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/313251558_103237595928074_4759464778351466273_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=F2UwHKeQCjkAX99Cvwt&_nc_ht=scontent-lga3-1.xx&oh=00_AfDttfdf7-kIfufpNmpLTTYXhoUZJVjIApu9Ijs5v9O6kA&oe=63B539ED",
  },
  {
    id: 5,
    link: "https://www.facebook.com/TheYardistLawnServices/photos",
    title: "Mulching",
    src: "https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/313266505_103233812595119_7527237701380409518_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=fAPxzybGABUAX_pNQzj&_nc_ht=scontent-lga3-1.xx&oh=00_AfCWaRtfNNoi0aM1gUZ8H7v5Pf22wMrz3LhcgnAL86Gd8w&oe=63B562B8",
  },
];

export default function Recent() {
  return (
    <section
      id="recent-work"
      className="relative top-0 left-0 w-full h-[65vh] flex flex-col justify-evenly z-10 bg-neutral-100"
    >
      <h3 className="w-full text-4xl font-bold z-10 border-b p-4">
        Recent Work
      </h3>
      <Carousel data={data} />
    </section>
  );
}