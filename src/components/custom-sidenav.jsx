import Classes from "../pages/style.module.css";
import { Link } from "react-router-dom";
import {
  Gap,
  Align,
  SideNav,
  Wrapper,
  IconContainer,
  Icon,
  Header,
  Li,
  Links,
} from "../layout/uis";
import { useContext } from "react";
import { AppContext } from "../context";

export default function Side(values) {
  const value = useContext(AppContext);
  console.log(value);
  return (
    <SideNav>
      <Align justify={"center"} align={"center"}>
        <Wrapper width={"85%"}>
          <Gap margin={"15px"} />
          <Header display={"flex"} justify={"space-between"} align={"center"}>
            <IconContainer>
              <Icon src="attendance images/mark.png" />
            </IconContainer>
            <h2 className={Classes.h2}>Attendance</h2>
          </Header>
          <Gap margin={"70px"} />
          <ul>
            <Li Heading={values.heading}>{values.heading}</Li>
            <Gap margin={"20px"} />
            <Li>
              <IconContainer width={"14%"}>
                <Icon src={values.dashboardImg} height={"30px"} />
              </IconContainer>
              <Link to={values.first.route}>
                <Links First={values.first.name}>{values.first?.name}</Links>
              </Link>
            </Li>
            <Gap margin={"20px"} />
            <Li>
              <IconContainer width={"14%"}>
                <Icon src={values.studentImg} height={"30px"} />
              </IconContainer>
              <Link to={values.second?.route}>
                <Links Second={values.second.name}>{values.second?.name}</Links>
              </Link>
            </Li>
            <Gap margin={"20px"} />
            <Li>
              <IconContainer width={"14%"}>
                <Icon src={values.tutorImg} height={"30px"} />
              </IconContainer>
              <Link to={values.third?.route}>
                <Links Second={values.third?.name}>{values.third?.name}</Links>
              </Link>
            </Li>
            <Gap margin={"300px"} />
            <Li>
              <IconContainer width={"14%"}>
                <Icon src="attendance images/log out.png" height={"30px"} />
              </IconContainer>
              <Link to="/login">
                <Links color={"red"}>Log Out</Links>
              </Link>
            </Li>
          </ul>
        </Wrapper>
      </Align>
    </SideNav>
  );
}
