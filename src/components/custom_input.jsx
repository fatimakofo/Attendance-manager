import { Gap, Input } from "../layout/ui";


export default function CustomInput(props) {
    return (
      <>
        <Gap />
        <label htmlFor={props.label}>
          {props.label}
          <Input
            type={props.type ?? "text"}
            name={props.label}
            placeholder={props.placeholder}
          />
        </label>
        <Gap />
      </>
    );
  }
  