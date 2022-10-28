import DesktopApp from "./DesktopApp";
import { useMediaQuery } from "react-responsive";
import MobileApp from "./MobileApp";

function App() {
  const mobile = useMediaQuery({
    query: "(max-width: 600px)",
  });
  return <>{mobile ? <MobileApp /> : <DesktopApp />}</>;
}

export default App;
