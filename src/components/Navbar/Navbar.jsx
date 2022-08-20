import React, { useState } from "react";

import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FcDocument } from "react-icons/fc";

import { motion } from "framer-motion";

import { images } from "../../constants";
import "./Navbar.scss";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {["home", "about", "work", "skills", "contact"].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className="navbar__resume-btn">
        <a href="/resume.pdf" className="head__resume" download>
          RESUME
          <FcDocument fontSize={17} />
        </a>
      </div>

      <div className="app__navbar-menu">
        <HiMenuAlt3 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX className="x__icon" onClick={() => setToggle(false)} />
            <ul>
              {["home", "about", "work", "skills", "contact"].map((item) => (
                <li className="mobile-nav-list" key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
              <hr className="border__line" />
              <a href="./resume.pdf" className="head__resume-mobile" download>
                RESUME
                <FcDocument className="doc__icon-mobile" />
              </a>
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
