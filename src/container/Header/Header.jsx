import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AppWrap } from "../../wrapper";
import { client, urlFor } from "../../client";

import "./Header.scss";

const Header = () => {
  const [heroItem, setHeroItem] = useState([]);

  useEffect(() => {
    const query = '*[_type == "header"]';

    client.fetch(query).then((data) => {
      // console.log(data);
      setHeroItem(data);
    });
  }, []);

  return ( 
    <div >
      {heroItem.map((hero) => (
        <div className="app__header app__flex">
          <div className="app__header-left">
            <div className="app__header-item">
              <motion.h3
                whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
              >
                Hi there<span>👋</span>, I'm
              </motion.h3>

              <motion.h1
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5, delayChildren: 0.5 }}
              >
                Ibrahim<span>.</span>
              </motion.h1>

              <strong>{hero.workTitle} 👨‍💻</strong>

              <p>
                {/* I'm a front-end web developer and web3 enthusiast based in
                <span> Biu, Nigeria</span>. I'm passionate about creating
                interactive applications and experience on the web. */}
                {hero.workDesc}
              </p>

              <a href="/#contact">Contact</a>
            </div>
          </div>

          <div className="app__header-right">
            <motion.img
              whileInView={{ scale: [0, 1] }}
              transition={{ duration: 1, ease: "easeInOut" }}
              src={urlFor(hero.profileImg)}
              alt="profile_circle"
              className="overlay_circle"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default AppWrap(Header, "home");
