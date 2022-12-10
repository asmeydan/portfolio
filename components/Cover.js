import React from "react";
import { BiUserCircle } from 'react-icons/bi';
import pp from '../images/asm_resim.jpeg';
import Image from "next/image";

const Cover = () => {
  return (
    <div className=" pl-20 bg-white height-screen flex flex-col-reverse md:flex-row">
      <div className=" flex-1 flex justify-center flex-col gap-6">
        <h1 className=" text-4xl font-bold">Ahmet Salih Meydan</h1>
        <p>
          Computer Engineer  
          <b> Istanbul, Turkey</b>
        </p>
        <button className=" bg-yellow-500 w-16 h-8 text-sm rounded-sm text-white">Hire Me!</button>
      </div>
      <div className="  flex-1 flex justify-center items-center">
        <Image src={pp} alt="asm" className=" w-52 h-52 rounded-full border-8 border-yellow-500"/>
      </div>
    </div>
  );
};

export default Cover;
