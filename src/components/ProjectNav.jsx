import React from "react"
import styled from "styled-components"
import { Link, StaticQuery, graphql } from "gatsby"

const ProjectNav = ({ category, location }) => (
  <StaticQuery
    query={graphql`
      {
        allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/project/" } }
        ) {
          edges {
            node {
              id
              html
              frontmatter {
                title
                slug
                category
              }
            }
          }
        }
      }
    `}
    render={data => (
      <StyledNav>
        {data.allMarkdownRemark.edges.map(project => {
          if (project.node.frontmatter.category !== category) return ""
          const href = `/project/${project.node.frontmatter.slug}`

          return (
            <NavLink
              isActive={location.pathname.indexOf(href) > -1}
              key={project.node.frontmatter.slug}
              to={href}
            >
              {project.node.frontmatter.title}
            </NavLink>
          )
        })}
      </StyledNav>
    )}
  />
)

const StyledNav = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  top: 0;
  left: 0;

  @media only screen and (max-width: 500px) {
    display: none;
  }
`

const NavLink = styled(Link)`
  font-family: Arial, Helvetica, sans-serif, sans-serif;
  color: ${props => (props.isActive ? "rgb(140, 140, 190)" : "black")};
  font-style: ${props => (props.isActive ? "italic" : "none")};
  text-decoration: none;
  font-size: 12px;
  padding: 5px 30px;
  width: 220px;

  &:hover {
    color: rgb(140, 140, 190);
    font-style: italic;
  }

  @media only screen and (max-width: 500px) {
    font-size: 12px;
  }
`

export { ProjectNav }
