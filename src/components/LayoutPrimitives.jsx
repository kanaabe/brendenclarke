import styled from "styled-components"

const Body = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`

const Text = styled.div`
  font-family: ${props =>
    props.mono ? "Ubuntu Mono, sans-serif" : "Arimo, sans-serif"};
  font-size: ${props => props.size || "24px"};
`

export { Body, Text }
