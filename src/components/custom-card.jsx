import { Card, H3, Span } from "../layout/uis";

export default function CustomCard(props) {
  return (
    <Card>
      <H3>{props.heading}</H3>
      <Span>{props.number}</Span>
    </Card>
  );
}
