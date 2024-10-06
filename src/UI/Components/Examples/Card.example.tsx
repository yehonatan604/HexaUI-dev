import { FlexTypes } from "../../../Data/Constants/FlexTypes";
import { FlexWrap } from "../../../Data/Constants/FlexWrap";
import { Sizes } from "../../../Data/Constants/Sizes";
import { Variants } from "../../../Data/Constants/Variants";
import Button from "../Common/Button/Component";
import Card from "../Common/Card/Component";
import Flex from "../Layout/Flex/Component";

const CardExamples = () => {
  const { Info, Success, Warning } = Variants;
  const { Sm } = Sizes;

  return (
    <Flex
      justify={FlexTypes.Center}
      align={FlexTypes.Center}
      wrap={FlexWrap.Wrap}
      className="w-3/5 m-auto gap-4 mt-5"
    >
      <Card className="w-[250px]">
        <Card.Header>Hello World!</Card.Header>
        <div>
          <img
            src="https://loremflickr.com/250/200"
            alt="Random"
            className="w-full h-32 object-cover"
          />
        </div>
        <h1>Card 1</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, expedita
          voluptates. Velit eveniet maiores assumenda, dicta magni vel repellat itaque,
          impedit aut accusantium magnam molestias, ullam consequuntur illum soluta?
          Voluptatem.
        </p>
        <Card.Footer>
          <Button variant={Info} size={Sm}>
            +
          </Button>
          <Button variant={Success} size={Sm}>
            -
          </Button>
          <Button variant={Warning} size={Sm}>
            OK
          </Button>
        </Card.Footer>
      </Card>
      <Card className="w-[250px]">
        <Card.Header>Hello World!</Card.Header>
        <div>
          <img
            src="https://loremflickr.com/250/200"
            alt="Random"
            className="w-full h-32 object-cover"
          />
        </div>
        <h1>Card 1</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, expedita
          voluptates. Velit eveniet maiores assumenda, dicta magni vel repellat itaque,
          impedit aut accusantium magnam molestias, ullam consequuntur illum soluta?
          Voluptatem.
        </p>
        <Card.Footer>
          <Button variant={Info} size={Sm}>
            +
          </Button>
          <Button variant={Success} size={Sm}>
            -
          </Button>
          <Button variant={Warning} size={Sm}>
            OK
          </Button>
        </Card.Footer>
      </Card>
      <Card className="w-[250px]">
        <Card.Header>Hello World!</Card.Header>
        <div>
          <img
            src="https://loremflickr.com/250/200"
            alt="Random"
            className="w-full h-32 object-cover"
          />
        </div>
        <h1>Card 1</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, expedita
          voluptates. Velit eveniet maiores assumenda, dicta magni vel repellat itaque,
          impedit aut accusantium magnam molestias, ullam consequuntur illum soluta?
          Voluptatem.
        </p>
        <Card.Footer>
          <Button variant={Info} size={Sm}>
            +
          </Button>
          <Button variant={Success} size={Sm}>
            -
          </Button>
          <Button variant={Warning} size={Sm}>
            OK
          </Button>
        </Card.Footer>
      </Card>
    </Flex>
  );
};

export default CardExamples;
