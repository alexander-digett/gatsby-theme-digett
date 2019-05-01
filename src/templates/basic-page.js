import React from 'react'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import Container from '../components/container'
import styled from 'styled-components'
import * as variable from '../components/variables.js'
import MarkdownConverter from '../components/markdownconverter'

const BasicStyle = styled.div`
  .basic-page-container{
    padding:${variable.padding}
  }
`

export const BasicPageTemplate = ({
    title,
    content,
    slug,
  }) => {
    return (
        <div>
        <h1>{title}</h1>
        <MarkdownConverter
          markdown={content}>
        </MarkdownConverter>
          
        </div>
    )
  }

const BasicPage = ({ data }) => {
    const { markdownRemark: post } = data
  
    return (
      <Layout>
        <BasicStyle>
        <Container className="basic-page-container">
        <BasicPageTemplate
          content={post.html}
          frontmatter={post.frontmatter}
          title={post.frontmatter.title}
          slug={post.fields.slug}
        />
        </Container>
        </BasicStyle>
      </Layout>
    )
  }

export default BasicPage

export const pageQuery = graphql`
  query BasicPageByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      fields{
        slug
      }
      frontmatter {
        title
      }
    }
  }
`