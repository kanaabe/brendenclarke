import React from "react";
import styled from "styled-components";
import { Link, StaticQuery, graphql } from "gatsby";
import iconGrid from "../assets/icon-grid.svg";
import iconCarousel from "../assets/icon-carousel.svg";
import { Text } from "./LayoutPrimitives";
import { Box } from "rebass";

const ProjectNav = ({
  location,
  width,
  carouselView,
  carouselIndex,
  numberOfImages,
  handleCarouselIconClick,
  handleGridIconClick,
}) => (
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
              }
            }
          }
        }
      }
    `}
    render={(data) => (
      <StyledNav width={width}>
        {data.allMarkdownRemark.edges.map((project) => {
          const href = `${project.node.fields.slug}`;

          return (
            <NavLink
              isActive={location.pathname.indexOf(href) > -1}
              key={project.node.fields.slug}
              to={href}
            >
              {project.node.frontmatter.title}
            </NavLink>
          );
        })}

        <Box padding="5px 30px">
          {carouselView ? (
            <Box display="flex" alignItems="center">
              <img
                src={iconGrid}
                width={16}
                height={16}
                onClick={handleGridIconClick}
                style={{ cursor: "pointer" }}
              />
              <Text size="12px" style={{ padding: "0 10px" }}>
                {carouselIndex + 1} / {numberOfImages}
              </Text>
            </Box>
          ) : (
            <img
              src={iconCarousel}
              width={16}
              height={16}
              onClick={handleCarouselIconClick}
              style={{ cursor: "pointer" }}
            />
          )}
        </Box>
      </StyledNav>
    )}
  />
);

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
`;

const NavLink = styled(Link)`
  font-family: Raleway, sans-serif;
  color: black;
  font-style: none;
  font-weight: ${(props) => (props.isActive ? 400 : 600)};
  text-decoration: none;
  font-size: 14px;
  padding: 5px 30px;
  width: 175px;

  @media only screen and (max-width: 500px) {
    font-size: 12px;
    text-align: center;
  }
`;

export { ProjectNav };
