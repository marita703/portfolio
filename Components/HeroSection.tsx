"use client";
import React from "react";
import heroImage from "public/Images/Mar.png";
import Image from "next/image";

import { TypeAnimation } from "react-type-animation";

import { motion } from "framer-motion";

function HeroSection() {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500 ">
              Hey, I am{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Mar!",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Web3 Developer",
                1000,
                "Mobile Developer",
                1000,
                "Web Developer",
                1000,
              ]}
              wrapper="span"
              speed={40}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7be] text-base sm:text-lg lg:text-xl mb-6">
            I create seamless and user-friendly Web3 experiences. Specializing
            in front-end design and on-Chain integrations, I bring your
            decentralized projects to life.
          </p>
          <div>
            <button className="px-6 w-full sm:w-fit py-3 rounded-full mr-4 bg-gradient-to-br from-lime-500 via-primary-500 hover:bg-slate-200 text-white">
              Hire Me!
            </button>
            <button className="px-1 py-1 w-full sm:w-fit  rounded-full bg-gradient-to-br from-lime-500 via-primary-700 to-secondary-700 hover:bg-slate-800 text-white  mt-3">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:m-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              src={heroImage}
              alt="hero"
              width={400}
              height={400}
            ></Image>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
