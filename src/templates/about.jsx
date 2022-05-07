import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import { Nav } from "../components/Nav";
import { Body, Text } from "../components/LayoutPrimitives";
import { LayoutWrapper } from "../components/LayoutWrapper";
import { MarkdownContent } from "../components/MarkdownContent";

export default ({ data, location }) => {
  const { image, mainCopy, subCopy } = data.markdownRemark.frontmatter;
  return (
    <LayoutWrapper>
      <Body>
        <Nav location={location} />
        <Container>
          <Image image={image} />
          <TextContainer>
            <Text size="16px" lineHeight="24px">
              <MarkdownContent content={mainCopy} />
            </Text>
            <Spacer />
            <Text size="16px" lineHeight="24px">
              <MarkdownContent content={subCopy} />
            </Text>
          </TextContainer>
        </Container>
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
        image
        mainCopy
        subCopy
      }
    }
  }
`;

const Spacer = styled.div`
  height: 40px;
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 50%;
  padding: 20px;

  @media only screen and (max-width: 500px) {
    width: 100%;
  }
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding-top: 100px;

  @media only screen and (max-width: 500px) {
    display: block;
    padding-top: 93px;
  }
`;

const Image = styled.div`
  width: 40%;
  height: 100%;
  background-image: url(${(props) => props.image});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;

  @media only screen and (max-width: 500px) {
    width: 100%;
    margin-bottom: 50px;
  }
`;
