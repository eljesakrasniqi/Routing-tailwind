import React, { useState } from "react";
import homeImg from "../images/homeImg.png";
import { FaArrowRight } from "react-icons/fa";
import { CiStar } from "react-icons/ci";

function Home() {
  const [services, setServices] = useState([
    {
      id: 1,
      title: "Fast Routing",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      id: 2,
      title: "Tailwind CSS",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      id: 3,
      title: "Simple Structure",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
  ]);

  return (
    <div className="bg-[oklch(98.5%_0_0)] min-h-screen">
      <main className="pt-5">
        <div className="mx-auto flex max-w-6xl items-center gap-8 mt-5">
          <div className="flex-1">
            <span className="inline-flex items-center gap-2 rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 my-5">
              <CiStar className="w-5 h-5" />
              Beginner friendly
            </span>

            <h1 className="text-4xl font-medium mb-4">
              Simple React project with separate pages
            </h1>

            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. It is a
              long established fact that a reader will be distracted by the
              readable content of a page when looking at its layout{" "}
            </p>

              <button className="border mt-5 px-8 py-2 bg-blue-500 text-white font-medium rounded-md">
                Go to About
              </button>

            <button className="border ms-4 mt-5 px-8 py-2 bg-white text-blue-500 font-medium rounded-md inline-flex items-center gap-2">
              Go to Contact
              <FaArrowRight className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1">
            <img src={homeImg} className="w-full h-auto" />
          </div>
        </div>

        <div className="mt-10 max-w-6xl mx-auto">
          <div className="space-y-2 flex justify-between gap-10">
            {services.map((service) => (
              <div key={service.id} className="p-5 border rounded-md shadow-sm">
                <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
