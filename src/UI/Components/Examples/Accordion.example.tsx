import { FlexDir } from "../../../Data/Constants/FlexDirection";
import { FlexTypes } from "../../../Data/Constants/FlexTypes";
import { Variants } from "../../../Data/Constants/Variants";
import Accordion from "../Common/Accordion/Component";
import Flex from "../Layout/Flex/Component";

const AccordionExamples = () => {
  return (
    <Flex
      direction={FlexDir.Col}
      justify={FlexTypes.Center}
      align={FlexTypes.Center}
      className="m-auto mb-5 gap-4 md:w-1/5 max-md:w-3/5"
    >
      <Accordion title="Accordion Standard">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam doloremque,
          voluptates, quos, quidem vel quibusdam voluptatum voluptatem quia iusto quas
          dolorem. Quisquam doloremque, voluptates, quos, quidem vel quibusdam voluptatum
          voluptatem quia iusto quas dolorem.
        </p>
      </Accordion>
      <Accordion title="Accordion Info" variant={Variants.Info}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam doloremque,
          voluptates, quos, quidem vel quibusdam voluptatum voluptatem quia iusto quas
          dolorem. Quisquam doloremque, voluptates, quos, quidem vel quibusdam voluptatum
          voluptatem quia iusto quas dolorem.
        </p>
      </Accordion>
      <Accordion title="Accordion Success" variant={Variants.Success}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam doloremque,
          voluptates, quos, quidem vel quibusdam voluptatum voluptatem quia iusto quas
          dolorem. Quisquam doloremque, voluptates, quos, quidem vel quibusdam voluptatum
          voluptatem quia iusto quas dolorem.
        </p>
      </Accordion>
      <Accordion title="Accordion Warning" variant={Variants.Warning}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam doloremque,
          voluptates, quos, quidem vel quibusdam voluptatum voluptatem quia iusto quas
          dolorem. Quisquam doloremque, voluptates, quos, quidem vel quibusdam voluptatum
          voluptatem quia iusto quas dolorem.
        </p>
      </Accordion>
      <Accordion title="Accordion Failure" variant={Variants.Failure}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam doloremque,
          voluptates, quos, quidem vel quibusdam voluptatum voluptatem quia iusto quas
          dolorem. Quisquam doloremque, voluptates, quos, quidem vel quibusdam voluptatum
          voluptatem quia iusto quas dolorem.
        </p>
      </Accordion>
      <Accordion title="Accordion Lime" variant={Variants.Lime}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam doloremque,
          voluptates, quos, quidem vel quibusdam voluptatum voluptatem quia iusto quas
          dolorem. Quisquam doloremque, voluptates, quos, quidem vel quibusdam voluptatum
          voluptatem quia iusto quas dolorem.
        </p>
      </Accordion>
      <Accordion title="Accordion Cyan" variant={Variants.Cyan}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam doloremque,
          voluptates, quos, quidem vel quibusdam voluptatum voluptatem quia iusto quas
          dolorem. Quisquam doloremque, voluptates, quos, quidem vel quibusdam voluptatum
          voluptatem quia iusto quas dolorem.
        </p>
      </Accordion>
      <Accordion title="Accordion Purple" variant={Variants.Purple}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam doloremque,
          voluptates, quos, quidem vel quibusdam voluptatum voluptatem quia iusto quas
          dolorem. Quisquam doloremque, voluptates, quos, quidem vel quibusdam voluptatum
          voluptatem quia iusto quas dolorem.
        </p>
      </Accordion>
      <Accordion title="Accordion Pink" variant={Variants.Pink}>
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
