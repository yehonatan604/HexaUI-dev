import useColorPalette from "../../../Core/Hooks/useColorPallete";
import { FlexDir } from "../../../Data/Constants/FlexDirection";
import { FlexTypes } from "../../../Data/Constants/FlexTypes";
import Accordion from "../Common/Accordion/Component";
import Flex from "../Layout/Flex/Component";

const AccordionExamples = () => {
  const { palette: pallete } = useColorPalette();

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
          titleVariant: pallete.cancel,
          textVariant: pallete.success,
          border: {
            variant: pallete.approve,
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
          textVariant: pallete.select,
          titleVariant: pallete.primary,
          border: {
            variant: pallete.primaryDark,
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
          titleVariant: pallete.standradLight,
          textVariant: pallete.cancel,
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
