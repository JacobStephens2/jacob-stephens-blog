import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as style from "../templates/single.module.css"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <section className={style.homeSection}>
      <h1>Welcome to my personal&nbsp;website.</h1>
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
    </section>
  </Layout>
)

export default IndexPage
