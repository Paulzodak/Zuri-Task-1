import "./App.css";
import profileImage from "./images/profile_img.svg";
import LinkItem from "./components/LinkItem";

function App() {
  const links = [
    {
      Header: "Twitter Link",
      Link: "",
    },
    {
      Header: "Zuri Team",
      Link: "",
      ID: "btn_zuri",
    },
    {
      Header: "Zuri Books",
      Link: "",
      ID: "books",
    },
    {
      Header: "Python Books",
      Link: "",
      ID: "book_python",
    },
    {
      Header: "Background Check for Coders",
      Link: "",
      ID: "pitch",
    },
    {
      Header: "Design Books",
      Link: "",
      ID: "book_design",
    },
  ];
  return (
    <div className="App">
      <section className="image-container">
        <img id={"profile_img"} src={profileImage} alt={"Profile_Picture"} />
        <h1 id={"twitter"}>OjePaul</h1>
        <h1 id={"slack"}> Oje Paul</h1>
        {links.map((item) => (
          <LinkItem item={item} />
        ))}
      </section>
    </div>
  );
}

export default App;
