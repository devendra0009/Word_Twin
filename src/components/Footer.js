import React from "react";
import "./Footer.css";
import { FaGithubSquare,FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";


const Footer = ({darkTheme}) => {
  return (
    <div className="footer" style={{color:darkTheme?"white":"black"}}>
      <hr style={{ width: "90%", marginTop: 20 , color:darkTheme?"white":"black"}} />
      <span className="name">
        Made by{" "}
        <a href="" target="__blank" style={{color:darkTheme?"white":"black"}}>
          Davendra Bedwal
        </a>
      </span>
      <div className="iconContainer" >
        <a href="https://github.com/devendra0009" target="__blank" style={{color:darkTheme?"white":"black"}}>
        <FaGithubSquare size='33px'/>
        </a>
        <a href="https://www.linkedin.com/in/davendra-bedwal-09608b232/" target="__blank" style={{color:darkTheme?"white":"black"}}>
        <FaLinkedin size='33px'/>
        </a>
        <a href="https://leetcode.com/devendra0009/" target="__blank" style={{color:darkTheme?"white":"black"}}>
        <SiLeetcode size='33px'/>
        </a>
      </div>
    </div>
  );
};

export default Footer;