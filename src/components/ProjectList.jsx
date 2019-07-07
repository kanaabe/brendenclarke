import React from "react"
import styled from "styled-components"

const ProjectList = ({ projects }) => {
  console.log(projects)
  return (
    <Body>
      {projects.map(project => (
        <ProjectBlock
          backgroundUrl={project.node.frontmatter.thumbnailImage}
          href={`/project/${project.node.frontmatter.slug}`}
        />
      ))}
    </Body>
  )
}

export { ProjectList }

const Body = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 53px;
`

const ProjectBlock = styled.a`
  width: 200px;
  height: 100px;
  margin: 20px;
  background-image: url('${props => props.backgroundUrl}');
  background-color: black;
  background-size: cover;
  background-position: center;

  :hover {
    border: 2px solid red;
  }

  @media only screen and (max-width: 500px){
    width: 100%;
  }
`
