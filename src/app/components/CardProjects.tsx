import Image from "next/image";
import React from "react";
import { ExternalLink, Code2 } from "lucide-react";

interface CardProjectsProps {
  img: string;
  title: string;
  desc: string;
  link: string;
}

const CardProjects: React.FC<CardProjectsProps> = ({
  img,
  title,
  desc,
  link,
}) => {
  return (
    <div className="bg-white shadow border hover:p-1 border-transparent hover:border-gray-400 transition-all duration-300 rounded-xl shadow-sm overflow-hidden max-w-sm">
      {/* Header */}
      <div className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-2xl">
            <Image src={img} alt={title} className="w-6 h-6" width={24} height={24} />
          </div>
        </div>

        <h2 className="text-2xl font-mono font-semibold text-gray-800 mb-3">
          {title}
        </h2>

        <p className="text-gray-600 leading-relaxed mb-6">{desc}</p>

        {/* Placeholder konten biar ga kosong */}
        <div className="space-y-3">
          <div className="h-3 bg-gray-200 rounded w-3/4"></div>
          <div className="h-3 bg-gray-200 rounded w-2/3"></div>
          <div className="flex items-center gap-2 pt-3">
            <Code2 className="w-4 h-4 text-gray-500" />
            <span className="text-gray-500 text-sm">Built with modern tech stack</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center gap-4 px-6 pb-6">
        <a
          target="_blank"
          href={link}
          className="text-gray-700 gap-2 hover:underline transition-all hover:text-gray-900 duration-300 flex items-center"
        >
          See Project
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

export default CardProjects;
