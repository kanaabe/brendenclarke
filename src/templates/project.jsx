import React, { useState, useRef } from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import LazyLoad from "react-lazyload";
import { Nav } from "../components/Nav";
import { Body } from "../components/LayoutPrimitives";
import { LayoutWrapper } from "../components/LayoutWrapper";
import Masonry from "react-masonry-component";
import { Box } from "rebass";
import { ProjectNav } from "../components/ProjectNav";

export default ({ data, location }) => {
  const { mediaList } = data.markdownRemark.frontmatter;
  const [carouselView, setCarouselView] = useState(true);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const masonryRef = useRef();

  const handleLeftClick = () => {
    if (carouselIndex === 0) {
      setCarouselIndex(mediaList.length - 1);
    } else {
      setCarouselIndex(carouselIndex - 1);
    }
  };

  const handleRightClick = () => {
    if (carouselIndex === mediaList.length - 1) {
      setCarouselIndex(0);
    } else {
      setCarouselIndex(carouselIndex + 1);
    }
  };

  const handleGridImageClick = (e) => {
    const index = e.target.dataset.index;
    console.log(index);
    setCarouselIndex(parseInt(index));
    setCarouselView(true);
  };

  const handleGridIconClick = () => {
    setCarouselIndex(0);
    setCarouselView(false);
  };

  const handleCarouselIconClick = () => {
    setCarouselIndex(0);
    setCarouselView(true);
  };

  return (
    <LayoutWrapper>
      <Body className="body-scroll">
        <Nav location={location} />
        <ProjectNav
          width="175px"
          location={location}
          setCarouselView={setCarouselView}
          carouselView={carouselView}
          carouselIndex={carouselIndex}
          numberOfImages={mediaList.length}
          handleGridIconClick={handleGridIconClick}
          handleCarouselIconClick={handleCarouselIconClick}
        />
        {carouselView ? (
          <CarouselWrapper>
            <CarouselImage src={mediaList[carouselIndex].media} />
            <LeftNavigation onClick={handleLeftClick} />
            <RightNavigation onClick={handleRightClick} />
          </CarouselWrapper>
        ) : (
          <Masonry
            style={{
              width: "100%",
              marginTop: "100px",
            }}
            options={{
              horizontalOrder: true,
              percentPosition: true,
              columnWidth: ".grid-item",
              gutter: 5,
              updateOnEachImageLoad: true,
            }}
            ref={masonryRef}
          >
            {/* <MasonryDiv> */}
            {mediaList.map((media, i) => {
              return (
                <GridBox className="grid-item" width="31%" key={media.title}>
                  {i < 5 ? (
                    <GridImg
                      alt={media.title}
                      src={media.media}
                      onClick={handleGridImageClick}
                      data-index={i}
                      onLoad={() => {
                        if (masonryRef.current && masonryRef.current.masonry) {
                          masonryRef.current.masonry.layout();
                        }
                      }}
                    />
                  ) : (
                    <LazyLoad
                      scrollContainer={".body-scroll"}
                      overflow
                      placeholder={<Box height="300px"></Box>}
                      once
                    >
                      <GridImg
                        alt={media.title}
                        src={media.media}
                        onClick={handleGridImageClick}
                        data-index={i}
                        onLoad={() => {
                          if (
                            masonryRef.current &&
                            masonryRef.current.masonry
                          ) {
                            masonryRef.current.masonry.layout();
                          }
                        }}
                      />
                    </LazyLoad>
                  )}
                </GridBox>
              );
            })}
            {/* </MasonryDiv> */}
          </Masonry>
        )}
      </Body>
    </LayoutWrapper>
  );
};

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        mediaList {
          media
          title
        }
      }
    }
  }
`;

const GridImg = styled.img`
  width: 100%;
  height: auto;
  cursor: pointer;
`;

const CarouselImage = styled.img`
  object-fit: contain;
  width: 100%;
  height: calc(100vh - 124px);
  user-select: none;
`;

const LeftNavigation = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: calc((100vw - 175px) / 2);
  height: 100%;
  cursor: w-resize;
`;

const RightNavigation = styled(LeftNavigation)`
  right: 0;
  left: unset;
  cursor: e-resize;
`;

const CarouselWrapper = styled.div`
  margin-top: 100px;
  width: calc(100vw - 175px);
  height: calc(100vh - 100px);
  position: relative;
  margin-bottom: 24px;

  @media only screen and (max-width: 500px) {
    width: calc(100vw);
    margin-top: auto;
  }
`;

const GridBox = styled.div`
  width: 31%;

  @media only screen and (max-width: 500px) {
    width: 49%;
  }
`;
