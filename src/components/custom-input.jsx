import { Input } from "../layout/uis";

export default function CustomInput(props) {
  return (
    <>
      <label htmlFor={props.label}>
        {props.label}
        <Input
          name={props.label}
          type={props.input}
          placeholder={props.placeholder}
          onChange={props?.onChange}
        />
      </label>
    </>
  );
}

export function CheckBox() {
  return (
    <>
      <Input
        type="checkbox"
        width={"30px"}
        accentColor={"rgba(249, 161, 30, 1)"}
      />
    </>
  );
}
