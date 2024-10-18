import useTheme from "./Core/Hooks/useTheme";
import { FlexDir } from "./Data/Constants/FlexDirection";
import { FlexTypes } from "./Data/Constants/FlexTypes";
import { Sizes } from "./Data/Constants/Sizes";
import { TCite } from "./Data/Types/ComponentTypes/Typography/Quote/TCite";
import ThemeToggler from "./UI/Components/Common/ThemeToggler/Component";
import AccordionExamples from "./UI/Components/Examples/Accordion.example";
import ButtonExamples from "./UI/Components/Examples/Button.example";
import CardExamples from "./UI/Components/Examples/Card.example";
import AutoGridExample from "./UI/Components/Examples/AutoGrid.example";
import FormInputExamples from "./UI/Components/Examples/FormInput.example";
import ListExample from "./UI/Components/Examples/List.example";
import RainbowBordersExample from "./UI/Components/Examples/RainbowBorder.example";
import RingExamples from "./UI/Components/Examples/Ring.example";
import SelectExamples from "./UI/Components/Examples/Select.example";
import SidebarExample from "./UI/Components/Examples/Sidebar.example";
import ToastExamples from "./UI/Components/Examples/Toast.example";
import ColorPicker from "./UI/Components/Forms/ColorPicker/ColorPicker";
import Flex from "./UI/Components/Layout/Flex/Flex";
import Scrollbar from "./UI/Components/Layout/Scrollbar/Scrollbar";
import Hr from "./UI/Components/Typography/Hr/Component";
import Quote from "./UI/Components/Typography/Quote/Component";
import Title from "./UI/Components/Typography/Title/Component";

const TestComponents1 = () => {
  const { colors } = useTheme();

  const cite: TCite = {
    url: "http://www.worldwildlife.org/who/index.html",
    text: "www.worldwildlife.org",
    placement: "start",
    variant: colors.secondary,
  };

  return (
    <Scrollbar maxHeight="fit">
      <div className="h-[83vh]">
        <Flex
          options={{
            justify: FlexTypes.Center,
            align: FlexTypes.Start,
          }}
          className={`min-h-screen bg-standard-l dark:bg-black dark:text-primary-l text-primary-d pb-5`}
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
                textVariant: colors.secondary,
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
                color: colors.primaryDark,
                width: "1/3",
              }}
            />
            <RingExamples />
            <Hr
              options={{
                color: colors.primaryDark,
                width: "1/3",
              }}
            />
            <ListExample />
            <Hr
              options={{
                color: colors.primaryDark,
                width: "1/3",
              }}
            />
            <FormInputExamples />
            <SelectExamples />
            <Hr
              options={{
                color: colors.primaryDark,
                width: "1/3",
              }}
            />
            <AutoGridExample />
            <Hr className="mb-4" />
            <Title
              options={{
                size: Sizes.Lg as never,
                textVariant: colors.secondary,
                align: "center",
              }}
            >
              Sidebar
            </Title>
            <SidebarExample />
            <Hr className="mb-4" />
            <ToastExamples />
            <Hr className="mb-4" />
            <ColorPicker />
            <Hr className="mb-4" />
            <Quote
              cite={cite as string & TCite}
              options={{
                gap: 4,
                textVariant: colors.infoLight,
              }}
            >
              For 50 years, WWF has been protecting the future of nature. The world's
              leading conservation organization, WWF works in 100 countries and is
              supported by 1.2 million members in the United States and close to 5 million
              globally.
            </Quote>
            <Hr className="mt-4" />
          </Flex>
        </Flex>
      </div>
    </Scrollbar>
  );
};

export default TestComponents1;
