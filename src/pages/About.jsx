import React from "react";
import { IoIosDocument } from "react-icons/io";
import { VscSymbolStructure } from "react-icons/vsc";
import { IoMap } from "react-icons/io5";
import { TbRouteAltLeft } from "react-icons/tb";

function About() {
  return (
    <div className="bg-[oklch(98.5%_0_0)] min-h-screen">
      <main className="pt-5">
        <div className="mx-auto flex max-w-6xl items-center gap-8 mt-5">
          <div className="flex-1 bg-white p-10 rounded-xl">
            <h1 className="text-4xl py-3 font-medium">About Page</h1>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using. <br /> <br />
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using. <br />
              <br />
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using.
            </p>
          </div>
          <div className="flex-1 bg-black p-10 rounded-xl">
            <h1 className="text-white text-3xl font-medium pb-4">
              What this project includes
            </h1>
            <div className="bg-white py-3 my-2 rounded-md flex">
              <TbRouteAltLeft className="ms-2 text-sky-800 bg-sky-200 rounded-full p-1 w-10 h-10"/>
              <h3 className="ps-3 font-normal pt-2">React router for page navigation</h3>
            </div>
            <div className="bg-white py-3 my-2 rounded-md flex">
              <IoMap className="ms-2 text-green-800 bg-green-200 rounded-full p-1 w-10 h-10"/>
              <h3 className="ps-3 pt-2">Tailwind for styling</h3>
            </div>
            <div className="bg-white py-3 my-2 rounded-md flex">
              <IoIosDocument className="ms-2 text-purple-800 bg-purple-200 rounded-full p-1 w-10 h-10"/>
              <h3 className="ps-3 pt-2">React router for page navigation</h3>
            </div>
            <div className="bg-white py-3 my-2 rounded-md flex">
              <VscSymbolStructure className="ms-2 text-yellow-800 bg-yellow-200 rounded-full p-1 w-10 h-10"/>
              <h3 className="ps-3 pt-2">Shared navbar and layout</h3>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default About;
