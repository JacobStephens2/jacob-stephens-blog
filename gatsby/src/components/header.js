import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import MainNav from "./mainNav"
import * as style from "./header.module.css"

const Header = ({ siteTitle }) => {
  return (
  <div
    style={{
      display: `flex`,
      justifyContent: `center`,
    }}
  >
  <header
    style={{
      background:  `var(--dark-green)`,
      marginBottom: `1rem`,
      paddingBottom: 0,
      position: `fixed`,
      width: `100%`,
      zIndex: `2`,
    }}
  >
    <div
      className={style.headerBox}
    >
      <h1 style={{
        display: `inline-block`,
        margin: 0,
        paddingBottom: `1rem`,
        }}>
        <Link
          to="/"
          style={{
            color: `var(--cream)`, // white
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
        <MainNav style={{ zIndex: 99,}} />
    </div>
  </header>
  </div>
)
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
