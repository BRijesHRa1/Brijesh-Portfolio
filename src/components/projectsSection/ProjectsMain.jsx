import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Music Genre Classification using GTZAN",
    Des: "Built a music genre classification system using the GTZAN dataset, employing ML and DL models like KNN, SVM, Random Forests, and CNNs. Achieved the highest accuracy with CNNs by analyzing Mel-spectrograms. The project focused on model comparison, feature analysis, and baseline evaluation, with applications in personalized recommendations and commercial music selection.",
    align: "right",
    image: "/public/images/website-img-1.png",
    link: "https://github.com/BRijesHRa1/Music-Genre-Classification-using-GTZAN",
  },
  
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              Des={project.Des}
              align={project.align}
              image={project.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
