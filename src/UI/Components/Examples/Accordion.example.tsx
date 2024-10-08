import useTheme from "../../../Core/Hooks/useTheme";
import { FlexDir } from "../../../Data/Constants/FlexDirection";
import { FlexTypes } from "../../../Data/Constants/FlexTypes";
import Accordion from "../Common/Accordion/Component";
import Flex from "../Layout/Flex/Component";

const AccordionExamples = () => {
  const { colors } = useTheme();

  return (
    <Flex
      options={{
        direction: FlexDir.Col,
        justify: FlexTypes.Center,
        align: FlexTypes.Center,
      }}
      className="m-auto mb-5 gap-4 md:w-1/5 max-md:w-3/5"
    >
      <Accordion
        options={{
          title: "Accordion Standard",
          titleVariant: colors.cancel,
          textVariant: colors.success,
          border: {
            variant: colors.approve,
            show: true,
          },
        }}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam doloremque,
          voluptates, quos, quidem vel quibusdam voluptatum voluptatem quia iusto quas
          dolorem. Quisquam doloremque, voluptates, quos, quidem vel quibusdam voluptatum
          voluptatem quia iusto quas dolorem.
        </p>
      </Accordion>
      <Accordion
        options={{
          title: "Accordion Primary",
          textVariant: colors.select,
          titleVariant: colors.primary,
          border: {
            variant: colors.primaryDark,
            show: true,
            radius: "0",
          },
        }}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam doloremque,
          voluptates, quos, quidem vel quibusdam voluptatum voluptatem quia iusto quas
          dolorem. Quisquam doloremque, voluptates, quos, quidem vel quibusdam voluptatum
          voluptatem quia iusto quas dolorem.
        </p>
      </Accordion>
      <Accordion
        options={{
          title: "Accordion Primary",
          titleVariant: colors.standradLight,
          textVariant: colors.cancel,
        }}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam doloremque,
          voluptates, quos, quidem vel quibusdam voluptatum voluptatem quia iusto quas
          dolorem. Quisquam doloremque, voluptates, quos, quidem vel quibusdam voluptatum
          voluptatem quia iusto quas dolorem.
        </p>
      </Accordion>
    </Flex>
  );
};

export default AccordionExamples;
