import Nav from "~/components/nav";
import Footer from "~/components/footer";
import Splash from "~/components/splash";

import logo from "../components/splash/3d_logo.png";
import { useState } from "react";

export default function Index() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('TEST');

    const actionString = `
      mailto:test@test.com?subject=The Yardist Lawn Services&body=Hi, my name is ${firstName} ${lastName}.%0D%0A%0D%0A${message.replace(/\n/g, `%0D%0A`)}
    `;

    const mailto = document.createElement('a');
    mailto.href = actionString;
    mailto.click();
  }

  return (
    <>
      <Nav />
      <main
        id="main"
        className="relative top-0 min-h-[340vh] bg-neutral-100 scroll-smooth overflow-x-hidden"
      >
        <section
          id="home"
          className="fixed top-[70px] left-0 w-full h-[100vh] flex items-center justify-center z-0"
        >
          <Splash />
        </section>
        <div className="relative top-[100vh] w-full h-[200vh]">
          <section
            id="services"
            className="relative w-full h-[100vh] flex items-center justify-center z-10 bg-neutral-100"
          >
            {/* <div
              style={{
                clipPath:
                  "polygon(0% 0%, 0% 100%, 5% 95%, 5% 5%, 95% 5%, 95% 95%, 5% 95%, 0 100%, 100% 100%, 100% 0%)",
              }}
              className="absolute top-0 left-0 w-full h-full bg-neutral-100 z-10"
            ></div> */}
          </section>
          <section
            id="contact"
            className="relative w-full h-[100vh] flex flex-col items-center justify-center gap-6 bg-neutral-800 z-10"
          >
            <h3 className="w-full self-center max-w-[800px] pl-6 text-4xl font-bold text-white z-10">
              Contact Us
            </h3>
            <p className="w-[90%] self-center max-w-[600px] pl-6 text-neutral-300 z-10 indent-2">
              Our customer guarantee is 100% satisfaction and response times
              within 48 hours. We look forward to hearing from you!
            </p>
            <img
              src={logo}
              alt="Logo"
              className="absolute top-0 left-0 w-full h-full object-cover mb-1 z-0 opacity-50"
            />
            <form
              onSubmit={handleSubmit}
              encType="text/plain"
              className="w-full relative z-40 flex flex-col gap-8"
            >
              <div className="flex flex-col items-center -mx-3 mb-6">
                <div className="w-[90%] md:w-1/2 max-w-[800px] px-3 md:px-0 mb-6 md:mb-0 flex gap-4">
                  <div className="w-[50%] md:w-1/2">
                    <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2">
                      First Name
                    </label>
                    <input
                      className="appearance-none block w-full bg-[rgba(245,245,245,.2)] text-neutral-900 border border-neutral-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-neutral-500"
                      type="text"
                      placeholder="John/Jane"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                  <div className="w-[50%] md:w-1/2">
                    <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2">
                      Last Name
                    </label>
                    <input
                      className="appearance-none block w-full bg-[rgba(245,245,245,.2)] text-neutral-900 border border-neutral-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-neutral-500"
                      type="text"
                      placeholder="Doe/Re/Mi..."
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="w-[85%] md:w-1/2 max-w-[800px] mt-4">
                  <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2">
                    Message
                  </label>
                  <textarea
                    className="h-[200px] appearance-none block w-full bg-[rgba(245,245,245,.2)] text-neutral-900 border border-neutral-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-neutral-500 resize-none"
                    placeholder="Your message here..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
                <div className="w-[90%] md:w-1/2 max-w-[800px] flex justify-center mt-8 mb-20">
                  <button
                    type="submit"
                    className="bg-yellow-900 text-white py-2 px-16 rounded-xl cursor-pointer shadow-md shadow-neutral-800 hover:shadow-lg hover:scale-105 transition-all ease-in-out duration-500 flex gap-4 md:gap-8 items-center self-center"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </section>
          <section
            id="home"
            className="relative top-0 left-0 w-full h-[40vh] flex justify-between z-10 bg-neutral-300"
          >
            <div className="w-[50%] flex flex-col gap-4 p-4">
              <h4 className="underline">Find us on social media</h4>
              <div className="">
                <a href="#!" role="button" className="flex items-center gap-2">
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

              <div className="">
                <a href="#!" role="button" className="flex items-center gap-2">
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

            <div className="w-[50%] flex flex-col gap-4 p-4">
              <h4 className="underline">Our Specialties</h4>
              <ul className="list-disc list-inside">
                <li>Lawn Maintenance</li>
                <li>Landscaping Installs</li>
                <li>Spring / Fall Clean Ups</li>
                <li>Snow Plowing / Shovelling</li>
                <li>And More!</li>
              </ul>
            </div>
          </section>
        </div>
        <footer className="fixed bottom-0 h-[50px] w-full z-20">
          <Footer />
        </footer>
      </main>
    </>
  );
}
