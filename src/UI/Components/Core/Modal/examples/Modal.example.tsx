import { useState } from "react";
import { FlexTypes } from "../../../../../Data/Constants/FlexTypes";
import { FlexWrap } from "../../../../../Data/Constants/FlexWrap";
import Flex from "../../../Layout/Flex/Flex";
import Button from "../../Button/Button";
import Modal from "../Modal";

const ModalExamples = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <Flex
      options={{
        justify: FlexTypes.Center,
        align: FlexTypes.Center,
        wrap: FlexWrap.Wrap,
      }}
      className="m-auto py-5 gap-4"
    >
      <Button onClick={toggleModal}>Toggle Modal</Button>
      <Modal isOpen={isModalOpen} toggleModal={toggleModal}>
        <h1>Modal</h1>
        <p>This is a modal</p>
      </Modal>
    </Flex>
  );
};

export default ModalExamples;
