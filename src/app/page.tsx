
import About from "./components/About";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { NavBar } from "./components/NavBar";
import Projects from "./components/Projects";
import Tools from "./components/Tools";
import { ArrowUpRight } from "lucide-react";

export default function Home() {
  return (
    <div className="">

      <div className=" font-[family-name:var(--font-atkinson)]">
        <Header />
        {/* <Tools /> */}
        <hr className="my-14" />
        <div className="flex lg:flex-row  gap-32 flex-col">
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
        <div className="flex justify-between items-center">
          <h2 className="text-black font-mono text-[1.6rem]">Portfolio</h2>
          <a href="/projects" className="text-sm text-neutral-700 font-mono flex gap-2 items-center mt-5">See All Projects <ArrowUpRight className="h-4 w-4" /></a>
        </div>

      </div>
      <Footer />
    </div>
  );
}
