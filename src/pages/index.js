import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import styled from "styled-components"

const BlogLink = styled(Link)`
  text-decoration: none;
`

const BlogTitle = styled.h3`
  margin-bottom: 20px;
  color: blu;
`

const Index = ({ data }) => {
  return (
    <Layout>
      <Seo title="Home" />
      <div>
        <div>
          <h1>Dacether's Thoughts</h1>
          <h4># posts: {data.allMarkdownRemark.totalCount}</h4>
        </div>
        {data.allMarkdownRemark.edges.map(
          ({
            node: {
              id,
              frontmatter: { date, title },
              excerpt,
              fields,
            },
          }) => {
            return (
              <div
                key={id}
                style={{
                  marginBottom: 30,
                  backgroundColor: "#ccc",
                  padding: 10,
                }}
              >
                <BlogLink to={fields.slug}>
                  <BlogTitle style={{ fontWeight: "bold" }}>
                    {title} - {date}
                  </BlogTitle>
                </BlogLink>
                <p style={{ marginBottom: 0 }}>{excerpt}</p>
                <BlogLink to={fields.slug}>Read more...</BlogLink>
              </div>
            )
          }
        )}
      </div>
    </Layout>
  )
}

export default Index

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            date
            description
            title
          }
          excerpt(truncate: true)
          fields {
            slug
          }
        }
      }
    }
  }
`
