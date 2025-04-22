import React from "react";

export const Footer = () => {
  return (
    <div className="">
        <hr />
          <footer className="max-w-2xl mx-auto flex gap-3 font-mono py-8">
              <p className="text-[.85rem] underline text-neutral-500 underline-offset-2 hover:text-neutral-700 duration-300"><a href="">Linkedin</a></p>
              <p className="text-[.85rem] underline text-neutral-500 underline-offset-2 hover:text-neutral-700 duration-300"><a href="">Github</a></p>
              <p className="text-[.85rem] underline text-neutral-500 underline-offset-2 hover:text-neutral-700 duration-300"><a href="">Instagram</a></p>
              <p className="text-[.85rem] underline text-neutral-500 underline-offset-2 hover:text-neutral-700 duration-300"><a href="">Email</a></p>
        </footer>
    </div>
  );
};
