import { SubmitBtn } from "../../style/styles";

type SubmitBtnProps = {
  content: string;
  background: string;
};

export function SubmitButton(props: SubmitBtnProps) {
  return (
    <>
      <SubmitBtn background={props.background} type="submit">
        {props.content}
      </SubmitBtn>
    </>
  );
}
