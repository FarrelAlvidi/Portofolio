import Image from "next/image";
import React from "react";
import { Github, ExternalLink, Code2 } from "lucide-react";

const CardProjects = ({ img, title, desc, link }) => {
  return (
    <div className="bg-white border hover:p-1  border-transparent hover:border-gray-400  transition-all duration-300 rounded-xl shadow-sm overflow-hidden max-w-sm">
      {/* Header */}
      <div className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-2xl">
            <Image src={img} alt={title} className="w-6 h-6" />
          </div>
          {/* <span className="text-gray-700 font-medium">Laravel</span> */}
        </div>

        <h2 className="text-2xl font-mono font-semibold text-gray-800 mb-3">{title}</h2>

        <p className="text-gray-600 leading-relaxed">{desc}</p>
      </div>

      {/* Card Body */}
      <div className="px-6 pb-6">
        <div className="bg-gray-100 rounded-xl p-6 aspect-video flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
            {/* <Image src={laravelLogo} alt="laravel" className="w-6 h-6" /> */}
          </div>
        </div>
      </div>

      {/* Card Footer */}
        <div className="flex items-center gap-4 px-8 pb-6">
          {/* <a
            href="#"
            className="text-gray-600 hover:text-gray-900 transition-colors duration-300 flex items-center gap-1"
          >
            <Github className="w-5 h-5" />
          </a> */}
            <a
            target="_blank"
            href={link}
            className="text-gray-700 gap-2 hover:underline transition-all  hover:text-gray-900  duration-300 flex items-center "
            >
                See Project
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
    </div>
  );
};

export default CardProjects;
