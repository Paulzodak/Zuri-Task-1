import "./App.css";
import profileImage from "./images/profile_img.svg";
import LinkItem from "./components/LinkItem";

function App() {
  return (
    <div className="App">
      <section className="image-container">
        <img id={"profile_img"} src={profileImage} alt={"Profile_Picture"} />
        <h1 id={"twitter"}>OjePaul</h1>
        <h1 id={"slack"}> Oje Paul</h1>
        <LinkItem />
      </section>
    </div>
  );
}

export default App;
