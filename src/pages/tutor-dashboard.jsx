import {
  Row,
  Wrapper,
  Align,
  Gap,
  Line,
  Paragraph,
  H2,
  Header,
  IconContainer,
  Icon,
} from "../layout/uis";
import Side from "../components/custom-sidenav";
import { CustomButton } from "../components/custom-button";
import ContainerTable from "../components/custom-container";
import SmallerContainer from "../components/smaller-container";
export default function Tutor() {
  return (
    <Row>
      <Side
        heading="Tutor"
        first={{ name: "Tutors", route: "/tutor-dashboard" }}
        second="Student scores"
        third="Attendance"
        dashboardImg="attendance images/orange tutor.png"
        studentImg="attendance images/student white.png"
        tutorImg="attendance images/tutor white.png"
      />
      <Wrapper width={"85%"} padding={"20px"} height={"100vh"}>
        <Align justify={"end"}>
          <CustomButton name="Add new student" />
        </Align>
        <Gap margin={"25px"} />
        <Line />
        <Gap margin={"25px"} />
        <Wrapper width={"100%"}>
          <Header display={"flex"} justify={"space-between"}>
            <H2>Welcome Back, Bola</H2>
            <Align justify={"space-between"} width={"6%"} align={"end"}>
              <Paragraph marginRight={"10px"}>Active</Paragraph>
              <IconContainer width={"21%"}>
                <Icon src="attendance images/arrow name.png" height={"8px"} />
              </IconContainer>
            </Align>
          </Header>
          <Gap margin={"25px"} />
          <Paragraph color={"rgba(49, 39, 29, 0.72)"}>
            You have 90 students{" "}
          </Paragraph>
        </Wrapper>
        <Gap margin={"25px"} />
        <ContainerTable
          numberTitle="S/N"
          nameTitle="Name"
          emailTitle="Email"
          courseTitle="Course"
          cohortTitle="Cohort"
        />
        <SmallerContainer
          number="1"
          name="Matthew Caleb"
          email="Matthew Caleb@gmail.com"
          course="UI/UX Designs"
          cohort="556087EFG-02/23"
        />
        <SmallerContainer
          number="2"
          name="Matthew Caleb"
          email="Matthew Caleb@gmail.com"
          course="UI/UX Designs"
          cohort="556087EFG-02/23"
        />
        <SmallerContainer
          number="3"
          name="Matthew Caleb"
          email="Matthew Caleb@gmail.com"
          course="UI/UX Designs"
          cohort="556087EFG-02/23"
        />
        <SmallerContainer
          number="4"
          name="Matthew Caleb"
          email="Matthew Caleb@gmail.com"
          course="UI/UX Designs"
          cohort="556087EFG-02/23"
        />
        <SmallerContainer
          number="5"
          name="Matthew Caleb"
          email="Matthew Caleb@gmail.com"
          course="UI/UX Designs"
          cohort="556087EFG-02/23"
        />

        <Gap margin={"25px"} />
        <Paragraph color={"rgba(249, 161, 30, 1)"} justify={"end"}>
          See More...
        </Paragraph>
      </Wrapper>
    </Row>
  );
}
