import NavbarExample from "./UI/Components/Navigation/Navbar/examples/Navbar.example";
import { BrowserRouter } from "react-router-dom";
import TestComponents1 from "./TestComponents1";
import FooterExample from "./UI/Components/Navigation/Footer/examples/Footer.example";

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
