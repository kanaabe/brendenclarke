import React from "react"
import styled from "styled-components"
import { Link, StaticQuery, graphql } from "gatsby"

const Nav = ({ location }) => (
  <StaticQuery
    query={graphql`
      {
        site {
          siteMetadata {
            authorName
          }
        }
      }
    `}
    render={data => (
      <StyledNav>
        <NavLink to="/" isActive={location.pathname === "/"}>
          {data.site.siteMetadata.authorName}
        </NavLink>
        <NavLink
          to="/photography"
          isActive={location.pathname.indexOf("photography") > -1}
          isSubLink
        >
          Photography
        </NavLink>
        <NavLink
          to="/film"
          isActive={location.pathname.indexOf("film") > -1}
          isSubLink
        >
          Film
        </NavLink>
        <NavLink to="/about" isActive={location.pathname === "about"} isSubLink>
          About
        </NavLink>
      </StyledNav>
    )}
  />
)

const StyledNav = styled.div`
  display: flex;
  position: fixed;
  align-items: center;
  width: 100%;
  top: 0;
  background-color: transparent;
  z-index: 1000;

  @media only screen and (max-width: 500px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

const NavLink = styled(Link)`
  font-family: Arial, sans-serif;
  color: ${props => (props.isActive ? "rgb(140, 140, 190)" : "black")};
  font-style: ${props =>
    props.isActive && props.isSubLink ? "italic" : "none"};
  text-decoration: none;
  font-size: ${props => (props.isSubLink ? "16px" : "20px")};
  letter-spacing: 3px;
  padding: 15px;
  font-weight: ${props => (props.isSubLink ? 300 : 600)};
  margin: 0;
  cursor: pointer;
  &:hover {
    color: rgb(140, 140, 190);
    font-style: italic;
  }

  @media only screen and (max-width: 500px) {
    font-size: 12px;
    padding: 5px;
    margin: 0;
  }
`

export { Nav }
