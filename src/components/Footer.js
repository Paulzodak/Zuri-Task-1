import React from "react";
import zuriIcon from "../images/zuri.svg";
import Iicon from "../images/I4G.svg";
import slack_logo from "../images/slack.svg";
import github_logo from "../images/github.svg";
import linkDesktop from "../images/linkDesktop.svg";
import classes from "./Footer.module.css";
const Footer = ({ mobile }) => {
  return (
    <>
      <footer
        className={mobile ? classes.footer_mobile : classes.footer}
        // id="footer"
      >
        <img className="zuri" src={zuriIcon} alt={"zuriIcon"}></img>
        <div className="hng"> HNG Internship 9 Frontend Task</div>
        <img className="ingressive" src={Iicon} alt={"14Gicon"}></img>
      </footer>
    </>
  );
};

export default Footer;
