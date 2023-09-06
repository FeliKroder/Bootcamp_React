import styled from "styled-components";

export default function BoxWithStyledComponents(props) {
  console.log(props);
  return <StyledBox $StyledBoxisBlack={props.$isBlack}></StyledBox>;
}

const StyledBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${(props) => (props.$StyledBoxisBlack ? "black" : "green")};
  margin: 2rem;
  &:hover {
    background-color: red;
  }
`;
