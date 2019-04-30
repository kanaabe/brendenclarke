import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"

const Nav = () => (
  <StaticQuery
    query={graphql`
      {
        site {
          siteMetadata {
            authorName
          }
        }
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
        <NavLink href="/">{data.site.siteMetadata.authorName}</NavLink>
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
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  top: 0;
  background-color: transparent;
`

const NavLink = styled.a`
  color: black;
  text-decoration: none;
  font-size: 20px;
  padding: 15px;
`

export { Nav }
