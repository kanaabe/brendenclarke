import styled from "styled-components"

export const ProjectViewport = styled.div`
  display: inline-grid;
  width: 100vw;
  height: 100vh;
  overflow: scroll;

  @media only screen and (max-width: 500px) {
    margin-top: 64px;
  }
`

export const ProjectTrack = styled.div`
  display: flex;
  width: 100%;
  height: 70vh;
  margin: auto 0;

  @media only screen and (max-width: 500px) {
    width: 100vw;
    height: 100%;
    flex-direction: column;
    margin: auto;
  }
`

export const ImageContainer = styled.div`
  display: inline-block;
  width: 100%;
  height: 100%;
  padding: 0 30px;
  text-align: center;

  @media only screen and (max-width: 500px) {
    padding: 0;
    margin: 30px 0;
    width: 100vw;
    height: auto;
  }
`
