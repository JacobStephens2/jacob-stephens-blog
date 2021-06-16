import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Welcome to Jacob Stephens' personal&nbsp;site.</h1>
    <ul>
      <li>
        <Link to="/posts/">Posts</Link>
      </li>
      <li>
        <Link to="/about/">About</Link>
      </li>
      <li>
        <Link to="/meet/">Meet</Link>
      </li>
      <li>
        <Link to="/message/">Message</Link>
      </li>
      <li>
        <a href="https://boardgamegeek.com/geekmarket/user/JacobCStephens13?pageid=1">Board Games for sale at BoardGameGeek</a>
      </li>
    </ul>
  </Layout>
)

export default IndexPage
