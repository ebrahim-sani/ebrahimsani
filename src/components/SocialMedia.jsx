import React from "react";
import { GrInstagram } from "react-icons/gr";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div
        onClick={() => window.open("https://www.linkedin.com/in/ebrahim-sani/")}
      >
        <FaLinkedinIn />
      </div>
      <div
        onClick={() =>
          window.open("https://www.upwork.com/freelancers/~011c9d04ca67a1e4e2")
        }
      >
        <SiUpwork />
      </div>
      <div onClick={() => window.open("https://www.github.com/ebrahim-sani/")}>
        <FaGithub />
      </div>
      <div
        onClick={() => window.open("https://www.instagram.com/ebrahiimsani/")}
      >
        <GrInstagram />
      </div>
    </div>
  );
};

export default SocialMedia;
