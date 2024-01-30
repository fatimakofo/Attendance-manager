import Classes from "../style.module.css";
import {
  Section,
  Column,
  LoginImg,
  Wrapper,
  Gap,
  Align,
  Row,
  Paragraph,
} from "../../layout/uis";
export default function AuthTemplate(props) {
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
            <h1 className={Classes.h1}>{props.header}</h1>
            <Gap margin={"25px"} />
            {props.children}
          </Wrapper>
        </Column>
      </Row>
    </Section>
  );
}
