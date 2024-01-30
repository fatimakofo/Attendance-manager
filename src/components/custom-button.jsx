import { Button, SmallBtn } from "../layout/uis";
export default function CustomBtn(props) {
  return (
    <Button disabled={props.loading}>
      {props.loading ? "Loading..." : props.name}
    </Button>
  );
}
export function CustomButton(props) {
  return <SmallBtn onClick={props.onClick}>{props.name}</SmallBtn>;
}
