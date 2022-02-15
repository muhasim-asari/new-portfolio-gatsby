import * as React from "react"
import { Link } from "gatsby"
import { DownloadCloud, Share2 } from "react-feather"

import * as styles from "./topHeader.module.scss"
import SocialNner from "../SocialNner/SocialNner"

const TopHeader = () => (
  <>
    <div className={styles.topHeader}>
      <div className={styles.socialLink}>
        <button className={styles.bttn}>
          <Share2 size={24} color="#f94b39" />
          <span className={`${styles.toolTipContent} toolTipContent`}>
            My Social Link
          </span>
        </button>
      </div>
      <div className={styles.downloadCV}>
        <Link to="/" className={styles.bttn}>
          <DownloadCloud size={24} color="#2583fd" />
          <span className={`${styles.toolTipContent} toolTipContent`}>
            Download CV
          </span>
        </Link>
      </div>
    </div>
  </>
)

export default TopHeader
