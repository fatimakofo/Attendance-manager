import { useContext } from "react";
import React from "react";
import { Gap, Paragraph } from "../../../layout/uis";
import ContainerTable from "../../../components/custom-container";
import SmallerContainer from "../../../components/smaller-container";

import { AppContext } from "../../../context";
import AdminTemp from "../adminTemp";

export default function Students() {
  const { students } = useContext(AppContext);

  return (
    <AdminTemp>
      <Paragraph>Students</Paragraph>
      <Gap margin={"25px"} />
      <ContainerTable
        numberTitle="S/N"
        nameTitle="Name"
        emailTitle="Email"
        courseTitle="Course"
        cohortTitle="Cohort"
      />
      {students.map((student, index) => (
        <SmallerContainer
          number={index + 1}
          name={student.name}
          email={student.email}
          course={student.course.toUpperCase()}
          cohort="23-01"
        />
      ))}
    </AdminTemp>
  );
}
