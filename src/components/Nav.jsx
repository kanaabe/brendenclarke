import React from "react";
import styled from "styled-components";
import { Link, StaticQuery, graphql } from "gatsby";

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
    render={(data) => (
      <StyledNav>
        <NavLink to="/" isActive={location.pathname === "/"}>
          {data.site.siteMetadata.authorName}
        </NavLink>
        <NavLink to="/about" isActive={location.pathname === "about"} isSubLink>
          About
        </NavLink>
      </StyledNav>
    )}
  />
);

const StyledNav = styled.div`
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  top: 0;
  background-color: transparent;
  z-index: 1000;

  @media only screen and (max-width: 500px) {
    align-items: center;
    padding: 10px;
  }
`;

const NavLink = styled(Link)`
  font-family: Raleway, sans-serif;
  color: black;
  font-style: ${(props) =>
    props.isActive && props.isSubLink ? "italic" : "none"};
  text-decoration: none;
  font-size: ${(props) => (props.isSubLink ? "16px" : "30px")};
  font-weight: ${(props) => (props.isSubLink ? 400 : 400)};
  letter-spacing: 3px;
  padding: 15px;
  margin: 0;
  cursor: pointer;

  @media only screen and (max-width: 500px) {
    font-size: ${(props) => (props.isSubLink ? "16px" : "20px")};
    font-weight: ${(props) => (props.isSubLink ? 400 : 400)};
    padding: 5px;
    margin: 0;
  }
`;

export { Nav };
