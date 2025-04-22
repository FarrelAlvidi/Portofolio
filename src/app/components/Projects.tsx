import React from "react";
import { IoIosLink } from "react-icons/io";
import reactLogo from "@/../public/assets/react_original_logo_icon_146374.png";
import tailwindLogo from "@/../public/assets/file_type_tailwind_icon_130128 (1).png";
import laravelLogo from "@/../public/assets/laravel-logo.png";
import Image from "next/image";

const Projects = () => {
  const projects = [
    {
      logo: reactLogo,
      title: "Tugasku",
      desc: "Aplikasi To do list yang berfokus sebagai pengingat tugas.",
      link: 'https://github.com/FarrelAlvidi/Tugasku',
    },
    {
      logo: laravelLogo,
      title: "Library Management",
      desc: "Website pengelolaan perpustakaan yang membantu admin dalam manajemen buku. ",
      link: 'https://github.com/FarrelAlvidi/library-management-sertikom',
    },
    {
      logo: reactLogo,
      title: "TechXperience-Clone",
      desc: "Aplikasi remake menggunakan React Native dan TailwindCss.",
      link: 'https://github.com/FarrelAlvidi/TechXperience-clone',
    },
    {
      logo: tailwindLogo,
      title: "Netflix Frontpage",
      desc: "Iseng buat.",
      link: 'https://nadinegallery.netlify.app/',
    },
  ];
  return (
    <div className="mt-28">
      <h2 className="text-black font-mono text-[1.1rem]">Recent Projects</h2>
      <div className="grid grid-cols-1 mx-3 md:mx-0 md:grid-cols-2 justify-between mt-8 gap-12">
        {projects.map((project, index) => (
          <div className="flex flex-col border-b" key={index}>
            <Image src={project.logo} alt="react" className="w-10 h-10 mb-6" />

            <h4 className="font-mono text-neutral-800">{project.title}</h4>
            <p className="font-mono text-neutral-500 mt-1 text-justify text-[.9rem]">
              {project.desc}
            </p>
            <a href={project.link} target="_blank" className="my-5 w-5">
              <IoIosLink className="text-neutral-600 " size={20} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
