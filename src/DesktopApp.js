import "./DesktopApp.css";
import profileImage from "./images/my_profile_img.jpg";
import LinkItem from "./components/LinkItem";
import zuriIcon from "./images/zuri.svg";
import Iicon from "./images/I4G.svg";
import slack_logo from "./images/slack.svg";
import github_logo from "./images/github.svg";
import linkDesktop from "./images/linkDesktop.svg";

function DesktopApp() {
  const links = [
    {
      Header: "Twitter Link",
      Link: "https://twitter.com/OjePaul",
    },
    {
      Header: "Zuri Team",
      Link: "https://training.zuri.team/",
      ID: "btn_zuri",
    },
    {
      Header: "Zuri Books",
      Link: "http://books.zuri.team",
      ID: "books",
    },
    {
      Header: "Python Books",
      Link: "https://books.zuri.team",
      ID: "book_python",
    },
    {
      Header: "Background Check for Coders",
      Link: "https://background.zuri.team",
      ID: "pitch",
    },
    {
      Header: "Design Books",
      Link: "https://books.zuri.team/design-rules",
      ID: "book_design",
    },
  ];
  return (
    <div className="App">
      <section className="image-container">
        <img id={"profile_img"} src={profileImage} alt={"Profile_Picture"} />
        <h1 id={"twitter"}>OjePaul</h1>
        <h1 id={"slack"}>Paul</h1>
        <img src={linkDesktop} alt={"link_icon"} className="link" />
      </section>

      <section>
        {links.map((item) => (
          <LinkItem item={item} />
        ))}
      </section>

      <section id={"socials"}>
        <img className="logo" src={slack_logo} alt={"slack_logo"}></img>
        <img className="logo" src={github_logo} alt={"github_logo"}></img>
      </section>
      <hr className="hr" />
      <footer id="footer">
        <img className="zuri" src={zuriIcon} alt={"zuriIcon"}></img>
        <div className="hng"> HNG Internship 9 Frontend Task</div>
        <img className="ingressive" src={Iicon} alt={"14Gicon"}></img>
      </footer>
    </div>
  );
}

export default DesktopApp;
