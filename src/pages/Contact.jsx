import React from "react";

function Contact() {
  return (
    <body className="bg-sky-50">
      <div className="bg-white mt-10 w-lg p-10 mx-auto">
        <div className="text">
          <h1 className="text-3xl font-bold py-3">Contact page</h1>
          <p>This is a simple contact form example</p>
        </div>
        <div>
          <label
            htmlFor="name"
            className="block text-sm/6 font-medium text-gray-900 mt-3"
          >
            Full name
          </label>
          <div className="mt-1">
            <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your full name"
                className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
              />
            </div>
          </div>
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm/6 font-medium text-gray-900 mt-3"
          >
            Email
          </label>
          <div className="mt-1">
            <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
              <input
                id="email"
                name="email"
                type="text"
                placeholder="Enter your email"
                className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
              />
            </div>
          </div>
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm/6 font-medium text-gray-900 mt-3"
          >
            Message
          </label>
          <div className="mt-1">
            <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
              <textarea
                id="message"
                name="message"
                type="text"
                placeholder="Enter your message"
                className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
              />
            </div>
          </div>
        </div>
        <button className="border mt-5 px-4 py-1 bg-black text-white font-medium rounded-sm">
          Send message
        </button>
      </div>
    </body>
  );
}

export default Contact;
