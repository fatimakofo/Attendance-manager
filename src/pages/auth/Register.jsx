import { Gap, Align, Paragraph } from "../../layout/uis";
import CustomInput from "../../components/custom-input";
import CustomBtn from "../../components/custom-button";
import AuthTemplate from "./auth_template";
import { Link, useNavigate } from "react-router-dom";
import React from "react";
import { base_url } from "../../utils/constants";

export default function Register() {
  const navigate = useNavigate();
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [err, setErr] = React.useState("");

  function submitHandler(e) {
    e.preventDefault();
    setLoading(true);
    const payload = {
      email,
      name: username,
      password,
    };
    // Sending a request using fetch method
    fetch(`${base_url}/user/admin`, {
      // The type of request we are sending
      method: "POST",
      // Request header
      headers: {
        "Content-Type": "application/json",
      },
      // Our request body
      body: JSON.stringify(payload),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        if (data.status.toLowerCase() !== "success") throw data.message;
        if (data?.token) {
          alert(data.message);
          localStorage.setItem("auth-token", data.token);
          navigate("/admin-dashboard");
        }
      })
      .catch((err) => setErr(err))
      .finally(() => {
        setLoading(false);
      });
    console.log(username, email, password);
  }
  return (
    <AuthTemplate header={"Register"}>
      <form onSubmit={submitHandler}>
        <CustomInput
          label="Email"
          type="email"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Gap margin={"25px"} />
        <CustomInput
          label="Username"
          type="username"
          placeholder="Enter your username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <Gap margin={"25px"} />
        <CustomInput
          label="Password"
          type="Password"
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />
        {err && (
          <>
            <Gap margin={"10px"} />
            <Paragraph justify={"center"} color={"red"}>
              {err}
            </Paragraph>
          </>
        )}
        <Gap margin={"20px"} />
        <CustomBtn name="Register" loading={loading} />
        <Align justify={"center"} height={"50px"} align={"center"}>
          <Paragraph>
            Already have an account?{" "}
            <Link to={"/login"}>
              <Paragraph margin={"5px"} color={"rgba(249, 161, 30, 1)"}>
                Log In
              </Paragraph>
            </Link>
          </Paragraph>
        </Align>
      </form>
    </AuthTemplate>
  );
}
