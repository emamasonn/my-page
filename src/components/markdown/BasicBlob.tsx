import { Box } from "@chakra-ui/react";
import styled, { keyframes } from "styled-components";

const BasicBlob = () => {
  return <Blob />;
};

const move = keyframes`
from {
  //transform: translate(0px, -50px) rotate(-90deg);
  border-radius: 30% 70% 31% 69% / 30% 30% 70% 70%;
}

to {
  //transform: translate(500px, 100px) rotate(-10deg);
  border-radius: 58% 42% 33% 67% / 53% 63% 37% 47%;
}

`;

const Blob = styled.div`
  width: 200px;
  height: 200px;
  background: #ff8800;
  position: absolute;
  //mix-blend-mode: darken;
  animation: ${move} 3s infinite alternate;
`;

export default BasicBlob;
