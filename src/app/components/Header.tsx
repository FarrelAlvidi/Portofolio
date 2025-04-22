
import React from "react";
import { TypingAnimation } from '@/app/components/ui/TypingAnimation';

export const Header = () => {
  return (
    <div className="mx-auto ">
      <div className="mb-10">
        <TypingAnimation className="text-3xl font-bold font-mono">Computer Science</TypingAnimation>
        <h2 className="text-neutral-500 my-1 font-mono text-[.9rem]">
          @alvidi.farrel
        </h2>
        <p className="text-neutral-500 mt-5 font-mono  text-justify text-base">&quot;Appreciate every moment before it becomes a memory.&quot;</p>
      </div>
 
    </div>
  );
};
