import { StyledInput } from "../../style/styles";

type InputProps = {
  type: string;
  placeholder?: string;
  name: string;
  id: string;
  required?: boolean;
};

export function Input(props: InputProps) {
  return (
    <>
      <StyledInput
        type={props.type}
        placeholder={props.placeholder}
        name={props.name}
        id={props.id}
        required={props.required}
      />
    </>
  );
}
