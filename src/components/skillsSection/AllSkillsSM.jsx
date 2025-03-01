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

const AllSkillsSM = () => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12">
      {skills.map((item, index) => {
        return (
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            key={index}
            className="flex flex-col items-center"
          >
            <item.icon className="text-7xl text-orange" />
            <p className="text-center mt-4">{item.skill}</p>
          </motion.div>
        );
      })}
    </div>
  );
};

export default AllSkillsSM;
