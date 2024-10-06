import { FlexTypes } from "../../../Data/Constants/FlexTypes";
import { FlexWrap } from "../../../Data/Constants/FlexWrap";
import { Variants } from "../../../Data/Constants/Variants";
import RingBorder from "../Common/Border/RingBorder/Component";
import Flex from "../Layout/Flex/Component";

const RingExamples = () => {
  return (
    <Flex
      justify={FlexTypes.Center}
      align={FlexTypes.Center}
      wrap={FlexWrap.Wrap}
      className="m-auto mb-5 gap-4 w-2/5"
    >
      <RingBorder className="m-auto mt-10">
        <img
          src="https://loremflickr.com/250/200"
          alt="Random"
          className="w-full h-32 object-cover rounded"
        />
      </RingBorder>
      <RingBorder variant={Variants.Failure} className="m-auto mt-10">
        <img
          src="https://loremflickr.com/250/200"
          alt="Random"
          className="w-full h-32 object-cover rounded"
        />
      </RingBorder>
      <RingBorder variant={Variants.Success} className="m-auto mt-10">
        <img
          src="https://loremflickr.com/250/200"
          alt="Random"
          className="w-full h-32 object-cover rounded"
        />
      </RingBorder>
      <RingBorder variant={Variants.Warning} className="m-auto mt-10">
        <img
          src="https://loremflickr.com/250/200"
          alt="Random"
          className="w-full h-32 object-cover rounded"
        />
      </RingBorder>
      <RingBorder variant={Variants.Lime} className="m-auto mt-10">
        <img
          src="https://loremflickr.com/250/200"
          alt="Random"
          className="w-full h-32 object-cover rounded"
        />
      </RingBorder>
      <RingBorder variant={Variants.Cyan} className="m-auto mt-10">
        <img
          src="https://loremflickr.com/250/200"
          alt="Random"
          className="w-full h-32 object-cover rounded"
        />
      </RingBorder>
      <RingBorder variant={Variants.Purple} className="m-auto mt-10">
        <img
          src="https://loremflickr.com/250/200"
          alt="Random"
          className="w-full h-32 object-cover rounded"
        />
      </RingBorder>
      <RingBorder variant={Variants.Pink} className="m-auto mt-10">
        <img
          src="https://loremflickr.com/250/200"
          alt="Random"
          className="w-full h-32 object-cover rounded"
        />
      </RingBorder>
    </Flex>
  );
};

export default RingExamples;
