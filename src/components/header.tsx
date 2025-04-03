"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const Header = () => {
  return (
    <section className="max-w-[1280px] mx-auto px-4 mt-40 grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Текстовый контент */}
      <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left">
        <h1 className="text-white max-w-2xl mb-4 text-4xl lg:text-6xl font-extrabold">
          <span className="text-transparent text-6xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Hello, I'm{" "}
          </span>
          <br />
          <TypeAnimation
            sequence={["Ivan", 1000, "Web Developer", 1000]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>
        <p className="text-[#ADB7BE] mb-6 text-lg lg:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          voluptatum.
        </p>
        <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4">
          <button className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white px-6 py-3 rounded-full">
            Hire Me
          </button>
          <button className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 px-1 py-1 text-white rounded-full">
            <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
              Download CV
            </span>
          </button>
        </div>
      </div>
      {/* Изображение */}
      <div className="lg:col-span-5 flex justify-center items-center">
        <div className="bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] rounded-full relative">
          <Image
            src="/images/hero_image.png"
            alt="hero image"
            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            width={300}
            height={300}
          />
        </div>
      </div>
    </section>
  );
};

export default Header;
