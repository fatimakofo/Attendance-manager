import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  height: 100vh;
  padding: ${({ padding }) => (padding ? padding : "0")};
`;
export const Align = styled.div`
  display: flex;
  justify-content: ${({ justify }) => (justify ? justify : "start")};
  align-items: ${({ align }) => (align ? align : "start")};
  height: ${({ height }) => (height ? height : "calc(100vh-40px)")};
`;
export const CheckBoxWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  column-gap: 50px;
`;
export const Row = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Column = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: ${({ justify }) => (justify ? justify : "center")};
  align-items: ${({ align }) => (align ? align : "center")};
  object-fit: contain;
  flex-grow: ${({ grow }) => (grow ? grow : "1")};
  // padding: ${({ padding }) => (padding ? padding : "0")};
`;
export const LoginImg = styled.img`
  width: 65%;
  height: 100%;
`;
export const Wrapper = styled.div`
  width: ${({ width }) => (width ? width : "60%")};
  height: ${({ height }) => (height ? height : "auto")};
  padding: ${({ padding }) => (padding ? padding : "0")};
  border-radius: ${({ border }) => (border ? border : "0")};
  box-shadow: ${({ shadow }) => (shadow ? shadow : "0")};
  background-color: ${({ background }) => (background ? background : "none")};
`;
export const Input = styled.input`
  width: ${({ width }) => (width ? width : "100%")};
  height: 50px;
  padding: 10px;
  margin-top: 10px;
  border-radius: 5px;
  outline: none;
  accent-color: ${({ accentColor }) =>
    accentColor ? accentColor : "rgba(249, 161, 30, 1)"};
  border: 1px solid rgba(204, 204, 204, 0.8);
`;
export const Gap = styled.div`
  margin: ${({ margin }) => (margin ? margin : "10px")};
`;
export const Button = styled.button`
  width: 100%;
  height: 50px;
  background-color: rgba(249, 161, 30, 1);
  border-radius: 5px;
  color: white;
  border: none;
  outline: none;
  font-size: 20px;
`;
export const SmallBtn = styled.button`
  width: 15%;
  height: 40px;
  background-color: rgba(249, 161, 30, 1);
  border-radius: 5px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  color: white;
  border: none;
  outline: none;
  font-size: 20px;
  // box-shadow: 0 0 20px rgb(173, 201, 201);
`;
export const Paragraph = styled.p`
  font-size: 17px;
  display: flex;
  margin-left: ${({ margin }) => (margin ? margin : "0")};
  margin-right: ${({ marginRight }) => (marginRight ? marginRight : "0")};
  justify-content: ${({ justify }) => (justify ? justify : "start")};
  align-items: ${({ align }) => (align ? align : "start")};
  color: ${({ color }) => (color ? color : "black")};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : "left")};
`;

export const SideNav = styled.div`
  width: 18%;
  background-color: rgba(49, 39, 29, 1);
  height: 100vh;
  padding: 10px;
`;
export const IconContainer = styled.div`
  width: ${({ width }) => (width ? width : "22%")};
  height: ${({ height }) => (height ? height : "auto")};
`;
export const Icon = styled.img`
  width: ${({ width }) => (width ? width : "100%")};
  height: ${({ height }) => (height ? height : "45px")};
`;
export const Header = styled.header`
  font-size: 2rem;
  width: ${({ width }) => (width ? width : "100%")};
  margin: ${({ margin }) => (margin ? margin : "0")};
  color: ${({ color }) => (color ? color : "black")};
  display: ${({ display }) => (display ? display : "start")};
  align-items: ${({ align }) => (align ? align : "start")};
  justify-content: ${({ justify }) => (justify ? justify : "start")};
`;
export const Li = styled.li`
list style: none;
font-size: 1.2rem;
color: rgba(240, 237, 237, 0.5);
display: flex;
align-items: center;
`;
export const Links = styled.a`
  text-decoration: none;
  color: ${({ color }) => (color ? color : "white")};
  margin-left: 20px;
`;
export const Line = styled.hr`
  background-color: rgba(158, 154, 154, 1);
`;
export const Card = styled.div`
  width: 30%;
  height: 200px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: rgba(49, 39, 29, 1);
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 20px rgb(173, 167, 167);
`;
export const H3 = styled.h3`
  font-size: 1.2rem;
  color: white;
`;
export const H2 = styled.h2`
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "1.6rem")};
  color: black;
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "0")};
`;
export const Span = styled.span`
  font-size: 1.2rem;
  color: ${({ color }) => (color ? color : "rgba(249, 161, 30, 1)")};
  margin-top: ${({ marginTop }) => (marginTop ? marginTop : "0")};
  margin-left: ${({ marginLeft }) => (marginLeft ? marginLeft : "0")};
`;
export const Text = styled.p`
  font-size: ${({ font }) => (font ? font : "1rem")};
  color: ${({ color }) => (color ? color : "black")};
  width: 100%;
  // padding: 0 95px;
`;
export const Head = styled.p`
  width: 100%;
  color: White;
  padding: ${({ padding }) => (padding ? padding : " 13px 0")};
  border-radius: ${({ border }) => (border ? border : "0")};
  background-color: ${({ background }) =>
    background ? background : "rgba(249, 161, 30, 1)"};
`;

export const Container = styled.div`
  width: 100%;
  height: auto;
  // border-radius: 5px;
  color: white;
  display: flex;
  text-align: center;
`;
