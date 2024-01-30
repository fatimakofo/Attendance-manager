import { CustomButton } from "../components/custom-button";
import Check from "../components/custom-checkbox";
import Side from "../components/custom-sidenav";
import { Row, Wrapper, Align, Line, Gap, Span, H2, Links } from "../layout/uis";

export default function AttendanceCheckBox() {
  return (
    <Row>
      {/* <Side
        heading="Tutor"
        first="Tutors"
        second="Student scores"
        third="Attendance"
        dashboardImg="attendance images/tutor white.png"
        studentImg="attendance images/student white.png"
        tutorImg="attendance images/orange tutor.png"
      /> */}
      <Side 
       dashboardImg="attendance images/tutor white.png"
       studentImg="attendance images/student white.png"
       tutorImg="attendance images/orange tutor.png"
       >
        <Links>Tutors</Links>
      </Side>
      <Wrapper width={"85%"} padding={"20px"} height={"100vh"}>
        <Align justify={"end"}>
          <CustomButton name="Add Student" />
        </Align>
        <Gap margin={"25px"} />
        <Line />
        <Gap margin={"25px"} />
        <Align justify={"space-between"}>
          <Align>
            <H2 fontWeight={"100"} fontSize={"1.4rem"}>
              Name:{" "}
            </H2>
            <Span color={"black"} marginTop={"3px"} marginLeft={"5px"}>
              Matthew Caleb
            </Span>
          </Align>
          <Span color={"black"}>Attendance 15/45</Span>
        </Align>
        <Gap margin={"25px"} />
        <Align>
          <H2 fontWeight={"100"} fontSize={"1.4rem"}>
            Email:{" "}
          </H2>
          <Span color={"black"} marginTop={"3px"} marginLeft={"5px"}>
            matthewcaleb@gmail.com
          </Span>
        </Align>
        <Gap margin={"25px"} />
        <Align justify={"space-between"}>
          <Align>
            <H2 fontWeight={"100"} fontSize={"1.4rem"}>
              Score:{" "}
            </H2>
            <Span color={"black"} marginTop={"3px"} marginLeft={"5px"}>
              57
            </Span>
          </Align>
          <Span>Graduated</Span>
        </Align>
        <Gap margin={"50px"} />
        <Check />
      </Wrapper>
    </Row>
  );
}
