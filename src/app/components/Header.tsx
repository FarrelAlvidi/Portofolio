
import React from "react";
import { TypingAnimation } from '@/app/components/ui/TypingAnimation';
import img from "@/../public/assets/farel.jpg";

import Image from "next/image";

export const Header = () => {
  return (
    <div className="mx-auto ">
      <div className="mb-10 flex flex-col sm:flex-row items-center gap-8">
        <Image src={img} alt="farrel" width={180} height={180} className="rounded-full grayscale-[0.8]"/>
        <div className="text-center sm:text-left">
          <TypingAnimation className="text-3xl font-bold font-mono">Software Engineering</TypingAnimation>
        <h2 className="text-neutral-500 my-1 bg-linear-to-r from-cyan-500 to-blue-500 font-mono text-[.9rem]">
          @alvidi.farrel
        </h2>
        <p className="text-neutral-500 mt-5 font-mono text-base">&quot;Appreciate every moment before it becomes a memory.&quot;</p>
        </div>
      </div>
 
    </div>
  );
};
