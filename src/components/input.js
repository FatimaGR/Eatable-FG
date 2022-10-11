import { colors } from "../styles/colors";
import styled from "@emotion/styled";
import { typography } from "../styles/typography";

const FormInput = styled.input`
  ${typography.regular.md}
  border: none;
  background: none;
  border-bottom: 1px solid ${colors.black};
  width: 100%;
  outline: none;
  margin-bottom: 16px;
  min-height: 33px;
`;

const FormTextArea = styled.textarea`
  ${typography.regular.md}
  border: none;
  background: none;
  border-bottom: 1px solid ${colors.black};
  width: 100%;
  outline: none;
  margin-bottom: 16px;
  min-height: 48px;
  resize: none;
`;

const FormLabel = styled.label`
  ${typography.semibold.xs}
  color: ${colors.gray};
  margin-bottom: 5px;
`;

function Input({ id, name, type="text", value, onChange, label}) {
  return (
    <div>
      <FormLabel htmlFor={id || name}>{label}</FormLabel>
      <FormInput
        type={type}
        name={name}
        id={id || name}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export function TextArea({ id, name, value, onChange, label}) {
  return (
    <div>
      <FormLabel htmlFor={id || name}>{label}</FormLabel>
      <FormTextArea
        name={name}
        id={id || name}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default Input;