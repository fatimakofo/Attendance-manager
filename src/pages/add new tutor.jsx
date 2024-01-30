import React from "react";
import CustomBtn from "../components/custom-button";
import CustomInput from "../components/custom-input";
import {
  Align,
  Button,
  Gap,
  Header,
  Paragraph,
  Row,
  Wrapper,
} from "../layout/uis";
import { base_url } from "../utils/constants";

export default function AddTutor({ closeModal }) {
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
    course: "",
    name: "",
  });
  const [loading, setLoading] = React.useState(false);
  const [err, setErr] = React.useState("");

  function submitHandler(e) {
    e.preventDefault();
    setLoading(true);
    setErr("");
    fetch(`${base_url}/user/tutor`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((output) => {
        if (output.status.toLowerCase() !== "success") throw output.message;
        alert(output.message);
        closeModal();
      })
      .catch((err) => setErr(err))
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <div
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        backgroundColor: "rgba(0,0,0,0.5)",
        height: "100dvh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Wrapper
        width={"40%"}
        padding={"50px 100px"}
        border={"5px"}
        shadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;"}
        background={"white"}
      >
        <Row>
          <Header color={"rgba(34, 46, 80, 1)"} width={"70%"} margin={"auto"}>
            Add New Tutor
          </Header>
          <button onClick={closeModal}>Close</button>
        </Row>
        <Gap margin={"25px"} />
        <form onSubmit={submitHandler}>
          <CustomInput
            label="Name"
            type="text"
            placeholder="Enter your Name"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <Gap margin={"10px"} />
          <CustomInput
            label="Email"
            type="email"
            placeholder="Enter your email"
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <Gap margin={"10px"} />
          <CustomInput
            label="Password"
            type="password"
            placeholder="Enter your Password"
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
          <Gap margin={"10px"} />
          {/* 
            frontend,backend, full stack, data analytics, data science, ui/ux design
          */}
          <CustomInput
            type="select"
            placeholder="Select course"
            onChange={(e) =>
              setFormData({ ...formData, course: e.target.value })
            }
          />{" "}
          {err && (
            <>
              <Gap margin={"10px"} />
              <Paragraph justify={"center"} color={"red"}>
                {err}
              </Paragraph>
            </>
          )}
          <Gap margin={"30px"} />
          <CustomBtn name="Submit" loading={loading} />
        </form>
      </Wrapper>
    </div>
  );
}
