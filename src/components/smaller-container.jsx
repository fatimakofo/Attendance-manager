import {
  Gap,
  Container,
  Text,
  Row,
  Paragraph,
  Align,
  Head,
} from "../layout/uis";

export default function SmallerContainer(props) {
  return (
    <>
      <Container>
        <Text text={props.number}>{props.number}</Text>
        <Text text={props.name}>{props.name}</Text>
        <Text text={props.email}>{props.email}</Text>
        <Text text={props.course}>{props.course}</Text>
        <Text text={props.cohort}>{props.cohort}</Text>
      </Container>
      <Gap />
    </>
  );
}
