import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { BsCode } from "react-icons/bs";
import { BsServer } from "react-icons/bs";

const Skills = () => {
  return (
    <div className=" p-20 flex flex-col md:flex-row justify-between">
      <div>
        <h1 className=" text-xl font-bold">Yıldız Technical University</h1>
        <p className=" font-semibold leading-7">
          Computer Engineering <br /> 1. Year
        </p>
      </div>

      <div className=" flex flex-col gap-4">
        <p className=" font-medium text-sm">
          Frontend Developer and Backend Developer.
        </p>
        <div className=" flex gap-3">
          <div className=" w-40 h-40 bg-yellow-400 text-white flex flex-col text-xs justify-end items-start p-4">
          <div>
              <BsCode className=" text-3xl" />
            </div>
            <p>Frontend Developer</p>
            <div className=" flex items-center gap-4">
              Discover More <FiArrowRight />
            </div>
          </div>
          <div className=" w-40 h-40 bg-gray-500 text-white flex flex-col text-xs justify-end items-start p-4">
            <div>
              <BsServer className=" text-3xl" />
            </div>
            <p>Backend Developer</p>
            <div className=" flex items-center gap-4">
              Discover More <FiArrowRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
