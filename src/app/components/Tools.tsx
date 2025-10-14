import React from "react";
import { HoverEffect } from "@/app/components/ui/card-hover-effect";
import tailwindLogo from "@/../public/assets/file_type_tailwind_icon_130128 (1).png";
import figmaLogo from "@/../public/assets/figma-logo.webp";
import laravelLogo from "@/../public/assets/laravel-logo.png";
import reactLogo from "@/../public/assets/react_original_logo_icon_146374.png";

const tools = [
  {
    logo: tailwindLogo,
    title: "Tailwind CSS",
    description: "To build and design web pages more faster and easier.",
    link: "https://tailwindcss.com/",
  },
  {
    logo: figmaLogo,
    title: "Figma",
    description: "Tools for UI/UX Design.",
    link: "https://figma.com/",
  },
  {
    logo: laravelLogo,
    title: "Laravel",
    description: "PHP web framework used to build web applications.",
    link: "https://laravel.com/",
  },
  {
    logo: reactLogo,
    title: "React",
    description: "A Javascript library for building composable user interfaces.",
    link: "https://react.dev/",
  },
];

const Tools = () => {
  return (
    <div className="">
      <h2 className="text-black font-mono text-[1.6rem]">Featured Tools</h2>
      <HoverEffect items={tools} />
    </div>
  );
};

export default Tools;
