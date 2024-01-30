import { useContext, useEffect } from "react";
import React from "react";
import { Wrapper, Row, Gap, Paragraph } from "../../../layout/uis";
import Side from "../../../components/custom-sidenav";
import ContainerTable from "../../../components/custom-container";
import SmallerContainer from "../../../components/smaller-container";

import { base_url } from "../../../utils/constants";
import AddTutor from "../../add new tutor";
import { AppContext } from "../../../context";
import AdminTemp from "../adminTemp";

export default function Tutors() {
  const { tutors } = useContext(AppContext);
  return (
    <AdminTemp>
      <Paragraph>Tutors</Paragraph>
      <Gap margin={"25px"} />
      <ContainerTable
        numberTitle="S/N"
        nameTitle="Name"
        emailTitle="Email"
        courseTitle="Course"
        cohortTitle="Status"
      />
      {tutors.map((student, index) => (
        <SmallerContainer
          number={index + 1}
          name={student.name}
          email={student.email}
          course={student.course.toUpperCase()}
          cohort="Active"
        />
      ))}
    </AdminTemp>
  );
}
