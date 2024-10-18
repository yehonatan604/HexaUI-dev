import NavbarExample from "./UI/Components/Examples/Navbar.example";
import FooterExample from "./UI/Components/Examples/Footer.example";
import { BrowserRouter } from "react-router-dom";
import TestComponents1 from "./TestComponents1";
//import TestComponents1 from "./TestComponents1";

function App() {
  return (
    <BrowserRouter>
      <NavbarExample />
      <TestComponents1 />
      <FooterExample />
    </BrowserRouter>
  );
}

export default App;
