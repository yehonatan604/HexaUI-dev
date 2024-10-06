import { BrowserRouter } from "react-router-dom";
import AccordionExamples from "./UI/Components/Examples/Accordion.example";
import ButtonExamples from "./UI/Components/Examples/Button.example";
import CardExamples from "./UI/Components/Examples/Card.example";
import FooterExample from "./UI/Components/Examples/Footer.example";
import FormInputExamples from "./UI/Components/Examples/FormInput.example";
import GridExample from "./UI/Components/Examples/Grid.example";
import ListExample from "./UI/Components/Examples/List.example";
import NavbarExample from "./UI/Components/Examples/Navbar.example";
import RainbowBordersExample from "./UI/Components/Examples/RainbowBorder.example";
import RingExamples from "./UI/Components/Examples/Ring.example";
import SelectExamples from "./UI/Components/Examples/Select.example";
import SidebarExample from "./UI/Components/Examples/Sidebar.example";
import useTheme from "./Core/Hooks/useTheme";
import { FlexDir } from "./Data/Constants/FlexDirection";
import { FlexTypes } from "./Data/Constants/FlexTypes";
import { Sizes } from "./Data/Constants/Sizes";
import { TCite } from "./Data/Types/TCite";
import Flex from "./UI/Components/Layout/Flex/Component";
import Hr from "./UI/Components/Typography/Hr/Component";
import Quote from "./UI/Components/Typography/Quote/Component";
import Title from "./UI/Components/Typography/Title/Component";

function App() {
  const mode = useTheme().mode;
  const bgColor = mode === "light" ? "bg-zinc-100" : "bg-zinc-900";

  const cite: TCite = {
    url: "http://www.worldwildlife.org/who/index.html",
    text: "www.worldwildlife.org",
    placement: "start",
  };

  console.log(FlexTypes.Center);

  return (
    <BrowserRouter>
      <NavbarExample />
      <Flex
        direction={FlexDir.Col}
        justify={FlexTypes.Center}
        className={`${bgColor} pb-1`}
      >
        <Title size={Sizes.Xl}>Rainbow UI</Title>
        <Hr borderWidth="w-1/3" />
        <ButtonExamples />
        <Hr
          borderWidth={Sizes.Lg}
          borderHeight={Sizes.Md}
          borderColor="border-yellow-600"
        />
        <CardExamples />
        <RingExamples />
        <RainbowBordersExample />
        <FormInputExamples />
        <SelectExamples />
        <AccordionExamples />
        <GridExample />
        <Hr borderWidth="w-1/2" />
        <ListExample />
        <Hr borderWidth="w-1/2" />
        <Quote cite={cite as string & TCite} gap="gap-4">
          For 50 years, WWF has been protecting the future of nature. The world's leading
          conservation organization, WWF works in 100 countries and is supported by 1.2
          million members in the United States and close to 5 million globally.
        </Quote>
        <Hr borderWidth="w-1/2" />
        <SidebarExample />
      </Flex>
      <FooterExample />
    </BrowserRouter>
  );
}

export default App;
