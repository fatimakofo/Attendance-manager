import { Row, Wrapper, Align, Gap, Line } from "../layout/uis";
import Side from "../components/custom-sidenav";
import { CustomButton } from "../components/custom-button";
import ContainerTable from "../components/custom-container";
import SmallerContainer from "../components/smaller-container";
export default function AttendanceList() {
  return (
    <Row>
      <Side
        heading="Admin"
        first="Dashboard"
        second="Students"
        third="Tutors"
        dashboardImg="attendance images/dashboard.png"
        studentImg="attendance images/student white.png"
        tutorImg="attendance images/tutor white.png"
      />
      <Wrapper width={"85%"} padding={"20px"} height={"100vh"}>
        <Align justify={"end"}>
          <CustomButton name="Add tutor" />
        </Align>
        <Gap margin={"25px"} />
        <Line />
        <Gap margin={"25px"} />
        <ContainerTable />
        <SmallerContainer />
        <SmallerContainer />
        <SmallerContainer />
        <SmallerContainer />
        <SmallerContainer />
        <SmallerContainer />
        <SmallerContainer />
        <SmallerContainer />
        <SmallerContainer />
        <SmallerContainer />
        <SmallerContainer />
        <SmallerContainer />
        <SmallerContainer />
      </Wrapper>
    </Row>
  );
}
