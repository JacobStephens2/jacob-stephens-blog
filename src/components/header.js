import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import MainNav from "./mainNav"

const Header = ({ siteTitle }) => {
  return (
  <header
    style={{
      background:  `var(--dark-green)`,
      marginBottom: `1rem`,
      position: `fixed`,
      width: `100vw`,
      zIndex: `2`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1rem 1rem 0 0`,
      }}
    >
      <h1 style={{
        display: `inline-block`,
        margin: 0,
        marginLeft: `1rem`,
        }}>
        <Link
          to="/"
          style={{
            color: `var(--white)`, // white
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
        <MainNav style={{ zIndex: 99,}} />
    </div>
  </header>
)
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
