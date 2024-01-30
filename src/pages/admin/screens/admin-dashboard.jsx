import { useContext } from "react";
import React from "react";
import { Align, Line, Gap } from "../../../layout/uis";
import { CustomButton } from "../../../components/custom-button";
import CustomCard from "../../../components/custom-card";
import ContainerTable from "../../../components/custom-container";
import SmallerContainer from "../../../components/smaller-container";

import AddTutor from "../../add new tutor";
import { AppContext } from "../../../context";
import AdminTemp from "../adminTemp";

export default function Dashboard() {
  const { students, tutors } = useContext(AppContext);
  const [addTutorModal, setAddTutorModal] = React.useState(false);

  function toggleAddTutorModal() {
    setAddTutorModal((prev) => !prev);
  }
  return (
    <>
      <AdminTemp>
        <Align justify={"end"}>
          <CustomButton name="Add tutor" onClick={toggleAddTutorModal} />
        </Align>
        <Gap margin={"25px"} />
        <Line />
        <Gap margin={"25px"} />
        <Align justify={"space-between"}>
          <CustomCard heading="Total Students" number={students.length} />
          <CustomCard heading="Available Tutors" number={tutors.length} />
          <CustomCard heading="Current Students" number={students.length} />
        </Align>
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
            cohort="556087EFG-02/23"
          />
        ))}
      </AdminTemp>
      {addTutorModal && <AddTutor closeModal={toggleAddTutorModal} />}
    </>
  );
}
