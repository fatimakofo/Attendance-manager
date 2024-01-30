import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  max-width: "1600px";
`;

export const Wrapper = styled.div`
  width: 80%;
  margin: auto;
  max-width: 1400px;
  height: calc(100vh - 60px);
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-item: center;
  width: 100%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Align = styled.div`
  display: flex;
  align-items: ${({ alignItems }) => (alignItems ? alignItems : "center")};
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : "start"};
  height: ${({ height }) => (height ? height : "calc(100vh - 40px)")};
  width: 100%;
`;

export const Column = styled.div`
  width: 50%;
  flex: ${({ flexGrow }) => (flexGrow ? flexGrow : "1")};
`;

export const Paragraph = styled.p`
  color: ${({ color }) => (color ? color : "black")};
`;

export const Gap = styled.div`
  margin: ${({ margin }) => (margin ? margin : "10px")};
`;

export const Input = styled.input`
  width: 100%;
  padding: 3px 4px;
  border: 1px solid #ccc;
  border-radius: 5px;
  height: 45px;
  margin-top: 6px;
`;

export const Button = styled.button`
  width: 100%;
  padding: 15px;
  border-radius: 8px;
  border: none;
  color: ${({ color }) => (color ? color : "#FFF")};
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : "#F9A11E"};
    font-weight: 800;
    font-size: 24px;
`;
