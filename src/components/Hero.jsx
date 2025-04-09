import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { anime_bg, anime_char } from "../assets";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm{" "}
            <div>
              <span className="text-[#915EFF]">Biswajeet</span>
            </div>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop web apps, <br className="md:block hidden" />
            user interfaces and <br className="md:block hidden" />
            mobile applications.
          </p>
        </div>
      </div>

      <img
        src={anime_char}
        alt="Background"
        className="absolute bottom-0 top-1/2 left-2/3 transform -translate-x-1/2 -translate-y-1/2 object-cover w-[300px] md:w-[440px] lg:w-[480px] h-auto max-w-full rounded-3xl mb-5"
      />
      {/* <ComputersCanvas /> */}
    </section>
  );
};

export default Hero;
