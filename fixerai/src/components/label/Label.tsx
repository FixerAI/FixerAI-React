import { StyledLabel } from "../../style/styles";

type LabelProps = {
  for: string;
  content: string;
  color: string;
}

export function Label(props: LabelProps) {
  return(
    <>
      <StyledLabel htmlFor={props.for} color={props.color}>{props.content}</StyledLabel>
    </>
  )
}