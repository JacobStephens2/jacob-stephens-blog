import React from "react"
import { Link } from "gatsby"
import * as style from "./postNav.module.css"

const PostNav = ({ prevPost, nextPost }) => {
  return (
      <nav className={style.postnav}>
        {prevPost && (
          <Link to={`${prevPost.uri}`}>
            <div className={style.postnav__head}>Previous Post</div>
          </Link>
        )}

        {nextPost && (
          <Link to={`${nextPost.uri}`}>
            <div className={style.postnav__head}>Next Post</div>
          </Link>
        )}
      </nav>
  )
}

export default PostNav
