import CustomBtn from "../components/custom-button";
import CustomInput from "../components/custom-input";
import { Align, Gap, Header, Wrapper } from "../layout/uis";

export default function AddStudent() {
  return (
    <Align justify={"center"} align={"center"}>
      <Wrapper
        width={"35%"}
        padding={"50px 100px"}
        border={"5px"}
        shadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;"}
      >
        <Align>
          <Header color={"rgba(34, 46, 80, 1)"} width={"80%"} margin={"auto"}>
            Add New Student
          </Header>
        </Align>
        <Gap margin={"25px"} />
        <form>
          <CustomInput label="Name" type="text" placeholder="Enter your Name" />
          <Gap margin={"10px"} />
          <CustomInput
            label="Email"
            type="email"
            placeholder="Enter your email"
          />
          <Gap margin={"10px"} />
          <CustomInput
            label="Password"
            type="password"
            placeholder="Enter your Password"
          />
          <Gap margin={"10px"} />
          <CustomInput type="select" placeholder="Select course" />
          <Gap margin={"30px"} />
          <CustomBtn name="Submit" />
        </form>
      </Wrapper>
    </Align>
  );
}
