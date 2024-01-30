import Classes from "./style.module.css";
import {
  Section,
  Column,
  LoginImg,
  Wrapper,
  Gap,
  Align,
  Row,
  Paragraph,
} from "../layout/uis";
import CustomInput from "../components/custom-input";
import CustomBtn from "../components/custom-button";
export default function Login() {
  return (
    <Section padding={"30px"}>
      <Align justify={"end"}>
        <Paragraph color={"rgba(249, 161, 30, 1)"}>Need help?</Paragraph>
      </Align>
      <Row>
        <Column grow={"2"}>
          <LoginImg src="attendance images/login.png" />
        </Column>
        <Column justify={"start"}>
          <Wrapper>
            <h1 className={Classes.h1}>Register</h1>
            <Gap margin={"25px"} />
            <form>
              <CustomInput
                label="Email"
                type="email"
                placeholder="Enter your email"
              />
              <Gap margin={"25px"} />
              <CustomInput
                label="Username"
                type="username"
                placeholder="Enter your username"
              />
              <Gap margin={"25px"} />
              <CustomInput
                label="Password"
                type="Password"
                placeholder="Enter your password"
              />
              <Gap margin={"20px"} />
              <CustomBtn name="Register" />
              <Align justify={"center"} height={"50px"} align={"center"}>
                <Paragraph>
                  Already have an account?{" "}
                  <Paragraph margin={"5px"} color={"rgba(249, 161, 30, 1)"}>
                    {" "}
                    Log In
                  </Paragraph>
                </Paragraph>
              </Align>
            </form>
          </Wrapper>
        </Column>
      </Row>
    </Section>
  );
}
