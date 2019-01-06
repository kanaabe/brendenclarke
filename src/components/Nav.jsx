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
        <AuthorName href="/">{data.site.siteMetadata.authorName}</AuthorName>
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
  margin: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  min-width: 150px;
`

const NavLink = styled.a`
  color: black;
  text-decoration: none;
  padding-top: 20px;
  width: 100%;
`

const AuthorName = styled.a`
  font-size: 25px;
  width: 100%;
  text-decoration: none;
`

export { Nav }
