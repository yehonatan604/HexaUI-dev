import useTheme from "../../../Core/Hooks/useTheme";
import { FlexTypes } from "../../../Data/Constants/FlexTypes";
import { FlexWrap } from "../../../Data/Constants/FlexWrap";
import Button from "../Common/Button/Component";
import Card from "../Common/Card/Component";
import Flex from "../Layout/Flex/Component";
import Title from "../Typography/Title/Component";

const CardExamples = () => {
  const { colors } = useTheme();

  return (
    <Flex
      options={{
        justify: FlexTypes.Center,
        align: FlexTypes.Center,
        wrap: FlexWrap.Wrap,
      }}
      className="w-3/5 m-auto gap-4 mt-5"
    >
      <Card
        options={{
          bgVariant: colors.standradDark,
          textVariant: colors.standradLight,
          shadow: {
            color: colors.standrad,
            size: "xl",
          },
          border: {
            show: true,
            variant: colors.info,
          },
        }}
        className="w-[250px]"
      >
        <Card.Header>
          <img
            src="https://loremflickr.com/250/200"
            alt="Random"
            className="w-[250px] h-32 object-cover m-auto rounded"
          />
        </Card.Header>

        <Title options={{ padding: "p-1", size: "sm", align: FlexTypes.Start }}>
          Card 1
        </Title>
        <p className="px-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, expedita
          uptates. Vect eviet maiores assumend.
        </p>
        <Card.Footer>
          <Button
            options={{
              bgVariant: colors.approve,
              textVariant: colors.standradLight,
            }}
          >
            +
          </Button>
        </Card.Footer>
      </Card>
      <Card
        options={{
          bgVariant: colors.standradDark,
          textVariant: colors.standradLight,
          shadow: {
            color: colors.standrad,
            size: "xl",
          },
          border: {
            show: true,
          },
        }}
        className="w-[250px]"
      >
        <Card.Header>
          <img
            src="https://loremflickr.com/250/200"
            alt="Random"
            className="w-[250px] h-32 object-cover m-auto rounded"
          />
        </Card.Header>

        <Title options={{ padding: "p-1", size: "sm", align: FlexTypes.Start }}>
          Card 1
        </Title>
        <p className="px-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, expedita
          uptates. Vect eviet maiores assumend.
        </p>
        <Card.Footer>
          <Button
            options={{
              bgVariant: colors.approve,
              textVariant: colors.standradLight,
            }}
          >
            +
          </Button>
        </Card.Footer>
      </Card>
    </Flex>
  );
};

export default CardExamples;
