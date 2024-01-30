import {
  Gap,
  Container,
  Text,
  Row,
  Paragraph,
  Align,
  Head,
} from "../layout/uis";

export default function ContainerTable(props) {
  return (
    <>
      <Gap margin={"20px"} />
      <Container>
        <Head border={"5px 0 0 5px"} value={props.numberTitle}>
          {props.numberTitle}
        </Head>
        <Head value={props.nameTitle}>{props.nameTitle}</Head>
        <Head value={props.emailTitle}>{props.emailTitle}</Head>
        <Head value={props.courseTitle}>{props.courseTitle}</Head>
        <Head value={props.cohortTitle} border={"0 5px 5px 0"}>
          {props.cohortTitle}
        </Head>
      </Container>
      <Gap margin={"20px"} />
    </>
  );
}
