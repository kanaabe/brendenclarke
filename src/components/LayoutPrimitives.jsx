import styled from "styled-components";

const Body = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  overflow: scroll;
`;

const Text = styled.div`
  font-family: Raleway, sans-serif;
  font-weight: 400;
  font-size: ${(props) => props.size || "24px"};
  line-height: ${(props) => props.lineHeight || "24px"};
`;

export { Body, Text };
