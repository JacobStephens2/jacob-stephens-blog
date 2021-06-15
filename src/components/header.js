import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import MainNav from "./mainNav"

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
      style={{
        margin: `0 auto`,
        maxWidth: `var(--content-w-narrow)`,
        padding: `1rem 0 0 0`,
        position: `relative`,
      }}
    >
      <h1 style={{
        display: `inline-block`,
        margin: 0,
        paddingBottom: `1rem`,
        paddingLeft: `1rem`,
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
