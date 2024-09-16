import { StyledClearBtn } from "../../style/styles";

type ClearBtnProps = {
  content: string;
};

export function ClearButton(props: ClearBtnProps) {
  return (
    <>
      <StyledClearBtn type="reset">{props.content}</StyledClearBtn>
    </>
  );
}
