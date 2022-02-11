import * as React from "react"
import { Link } from "gatsby"
import { DownloadCloud, Share2 } from "react-feather"

import "./topHeader.module.scss"

const TopHeader = () => (
  <div className="topHeader">
    <div className="socialLink">
      <button className="bttn">
        <Share2 size={24} />
        <span className="toolTipContent">My Social Link</span>
      </button>
    </div>
    <div className="downloadCV">
      <Link to="/" className="bttn">
        <DownloadCloud size={24} />
        <span className="toolTipContent">Download CV</span>
      </Link>
    </div>
  </div>
)

export default TopHeader