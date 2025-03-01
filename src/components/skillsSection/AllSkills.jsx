import SingleSkill from "./SingleSkill";

import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript, SiSpringboot, SiMongodb, SiKubernetes, SiPytorch, SiTensorflow, SiScikitlearn } from "react-icons/si";
import { FaReact, FaPython, FaJava,FaAws, FaNodeJs, FaDatabase, FaDocker, FaGit } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const skills = [
  { skill: "Python", icon: FaPython },
  { skill: "Java", icon: FaJava },
  {
    skill: "JavaScript",
    icon: IoLogoJavascript,
  },
  {
    skill: "TypeScript",
    icon: SiTypescript,
  },
  {
    skill: "ReactJS",
    icon: FaReact,
  },
  { skill: "Spring Boot", icon: SiSpringboot },
  { skill: "Node.js", icon: FaNodeJs },
  { skill: "SQL", icon: FaDatabase },
  { skill: "MongoDB", icon: SiMongodb },
  { skill: "AWS", icon: FaAws },
  { skill: "Docker", icon: FaDocker },
  { skill: "Kubernetes", icon: SiKubernetes },
  { skill: "Git", icon: FaGit },
  { skill: "PyTorch", icon: SiPytorch },
  { skill: "TensorFlow", icon: SiTensorflow },
  { skill: "scikit-learn", icon: SiScikitlearn },

  
  

];

const AllSkills = () => {
  return (
    <div>
      <div className="grid grid-cols-8 items-center justify-center relative gap-4 max-w-[1200px] mx-auto">
        {skills.map((item, index) => {
          return (
            <motion.div
              variants={fadeIn("up", `0.${index}`)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
              key={index}
            >
              <SingleSkill
                key={index}
                text={item.skill}
                imgSvg={<item.icon />}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AllSkills;
