import { SubmitBtn } from "../../style/styles";

type SubmitBtnProps = {
  content: string;
};

export function SubmitButton(props: SubmitBtnProps) {
  return (
    <>
      <SubmitBtn type="submit">{props.content}</SubmitBtn>
    </>
  );
}
