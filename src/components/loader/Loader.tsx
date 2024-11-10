import { styled } from "styled-components";

export function Loader() {
  return <Box>Loading...</Box>;
}

const Box = styled.div`
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
