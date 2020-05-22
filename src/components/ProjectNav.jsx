import React from "react"
import styled from "styled-components"
import { Link, StaticQuery, graphql } from "gatsby"

const ProjectNav = ({ category, location, width }) => (
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
              fields {
                slug
              }
              frontmatter {
                title
                category
              }
            }
          }
        }
      }
    `}
    render={(data) => (
      <StyledNav width={width}>
        {data.allMarkdownRemark.edges.map((project) => {
          if (project.node.frontmatter.category !== category) return ""
          const href = `${project.node.fields.slug}`

          return (
            <NavLink
              isActive={location.pathname.indexOf(href) > -1}
              key={project.node.fields.slug}
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
  width: ${(props) => props.width};
  top: 0;
  left: 0;
  position: sticky;

  @media only screen and (max-width: 500px) {
    position: fixed;
    top: unset;
    bottom: 0;
    width: 100vw;
    height: 64px;
    background-color: white;
    z-index: 2;
    flex-direction: row;
    align-items: center;
  }
`

const NavLink = styled(Link)`
  font-family: Arial, Helvetica, sans-serif, sans-serif;
  color: ${(props) => (props.isActive ? "rgb(140, 140, 190)" : "black")};
  font-style: ${(props) => (props.isActive ? "italic" : "none")};
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
