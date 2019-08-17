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
        >
          Photography
        </NavLink>
        <NavLink to="/film" isActive={location.pathname.indexOf("film") > -1}>
          Film
        </NavLink>
        <NavLink to="/about" isActive={location.pathname === "about"}>
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
  justify-content: space-between;
  width: 100vw;
  top: 0;
  background-color: transparent;
  z-index: 1000;

  @media only screen and (max-width: 500px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

const NavLink = styled(Link)`
  font-family: Rubik, sans-serif;
  color: ${props => (props.isActive ? "red" : "black")};
  text-decoration: none;
  font-size: 20px;
  letter-spacing: 3px;
  padding: 15px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    color: red;
  }

  @media only screen and (max-width: 500px) {
    font-size: 12px;
    padding: 5px;
  }
`

export { Nav }
