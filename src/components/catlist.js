import React from "react"

import * as style from "./catlist.module.css"

const Catlist = ({ postObject }) => {
  return (
    <div className={style.article__catlist}>
      {postObject.categories.nodes.map((category, index) => [
        index > 0 && ", ",
        <p>
          {category.name}
        </p>,
      ])}
    </div>
  )
}

export default Catlist
