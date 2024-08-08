import React, { useEffect, useState } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { ToggleButton, ToggleButtonGroup, styled } from "@mui/material";

const semiTransparentLightPurple = "rgba(133, 76, 230, 0.25)";

const StyledToggleButton = styled(ToggleButton)(({ theme }) => ({
  color: "#854ce6",
  border: `1px solid #854ce6`,
  borderRadius: "12px",
  padding: "14px",
  "&.Mui-selected": {
    backgroundColor: semiTransparentLightPurple,
    color: "#854ce6",
    "&:hover": {
      backgroundColor: semiTransparentLightPurple,
    },
  },
  "&:not(.Mui-selected)": {
    "&:hover": {
      backgroundColor: semiTransparentLightPurple,
      borderColor: "#854ce6",
    },
  },
}));

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      initial="hidden"
      animate="show"
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const [category, setCategory] = useState("all");
  useEffect(() => {
    console.log("Selected Category:", category);
    console.log("Filtered Projects:", filteredProjects);
  });

  const handleCategoryChange = (event, newCategory) => {
    if (newCategory !== null) {
      setCategory(newCategory);
    }
  };

  // Filter projects based on selected category
  const filteredProjects =
    category === "all"
      ? projects
      : projects.filter((project) => project.category === category);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcase my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos. They reflect my ability to
          solve complex problems, work with different technologies, and manage
          projects effectively.
        </motion.p>
      </div>

      <div className="flex justify-center mt-16">
        <ToggleButtonGroup
          value={category}
          exclusive
          onChange={handleCategoryChange}
          aria-label="project category"
          sx={{ mb: 2 }}
        >
          <StyledToggleButton value="all">All</StyledToggleButton>
          <StyledToggleButton value="web app">Web App</StyledToggleButton>
          <StyledToggleButton value="mobile app">Mobile App</StyledToggleButton>
          <StyledToggleButton value="ml">ML</StyledToggleButton>
        </ToggleButtonGroup>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))
        ) : (
          <p>No projects found for this category.</p>
        )}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
