import React, { useEffect, useState } from "react";
import "./About.scss";
import { motion } from "framer-motion";
import { urlFor, client } from "../../client";
import { AppWrap } from "../../wrapper";
import { MotionWrap } from "../../wrapper";

const About = () => {
   const [abouts, setAbouts] = useState([]);

   useEffect(() => {
      const query = '*[_type == "abouts"]';

      client.fetch(query).then((data) => {
         setAbouts(data);
      });
   }, []);

   return (
      <>
         <div className="overview">
            <div>
               <p>INTRODUCTION</p>
               <h2 className="head-text">
                  Over<span>view</span>
               </h2>
            </div>

            <p className="p-text">
               As an experienced frontend developer proficient in JavaScript and
               TypeScript, I specialize in frameworks such as React, Node.js,
               Next.js, and TailwindCSS. I prioritize delivering efficient,
               scalable, and user-friendly solutions to real-world challenges
               while collaborating closely with clients. In my free time, I
               enjoy football, video games, and going to the gym. I am a quick
               learner, constantly updating my skills to stay current. Let's
               work together to bring your ideas to life with exceptional
               solutions.
            </p>
         </div>

         <div className="app__profiles">
            {abouts?.map((about, index) => (
               <motion.div
                  className="app__profile-item"
                  key={about?.title + index}
                  whileInView={{ opacity: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5, type: "tween" }}
               >
                  <img src={urlFor(about?.imgUrl)} alt={about?.title} />
                  <h2 className="bold-text" style={{ marginTop: 20 }}>
                     {about?.title}
                  </h2>
                  <h2 className="p-text" style={{ marginTop: 10 }}>
                     {about?.description}
                  </h2>
               </motion.div>
            ))}
         </div>
      </>
   );
};

export default AppWrap(
   MotionWrap(About, "app__about"),
   "about",
   "app__whitebg",
);
