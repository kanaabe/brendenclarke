import React from "react"
import { graphql } from "gatsby"

export default ({ data }) => {
  const title = data.markdownRemark.frontmatter.title
  return <div>{title}</div>
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
