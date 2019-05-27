import React from "react"
import styled from "styled-components"
import { Link, StaticQuery, graphql } from "gatsby"

const WorkNav = ({ location }) => (
  <StaticQuery
    query={graphql`
      {
        allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/work/" } }) {
          edges {
            node {
              id
              html
              frontmatter {
                title
                slug
              }
            }
          }
        }
      }
    `}
    render={data => (
      <StyledNav>
        {data.allMarkdownRemark.edges.map(work => {
          const href = `/work/${work.node.frontmatter.slug}`

          return (
            <NavLink
              isActive={location.pathname.indexOf(href) > -1}
              key={work.node.frontmatter.slug}
              to={href}
            >
              {work.node.frontmatter.title}
            </NavLink>
          )
        })}
      </StyledNav>
    )}
  />
)

const StyledNav = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 300px;
  top: 0;
  left: 0;
`

const NavLink = styled(Link)`
  font-family: Cutive Mono, sans-serif;
  color: ${props => (props.isActive ? "red" : "black")};
  text-decoration: none;
  font-size: 14px;
  padding: 5px 30px;
  font-weight: bold;

  &:hover {
    color: red;
  }

  @media only screen and (max-width: 500px) {
    font-size: 12px;
  }
`

export { WorkNav }
