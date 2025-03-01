import AllSkills from "./AllSkills";
import AllSkillsSM from "./AllSkillsSM";
import SkillsText from "./SkillsText";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const SkillsMain = () => {
  return (
    <div id="skills">
      <div className="max-w-[1200px] px-4 mx-auto min-h-[400px] relative overflow-hidden flex flex-col items-center">
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
        >
          <SkillsText />
        </motion.div>

        {/* Skills Section - Fix Alignment */}
        <div className="w-full mt-10">
          <div className="hidden lg:flex justify-center">
            <AllSkills />
          </div>
          <div className="sm:flex lg:hidden justify-center">
            <AllSkillsSM />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsMain;
