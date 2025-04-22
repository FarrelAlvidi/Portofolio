import About from "./components/About";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { NavBar } from "./components/NavBar";
import Projects from "./components/Projects";
import Tools from "./components/Tools";

export default function Home() {
  return (
    <div className="">
      <div className="mx-auto items-center min-h-screen px-6 lg:px-12 py-10 max-w-3xl pb-20 font-[family-name:var(--font-atkinson)]">
        <Header />
        <hr className="my-14" />
        <Tools />
        <hr className="my-14" />
        <About />
        <Projects />
      </div>
      <Footer/>
    </div>
  );
}
