import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Welcome to Jacob Stephens' personal&nbsp;site.</h1>
    <ul>
      <Link to="/posts/">Posts</Link>
    </ul>
    <ul>
      <Link to="/about/">About</Link>
    </ul>
    <ul>
      <Link to="/meet/">Meet</Link>
    </ul>
    <ul>
      <Link to="/message/">Message</Link>
    </ul>
    <ul>
      <a href="https://boardgamegeek.com/geekmarket/user/JacobCStephens13?pageid=1">Board Games for sale</a>
    </ul>
  </Layout>
)

export default IndexPage
