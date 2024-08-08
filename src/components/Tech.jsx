import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { skills, technologies } from "../constants";
import styled from "styled-components";
import { motion } from "framer-motion";
import { fadeIn, slideIn, textVariant } from "../utils/motion";
import { styles } from "../styles";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

export const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 30px;
  justify-content: center;
`;

const Skill = styled.div`
  width: 100%;
  max-width: 500px;
  background: ${({ theme }) => theme.card};
  border: 0.1px solid #854ce6;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 18px 36px;
  @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }
  @media (max-width: 500px) {
    max-width: 330px;
    padding: 10px 36px;
  }
`;

const SkillTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 20px;
  text-align: center;
`;

const SkillList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`;

const SkillItem = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 80};
  border: 1px solid #854ce6;
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`;

const SkillImage = styled.img`
  width: 24px;
  height: 24px;
`;

const TechCard = ({ skill, index }) => {
  return (
    <motion.div variants={fadeIn("right", "spring", index * 0.5, 0.75)}>
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
      >
        <Skill>
          <SkillTitle>{skill.title}</SkillTitle>
          <SkillList>
            {skill.skills.map((item) => (
              <SkillItem key={item.name}>
                <SkillImage src={item.image} />
                {item.name}
              </SkillItem>
            ))}
          </SkillList>
        </Skill>
      </div>
    </motion.div>
  );
};

const Tech = () => {
  return (
    <Container id="skills">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          Here are some of my skills
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Skills</h2>
      </motion.div>
      <SkillsContainer>
        {skills.map((skill, index) => (
          <TechCard key={skill.id} skill={skill} index={index} />
        ))}
      </SkillsContainer>
    </Container>
  );
};

export default SectionWrapper(Tech, "");
