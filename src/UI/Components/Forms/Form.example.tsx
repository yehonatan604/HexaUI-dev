import CheckboxExamples from "./Checkbox/examples/Checkbox.example";
import FloatingLabelExamples from "./FloatingLabel/examples/FloatingLabel.example";
import RangeInputExamples from "./RangeInput/examples/RangeInput.example";
import SelectExamples from "./Select/examples/Select.example";
import TextInputExamples from "./TextInput/examples/TextInput.example";

const FormInputExamples = () => {
  return (
    <div className="mt-9">
      <TextInputExamples />
      <FloatingLabelExamples />
      <RangeInputExamples />
      <CheckboxExamples />
      <SelectExamples />
    </div>
  );
};

export default FormInputExamples;
