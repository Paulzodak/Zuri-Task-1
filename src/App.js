import DesktopApp from "./DesktopApp";
import { useMediaQuery } from "react-responsive";
import MobileApp from "./MobileApp";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Contact from "./components/Contact";

function App() {
  const mobile = useMediaQuery({
    query: "(max-width: 600px)",
  });
  const links = [
    {
      Header: "Twitter Link",
      Link: "https://twitter.com/OjePaul",
    },
    {
      Header: "Zuri Team",
      Link: "https://training.zuri.team/",
      ID: "btn__zuri",
    },
    {
      Header: "Zuri Books",
      Link: "http://books.zuri.team",
      desc: "Get books that gives you all you need about design and coding",
      ID: "books",
    },
    {
      Header: "Python Books",
      Link: "https://books.zuri.team",
      desc: "Wanna learn a high-demand skill? This is for you!",
      ID: "book__python",
    },
    {
      Header: "Background Check for Coders",
      Link: "https://background.zuri.team",
      desc: "We can give you detailed information about your coders",
      ID: "pitch",
    },
    {
      Header: "Design Books",
      Link: "https://books.zuri.team/design-rules",
      desc: "Need more knowledge about design? Here's a free book to guide you!",
      ID: "book__design",
    },
    {
      Header: "Contact Me",
      Link: "/contact",
      desc: "Need more knowledge about design? Here's a free book to guide you!",
      ID: "contact",
    },
  ];

  return (
    <>
      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/"
          element={
            mobile ? <MobileApp links={links} /> : <DesktopApp links={links} />
          }
        />
      </Routes>
    </>
  );
}

export default App;
