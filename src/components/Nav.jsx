import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"

const Nav = () => (
  <StaticQuery
    query={graphql`
      {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                title
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `}
    render={data => (
      <StyledNav>
        {data.allMarkdownRemark.edges.map(edge => (
          <NavLink key={edge.node.fields.slug} href={edge.node.fields.slug}>
            {edge.node.frontmatter.title}
          </NavLink>
        ))}
      </StyledNav>
    )}
  />
)

const StyledNav = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`

const NavLink = styled.a`
  margin-right: 20px;
`

export { Nav }
