import React from "react"

import * as style from "./footer.module.css"

const Footer = () => {
  return (
    <div 
      style = {{
        display: `flex`,
        justifyContent: `center`,  
    }}
    >
    <footer className={style.footer}>
      <div>
        © {new Date().getFullYear()}
        {` `}
        <a href="https://www.jacobstephens.net">Jacob Stephens</a>
        &ensp;|&ensp;
        <a href="/privacy-policy">Privacy Policy</a>
      </div>
    </footer>
    </div>
  )
}

export default Footer
