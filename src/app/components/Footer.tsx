import React from "react";

export const Footer = () => {
  return (
    <div className="border-t mt-14">
          <footer className="max-w-2xl mx-auto flex gap-3 font-mono py-8 px-6">
              <p className="text-[.85rem] underline text-neutral-500 underline-offset-2 hover:text-neutral-700 duration-300"><a href="https://www.linkedin.com/in/farrel-alvidi-356688330/">Linkedin</a></p>
              <p className="text-[.85rem] underline text-neutral-500 underline-offset-2 hover:text-neutral-700 duration-300"><a href="https://github.com/FarrelAlvidi">Github</a></p>
              <p className="text-[.85rem] underline text-neutral-500 underline-offset-2 hover:text-neutral-700 duration-300"><a href="https://www.instagram.com/alvidi.farrel/">Instagram</a></p>
              <p className="text-[.85rem] underline text-neutral-500 underline-offset-2 hover:text-neutral-700 duration-300"><a href="">Email</a></p>
        </footer>
    </div>
  );
};
