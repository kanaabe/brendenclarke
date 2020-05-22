import styled from "styled-components"

export const IFrame = styled.iframe`
  width: calc(70vh * 1.77);
  height: 100%;

  @media only screen and (max-width: 500px) {
    width: 100%;
    height: 245px;
  }
`
