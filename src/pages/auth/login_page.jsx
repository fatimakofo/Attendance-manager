import CustomInput from "../../components/custom_input";
import {
  Wrapper,
  Row,
  Align,
  Column,
  Container,
  Paragraph,
  Input,
  Gap,
  Button,
} from "../../layout/ui";
import classes from "./auth.module.css";

export default function LoginPage() {
  return (
    <Container>
      <Align height={"auto"} justifyContent={"end"}>
        <Paragraph color={"#F9A11E"}>Need Help?</Paragraph>
      </Align>
      <Wrapper>
        <Align>
          <Row>
            <Column flexGrow={2}>
              <div className={classes.imageContainer}>
                <img src="/assets/images/rafiki.png" alt="" />
              </div>
            </Column>
            <Column>
              <h1>Login </h1>
              <Gap margin={"20px"} />
              <form action="">
                <CustomInput
                  label="Email"
                  type="email"
                  placeholder="Enter your email"
                />
                <CustomInput
                  label="Password"
                  type="password"
                  placeholder="Enter your password"
                />
                <Gap margin={"20px"} />
                <Button>Login</Button>
              </form>
            </Column>
          </Row>
        </Align>
      </Wrapper>
    </Container>
  );
}

function customButton(props) {
  return <Button type={props.type ?? "submit"}>{props.children}</Button>;
}
