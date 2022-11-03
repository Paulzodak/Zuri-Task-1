import DesktopApp from "./DesktopApp";
import { useMediaQuery } from "react-responsive";
import MobileApp from "./MobileApp";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Contact from "./components/Contact";

function App() {
  const mobile = useMediaQuery({
    query: "(max-width: 600px)",
  });

  return (
    <>
      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={mobile ? <MobileApp /> : <DesktopApp />} />
      </Routes>
    </>
  );
}

export default App;
