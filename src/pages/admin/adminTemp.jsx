import React from "react";
import { Wrapper, Row, Paragraph } from "../../layout/uis";
import Side from "../../components/custom-sidenav";

export default function AdminTemp({ children }) {
  return (
    <>
      <Row>
        <Side
          heading="Admin"
          first={{ name: "Dashboard", route: "/admin-dashboard" }}
          second={{ name: "Students", route: "/students" }}
          third={{ name: "Tutors", route: "/tutors" }}
          dashboardImg="attendance images/dashboard.png"
          studentImg="attendance images/student white.png"
          tutorImg="attendance images/tutor white.png"
        />
        <Wrapper width={"85%"} padding={"20px"} height={"100vh"}>
          {children}
          <Paragraph color={"rgba(249, 161, 30, 1)"} justify={"end"}>
            See More...
          </Paragraph>
        </Wrapper>
      </Row>
    </>
  );
}
