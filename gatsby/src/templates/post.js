import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import * as style from "./single.module.css"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Catlist from "../components/catlist"
import PostNav from "../components/postNav"
import PostNavSlim from "../components/postNavSlim"

const PostPage = ({ data }) => {
  const post = data.thePost
  return (
    <Layout>
      <Seo title={post.title} />
      <PostNavSlim prevPost={data.prevPost} nextPost={data.nextPost} />
      <article className={style.article}>
        {post.featuredImage && (
          <figure className={style.featimg}>
            <Img
              fluid={post.featuredImage.node.localFile.childImageSharp.fluid}
              alt={post.featuredImage.node.altText}
            />
          </figure>
        )}
        <h1 className={style.article__title}>{post.title}</h1>
        <div className={style.article__meta}>
          by {post.author.node.name}. Published{" "}
          {new Date(post.date).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </div>
        <div
          className={style.article__content}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        <Catlist postObject={post} />
      </article>
      <PostNav prevPost={data.prevPost} nextPost={data.nextPost} />
    </Layout>
  )
}

export default PostPage;

export const query = graphql`
  query($databaseId: Int!, $nextId: Int, $prevId: Int) {
    thePost: wpPost(databaseId: { eq: $databaseId }) {
      date
      databaseId
      content
      title
      author {
        node {
          name
        }
      }
      categories {
        nodes {
          link
          name
        }
      }
      tags {
        nodes {
          link
          name
        }
      }
      featuredImage {
        node {
          altText
          localFile {
            childImageSharp {
              fluid(maxWidth: 1360) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
    nextPost: wpPost(databaseId: { eq: $nextId }) {
      title
      uri
    }
    prevPost: wpPost(databaseId: { eq: $prevId }) {
      title
      uri
    }
  }
`
