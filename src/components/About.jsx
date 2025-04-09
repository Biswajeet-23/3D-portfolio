import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card hover:shadow-xl transition-all duration-300"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col hover:bg-tertiary/80 transition-all duration-300"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />

          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <motion.div variants={textVariant()} className="mb-8">
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        <motion.div variants={fadeIn("", "", 0.1, 1)} className="space-y-6">
          <div className="bg-[#1d1836] p-6 rounded-2xl backdrop-blur-sm">
            <h3 className="text-white text-2xl font-bold mb-4">
              Professional Summary
            </h3>
            <p className="text-secondary text-[17px] leading-[30px] text-justify">
              <span className="text-white font-[500]">1+ years</span>{" "}
              experienced Full-Stack Developer with expertise in{" "}
              <span className="text-white font-[500]">
                JavaScript technologies{" "}
              </span>
              across the entire development stack. Specializing in building
              <span className="text-white font-[500]"> secure</span>,{" "}
              <span className="text-white font-[500]">scalable web</span> and{" "}
              <span className="text-white font-[500]">mobile applications</span>{" "}
              that handle real-world user loads. Passionate about writing clean,
              maintainable code and staying current with emerging technologies.
            </p>
          </div>

          <div className="bg-[#1d1836] rounded-2xl backdrop-blur-sm p-6">
            <h3 className="text-white text-2xl font-bold mb-4">
              Key Expertise
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <tbody className="space-y-3">
                  <tr className="border-b border-transparent">
                    <td className="py-3 pr-4">
                      <span className="text-white font-bold">✓</span>
                    </td>
                    <td className="py-3 pr-2">
                      <span className="text-white font-semibold">
                        Backend Development:
                      </span>
                    </td>
                    <td className="py-3 text-secondary">
                      NestJS, Express (OAuth, RBAC for 5,000+ users)
                    </td>
                  </tr>
                  <tr className="border-b border-transparent">
                    <td className="py-3 pr-4">
                      <span className="text-white font-bold">✓</span>
                    </td>
                    <td className="py-3 pr-2">
                      <span className="text-white font-semibold">
                        Payment Integration:
                      </span>
                    </td>
                    <td className="py-3 text-secondary">
                      Razorpay workflows & Google Calendar sync
                    </td>
                  </tr>
                  <tr className="border-b border-transparent">
                    <td className="py-3 pr-4">
                      <span className="text-white font-bold">✓</span>
                    </td>
                    <td className="py-3 pr-2">
                      <span className="text-white font-semibold">
                        Mobile Development:
                      </span>
                    </td>
                    <td className="py-3 text-secondary">
                      Android apps (500+ downloads, 4.9 rating)
                    </td>
                  </tr>
                  <tr className="border-b border-transparent">
                    <td className="py-3 pr-4">
                      <span className="text-white font-bold">✓</span>
                    </td>
                    <td className="py-3 pr-2">
                      <span className="text-white font-semibold">
                        Frontend:
                      </span>
                    </td>
                    <td className="py-3 text-secondary">
                      React, Next.js, Tailwind, Three.js 3D experiences
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">
                      <span className="text-white font-bold">✓</span>
                    </td>
                    <td className="py-3 pr-2">
                      <span className="text-white font-semibold">
                        Databases & DevOps:
                      </span>
                    </td>
                    <td className="py-3 text-secondary">
                      MongoDB, GraphQL, Docker, Firebase
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>

        <motion.div variants={fadeIn("", "", 0.1, 1)}>
          <div className="bg-[#1d1836] p-6 rounded-2xl backdrop-blur-sm">
            <h3 className="text-white text-2xl font-bold mb-4">
              Recent Achievements
            </h3>
            <ul className="space-y-4 text-secondary text-[17px]">
              <li className="flex items-start">
                <span className="text-white font-bold mr-2 mb-3">•</span>
                <span>
                  Built Google/LinkedIn OAuth and PDF export systems at Avadhuta
                  Technologies
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-white font-bold mr-2 mb-3">•</span>
                <span>
                  Developed MERN apps (Expense Tracker, Blog App) with JWT auth
                  and 40% faster queries
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-white font-bold mr-2 mb-3">•</span>
                <span>
                  Launched Android app with 500+ downloads and 4.9 rating,
                  optimized performance by 30%
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-white font-bold mr-2 mb-3">•</span>
                <span>
                  Architected secure APIs handling 5,000+ users with encrypted
                  data flows
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-white font-bold mr-2 mb-3">•</span>
                <span>Solved 250+ Data Structures and Algorithms problems</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>

      <div className="mt-20">
        <h3 className="text-white text-2xl font-bold mb-8 text-center">
          Technical Skills
        </h3>
        <div className="flex flex-wrap gap-10 justify-center">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
