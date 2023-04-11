import Nav from "~/components/nav";
import Footer from "~/components/footer";
import Splash from "~/components/splash";
import Services from "~/components/services";
import Contact from "~/components/contact";
import Recent from "~/components/recent";

export default function Index() {
  return (
    <>
      <Nav />
      <main
        id="main"
        className="relative z-0 top-0 min-h-[405vh] bg-neutral-100 scroll-smooth overflow-x-hidden"
      >
        <section
          id="home"
          className="fixed top-[70px] left-0 w-full h-[100vh] flex items-center justify-center z-0"
        >
          <Splash />
        </section>
        <div className="relative top-[100vh] w-full h-[240vh] z-20">
          <Services />
          <Recent />
          <Contact />
          <section
            id="home"
            className="relative top-0 left-0 w-full h-[40vh] flex justify-evenly z-40 bg-slate-950 text-white"
          >
            <div className="w-[50%] flex flex-col items-start md:items-center gap-4 p-4 pt-20">
              <h4 className="underline self-start lg:pl-10 whitespace-pre">Find us on social media</h4>
              <div className="pl-4 hover:scale-105 transition-all duration-300 ease-in-out">
                <a
                  href="https://www.facebook.com/TheYardistLawnServices/"
                  role="button"
                  className="flex items-center gap-2"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                    className="w-7 h-7"
                    style={{ color: "#1877f2" }}
                  >
                    <path
                      fill="currentColor"
                      d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                    />
                  </svg>
                  <p>Facebook</p>
                </a>
              </div>

              <div className="pl-4 hover:scale-105 transition-all duration-300 ease-in-out">
                <a
                  href="https://www.instagram.com/the_yardist_lawn_service/?fbclid=IwAR28Q2i5zNQVs9JLHbPzGQOUGbtIPgp8VZCjxmkX9PDO6zm929i3Og_cvOA"
                  role="button"
                  className="flex items-center gap-2"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className="w-7 h-7"
                    style={{ color: "#c13584" }}
                  >
                    <path
                      fill="currentColor"
                      d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                    />
                  </svg>
                  <p>Instagram</p>
                </a>
              </div>
            </div>

            <div className="w-[50%] flex flex-col items-start md:items-center gap-4 p-4 pt-20">
              <h4 className="underline self-start lg:pl-10">Our Specialties</h4>
              <ul className="list-disc list-inside text-sm pl-4">
                <li>Lawn Maintenance</li>
                <li>Landscaping Installs</li>
                <li>Spring / Fall Clean Ups</li>
                <li>Snow Plowing / Shovelling</li>
                <li>And More!</li>
              </ul>
            </div>
          </section>
        </div>
        <div className="opacity-0 h-full min-h-[100vh]" />
        <footer className="fixed bottom-0 h-[50px] w-full z-20">
          <Footer />
        </footer>
      </main>
    </>
  );
}
