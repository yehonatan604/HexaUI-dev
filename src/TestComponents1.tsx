import useTheme from "./Core/Context/ThemeContext/hooks/useTheme";
import { FlexDir } from "./Data/Constants/FlexDirection";
import { FlexTypes } from "./Data/Constants/FlexTypes";
import { Sizes } from "./Data/Constants/Sizes";
import ThemeToggler from "./UI/Components/Core/ThemeToggler/ThemeToggler";
import AccordionExamples from "./UI/Components/Core/Accordion/examples/Accordion.example";
import CardExamples from "./UI/Components/Core/Card/examples/Card.example";
import RainbowBordersExample from "./UI/Components/Core/RainbowBorder/examples/RainbowBorder.example";
import RingExamples from "./UI/Components/Core/Ring/examples/Ring.example";
import SidebarExample from "./UI/Components/Navigation/Sidebar/examples/Sidebar.example";
import Flex from "./UI/Components/Layout/Flex/Flex";
import Hr from "./UI/Components/Typography/Hr/Hr";
import Title from "./UI/Components/Typography/Title/Title";
import ButtonExamples from "./UI/Components/Core/Button/examples/Button.example";
import ToastExamples from "./UI/Components/Core/Toast/examples/Toast.example";
import FormInputExamples from "./UI/Components/Forms/Form.example";
import AutoGridExample from "./UI/Components/Layout/AutoGrid/examples/AutoGrid.example";
import ScrollArea from "./UI/Components/Layout/ScrollArea/ScrollArea";
import ListExample from "./UI/Components/Typography/List/examples/List.example";
import QuoteExamples from "./UI/Components/Typography/Quote/examples/Quote.example";

const TestComponents1 = () => {
  const { colors } = useTheme();

  return (
    <ScrollArea maxHeight="fit">
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
            <QuoteExamples />
            <Hr className="mt-4" />
          </Flex>
        </Flex>
      </div>
    </ScrollArea>
  );
};

export default TestComponents1;
