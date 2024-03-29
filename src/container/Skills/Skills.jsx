import React, { useEffect, useState } from "react";
import "./Skills.scss";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import ReactTooltip from "react-tooltip";

const Skills = () => {
   const [skills, setSkills] = useState([]);
   const [experience, setExperience] = useState([]);

   useEffect(() => {
      const query = '*[_type == "experiences"]';
      const skillsQuery = '*[_type == "skills"]';

      client.fetch(skillsQuery).then((data) => {
         setSkills(data);
      });

      client.fetch(query).then((data) => {
         // console.log(data);
         setExperience(data);
      });
   }, []);

   return (
      <>
         <h2 className="head-text">Experience & Skills</h2>

         <div className="app__skills-container">
            <motion.div className="app__skills-list">
               {skills.map((skill, i) => (
                  <motion.div
                     whileInView={{ opacity: [0, 1] }}
                     transition={{ duration: 0.5 }}
                     className="app__skills-item app__flex"
                     key={skill.name + i}
                  >
                     <div
                        className="app__flex"
                        style={{ backgroundColor: skill?.bgColo }}
                     >
                        <img src={urlFor(skill?.icon)} alt={skill?.name} />
                     </div>
                     <p className="p-text">{skill?.name}</p>
                  </motion.div>
               ))}
            </motion.div>

            <motion.div className="app__skills-exp">
               {experience?.map((experience, index) => (
                  <motion.div
                     className="app__skills-exp-item"
                     key={experience.year + index}
                  >
                     <div className="app__skills-exp-year">
                        <p className="bold-text">{experience?.year}</p>
                     </div>

                     <motion.div className="app__skills-exp-works">
                        {experience?.works?.map((work, i) => (
                           <>
                              <motion.div
                                 whileInView={{ opacity: [0, 1] }}
                                 transition={{ duration: 0.5 }}
                                 className="app__skills-exp-work"
                                 key={work.name + i}
                                 data-tip
                                 data-for={work.name}
                              >
                                 <h4 className="bold-text">{work.name}</h4>
                                 <p className="text">{work.company}</p>
                              </motion.div>
                              <ReactTooltip
                                 id={work.name}
                                 effect="solid"
                                 arrowColor="#fff"
                                 className="skills-tooltip"
                              >
                                 {work.desc}
                              </ReactTooltip>
                           </>
                        ))}
                     </motion.div>
                  </motion.div>
               ))}
            </motion.div>
         </div>
      </>
   );
};

export default AppWrap(
   MotionWrap(Skills, "app__skills"),
   "skills",
   "app__whitebg",
);
