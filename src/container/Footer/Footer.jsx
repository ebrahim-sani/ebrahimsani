import React from "react";
import "./Footer.scss";
import { GrInstagram } from "react-icons/gr";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";

import { images } from "../../constants";

const Footer = () => {
  return (
    <div className="app__footer app__flex">
      {/* logo & footer links div */}
      <div className="app__footer-item">
        <div className="app__footer-logo">
          <img src={images.footerLogo} alt="logo" />
        </div>
        <div className="app__footer-links">
          <p className="p-text">About</p>
          <p className="p-text">Works</p>
          <p className="p-text">Skills</p>
          <p className="p-text">Testimonials</p>
        </div>
      </div>

      {/* social icons div */}
      <div className="app__footer-social">
        <div
          onClick={() =>
            window.open("https://www.linkedin.com/in/ebrahim-sani/")
          }
        >
          <FaLinkedinIn />
        </div>
        <div
          onClick={() =>
            window.open(
              "https://www.upwork.com/freelancers/~011c9d04ca67a1e4e2",
            )
          }
        >
          <SiUpwork />
        </div>
        <div
          onClick={() => window.open("https://www.github.com/ebrahim-sani/")}
        >
          <FaGithub />
        </div>
        <div
          onClick={() => window.open("https://www.instagram.com/ebrahiimsani/")}
        >
          <GrInstagram />
        </div>
      </div>

      {/* border line & copy */}
      <div className="app__footer-border" />
      <div className="app__footer-copy">
        <p className="p-text">&copy;Ibrahim 2022</p>
        <p className="p-text">All Right Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
