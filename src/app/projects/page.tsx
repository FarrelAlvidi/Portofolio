import React from "react";
import reactLogo from "@/../public/assets/react_original_logo_icon_146374.png";
import tailwindLogo from "@/../public/assets/file_type_tailwind_icon_130128 (1).png";
import laravelLogo from "@/../public/assets/laravel-logo.png";
import Image from "next/image";
import CardProjects from "../components/CardProjects";

const ProjectsPage = () => {
  const projects = [
    {
      logo: reactLogo,
      title: "Tugasku",
      desc: "Aplikasi To do list yang berfokus sebagai pengingat tugas.",
      link: "https://github.com/FarrelAlvidi/Tugasku",
    },
    {
      logo: laravelLogo,
      title: "Library Management",
      desc: "Website pengelolaan perpustakaan yang membantu admin dalam manajemen buku. ",
      link: "https://github.com/FarrelAlvidi/library-management-sertikom",
    },
    {
      logo: reactLogo,
      title: "TechXperience-Clone",
      desc: "Aplikasi remake menggunakan React Native dan TailwindCss.",
      link: "https://github.com/FarrelAlvidi/TechXperience-clone",
    },
    {
      logo: tailwindLogo,
      title: "Netflix Frontpage",
      desc: "Iseng buat.",
      link: "https://nadinegallery.netlify.app/",
    },
    {
      logo: reactLogo,
      title: "MoodTracker",
      desc: "Aplikasi untuk melacak suasana hati pengguna.",
      link: "https://github.com/FarrelAlvidi/MoodTracker",
    },
    {
      logo: tailwindLogo,
      title: "Landing Page Hotel",
      desc: "Desain halaman landing page yang menarik untuk sebuah hotel.",
      link: "https://github.com/FarrelAlvidi/Sertikom-2024-Pemesanan-Hotel",
    },
  ];
  return (
    <div className="py-10 px-4  sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 className="text-black text-center font-mono text-3xl sm:text-4xl">
        Portfolio
      </h2>
      <p className="text-neutral-500 text-center mt-2 font-mono text-sm sm:text-base max-w-2xl mx-auto">
        Here are some of my projects that I have worked on, showcasing my skills
        and experience in software development.
      </p>
      <hr className="my-10 sm:my-14 border-neutral-300" />
      <div className="flex flex-col items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <CardProjects
              key={index}
              img={project.logo}
              title={project.title}
              desc={project.desc}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
