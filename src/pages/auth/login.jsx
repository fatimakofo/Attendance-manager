import { Gap, Paragraph } from "../../layout/uis";
import CustomInput from "../../components/custom-input";
import CustomBtn from "../../components/custom-button";
import AuthTemplate from "./auth_template";
export default function Login() {
  return (
    <AuthTemplate header={"Login"}>
      <form>
        <CustomInput
          label="Email"
          type="email"
          placeholder="Enter your email"
        />
        <Gap margin={"25px"} />
        <CustomInput
          label="Password"
          type="Password"
          placeholder="Enter your password"
        />
        <Gap margin={"20px"} />
        <Paragraph justify={"end"}>Forgot password?</Paragraph>
        <Gap margin={"20px"} />
        <CustomBtn name="Login" />
      </form>
    </AuthTemplate>
  );
}
