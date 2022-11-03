import React from "react";
import "./MobileApp.css";
import profileImage from "./images/my_profile_img.jpg";
import LinkItem from "./components/LinkItem";
import zuriIcon from "./images/zuri.svg";
import Iicon from "./images/I4G.svg";
import slack_logo from "./images/slack.svg";
import github_logo from "./images/github.svg";
import linkMobile from "./images/linkMobile.svg";

const MobileApp = ({ links }) => {
  return (
    <div className="App">
      <section className="image-container">
        <img id={"profile__img"} src={profileImage} alt={"Profile_Picture"} />
        <h1 id={"twitter"}>OjePaul</h1>
        <h1 id={"slack"}> Paul</h1>
        <img src={linkMobile} alt={"link_icon"} className="link" />
      </section>

      <section>
        {links.map((item) => (
          <LinkItem mobile item={item} />
        ))}
      </section>

      <section id={"socials"}>
        <img className="logo" src={slack_logo} alt={"slack_logo"}></img>
        <img className="logo" src={github_logo} alt={"github_logo"}></img>
      </section>
      <hr className="hr" />
      <footer id="footer_mobile">
        <img className="zuri" src={zuriIcon} alt={"zuriIcon"}></img>
        <div className="hng"> HNG Internship 9 Frontend Task</div>
        <img className="ingressive" src={Iicon} alt={"14Gicon"}></img>
      </footer>
    </div>
  );
};

export default MobileApp;
