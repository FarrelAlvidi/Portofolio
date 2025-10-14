import { Facebook, Twitter, Linkedin, Instagram, Youtube, Dribbble, Mail, Github } from 'lucide-react';
import { ArrowUpRight } from "lucide-react";
import React from "react";
import Tools from "../components/Tools";
import Image from 'next/image';
import bgfoto from "@/../public/assets/poto1.jpg";

const AboutPage = () => {
    const socialLinks = [
    // { name: 'Facebook', icon: Facebook, url: '#' },
    { name: 'Twitter', icon: Twitter, url: '#' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/farrel-alvidi-356688330/' },
    { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/alvidi.farrel/' },
    { name: 'YouTube', icon: Youtube, url: 'https://www.youtube.com/@alvidi3547' },
    // { name: 'Dribbble', icon: Dribbble, url: '#' },
    { name: 'Email', icon: Mail, url: '#' },
    { name: 'GitHub', icon: Github, url: 'https://github.com/FarrelAlvidi' },
  ];
  return (
    <div className="py-4">
      <h2 className="text-3xl font-mono mb-2">About Page</h2>
      <p className="text-gray-500 text-[.9rem] font-mono">This is the about page of my portfolio website.</p>
      <div className="w-full h-64 bg-white mt-6">
        <Image src={bgfoto} alt="Background" className="w-full h-full object-cover " />
      </div>
      <div className="flex lg:flex-row  gap-32 flex-col mt-14">
          <div className="lg:w-2/3">
            <h2 className="text-black font-mono text-[1.6rem]">About Me</h2>
            <p className="text-neutral-500 mt-2 font-mono  text-justify text-[.9rem]">
              Perkenalkan nama saya Muhammad Farrel Alvidi bisa dipanggil
              Farrel, saya siswa SMK Pesat ITXPRO yang tertarik pada bidang
              Rekayasa Perangkat Lunak dan saya berkompetensi pada bidang
              jurusan ini.
            </p>
            <a href="/about" className="font-mono flex gap-2 items-center mt-5">More About Me <ArrowUpRight className="h-4 w-4" /></a>
          </div>
          <div className="lg:w-1/3">
            <h2 className="text-black font-mono text-[1.3rem]">Education</h2>
            <p className="text-black mt-2 font-mono  text-justify text-[.9rem]">
              SMK Informatika Pesat</p>
            <p className="text-neutral-500 mt-1 font-mono  text-justify text-[.8rem]">2023 - Present</p>
            <p className="text-black mt-5 font-mono  text-justify text-[.9rem]">
              SMP Islam Ibnu Hajar</p>
            <p className="text-neutral-500 mt-1 font-mono  text-justify text-[.8rem]">2020 - 2023</p>
          </div>
        </div>
        <hr className="my-14" />
        <Tools/>
        <hr className="my-14" />
        <h2 className="text-black font-mono text-[1.6rem]">Follow my social media</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
        {socialLinks.map((social) => (
          <a
            target="_blank"
            key={social.name}
            href={social.url}
            className="group px-6 py-6 bg-gray-50 hover:bg-gray-100 border border-gray-200 hover:border-gray-500 rounded-md transition-all duration-200 flex items-center gap-3"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            <social.icon size={20} className="text-gray-800 group-hover:scale-110 transition-transform" />
            <span className="text-gray-900 font-light text-sm">{social.name}</span>
          </a>
        ))}
      </div>
        
    </div>
  );
};

export default AboutPage;
