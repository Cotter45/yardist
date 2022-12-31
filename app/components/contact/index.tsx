import { useState } from "react";

import logo from "./3d_logo.png";

export default function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const actionString = `
      mailto:theyardistlawnservice@gmail.com?subject=The Yardist Lawn Services&body=Hi, my name is ${firstName} ${lastName}.%0D%0A%0D%0A${message.replace(
      /\n/g,
      `%0D%0A`
    )}
    `;

    const mailto = document.createElement("a");
    mailto.href = actionString;
    mailto.click();
  };
  return (
    <section
      id="contact"
      className="relative w-full h-[100vh] flex flex-col items-center justify-center gap-6 bg-neutral-800 z-10"
    >
      <h3 className="w-full self-center max-w-[800px] p-4 text-4xl font-bold text-white z-10 border-b border-neutral-600">
        Contact Us
      </h3>
      <p className="w-full self-center max-w-[600px] pl-6 text-neutral-300 z-10 indent-2">
        Our customer guarantee is 100% satisfaction and response times within 48
        hours. We look forward to hearing from you!
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
  );
}
