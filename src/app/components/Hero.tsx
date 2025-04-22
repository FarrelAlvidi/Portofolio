import React from 'react'
import TextPressure from './TextPressure'

// import Image from 'next/image'

export const Hero = () => {
  return (
    <div className="  py-44 items-center justify-center flex flex-col">
      <div className="lg:w-[70%] w-96">
        <TextPressure
          text="Farrel Alvidi"
          flex={false}
          alpha={false}
          stroke={false}
          width={true}
          weight={true}
          italic={true}
          textColor="#000000"
          strokeColor="#ff0000"
          minFontSize={36}
        />
      </div>
    </div>
  );
}
