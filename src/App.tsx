import SidebarExample from "./UI/Components/Examples/Sidebar.example";
import NavbarExample from "./UI/Components/Examples/Navbar.example";
import FooterExample from "./UI/Components/Examples/Footer.example";
import DataGridExample from "./UI/Components/Examples/DataGrid.example";
import SelectExamples from "./UI/Components/Examples/Select.example";
import FormInputExamples from "./UI/Components/Examples/FormInput.example";
import { TCite } from "./Data/Types/ComponentTypes/Typography/Quote/TCite";
import Quote from "./UI/Components/Typography/Quote/Component";
import { BrowserRouter } from "react-router-dom";
import useTheme from "./Core/Hooks/useTheme";
import ButtonExamples from "./UI/Components/Examples/Button.example";
import AccordionExamples from "./UI/Components/Examples/Accordion.example";
import useColorPalette from "./Core/Hooks/useColorPallete";
import ThemeToggler from "./UI/Components/Common/ThemeToggler/Component";
import Flex from "./UI/Components/Layout/Flex/Component";
import { FlexDir } from "./Data/Constants/FlexDirection";
import { FlexTypes } from "./Data/Constants/FlexTypes";
import { Sizes } from "./Data/Constants/Sizes";
import Title from "./UI/Components/Typography/Title/Component";
import RainbowBordersExample from "./UI/Components/Examples/RainbowBorder.example";
import RingExamples from "./UI/Components/Examples/Ring.example";
import CardExamples from "./UI/Components/Examples/Card.example";
import Hr from "./UI/Components/Typography/Hr/Component";
import ListExample from "./UI/Components/Examples/List.example";

function App() {
  const mode = useTheme().mode;
  const { palette: pallete } = useColorPalette();

  const bgColor = mode === "light" ? pallete.standradLight : pallete.black;
  const textColor = mode === "light" ? pallete.primaryDark : pallete.primaryLight;

  const cite: TCite = {
    url: "http://www.worldwildlife.org/who/index.html",
    text: "www.worldwildlife.org",
    placement: "start",
    variant: pallete.secondary,
  };

  return (
    <BrowserRouter>
      <NavbarExample />

      <Flex
        options={{
          justify: FlexTypes.Center,
          align: FlexTypes.Start,
        }}
        className={`min-h-screen bg-${bgColor} text-${textColor} pb-5`}
      >
        <Flex
          options={{
            direction: FlexDir.Col,
            justify: FlexTypes.Center,
            align: FlexTypes.Center,
          }}
          className="w-3/4"
        >
          <Title
            options={{
              size: Sizes.Xl as never,
              textVariant: pallete.secondary,
              align: "center",
            }}
          >
            Hexa UI
          </Title>
          <ThemeToggler />
          <ButtonExamples />
          <AccordionExamples />
          <CardExamples />
          <Hr className="mt-20" />
          <RainbowBordersExample />
          <Hr
            options={{
              color: pallete.primaryDark,
              width: "1/3",
            }}
          />
          <RingExamples />
          <Hr
            options={{
              color: pallete.primaryDark,
              width: "1/3",
            }}
          />
          <ListExample />
          <Hr
            options={{
              color: pallete.primaryDark,
              width: "1/3",
            }}
          />
          <FormInputExamples />
          <SelectExamples />
          <Hr
            options={{
              color: pallete.primaryDark,
              width: "1/3",
            }}
          />
          <DataGridExample />
          <Hr className="mb-4" />
          <Title
            options={{
              size: Sizes.Lg as never,
              textVariant: pallete.secondary,
              align: "center",
            }}
          >
            Sidebar
          </Title>
          <SidebarExample />
          <Hr className="mb-4" />
          <Quote
            cite={cite as string & TCite}
            options={{
              gap: 4,
              textVariant: pallete.infoLight,
            }}
          >
            For 50 years, WWF has been protecting the future of nature. The world's
            leading conservation organization, WWF works in 100 countries and is supported
            by 1.2 million members in the United States and close to 5 million globally.
          </Quote>
          <Hr className="mt-4" />
        </Flex>
      </Flex>
      <FooterExample />
    </BrowserRouter>
  );
}

export default App;
