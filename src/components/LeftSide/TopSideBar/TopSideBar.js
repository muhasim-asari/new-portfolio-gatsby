import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { Briefcase, Clock, DollarSign, Facebook, Instagram, Layers, Linkedin } from "react-feather"

import * as styles from "./topSideBar.module.scss"

const TopSideBar = () => (
  <div className={styles.topSideBar}>
    <div className={styles.imgProfile}>
      <StaticImage
        src="../../../../static/images/pp.png"
        width={500}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="A Gatsby astronaut"
      />
    </div>
    <div className={styles.nameProfile}>
      <h4>Muhammad Hasim As'ari</h4>
      <span className={styles.asKnown}>Front-End Developer & Web Designer</span>
      <div className={styles.socialMobile}>
        <ul className="listUnstyled">
          <li>
            <Link to="/" target="_blank" className={styles.fbIcon}>
              <Facebook size={18} />
            </Link>
          </li>
          <li>
            <Link to="/" target="_blank" className={styles.instaIcon}>
              <Instagram size={18} />
            </Link>
          </li>
          <li>
            <Link to="/" target="_blank" className={styles.linkedIn}>
              <Linkedin size={18} />
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.infoProfile}>
        <div className={`${styles.infoBox} experience`}>
          <Briefcase size={22} />
          <span className={styles.number}>2</span>
          <span className={styles.title}>Years</span>
        </div>
        <div className={`${styles.infoBox} rate`}>
          <Clock size={22} />
          <span className={styles.number}>24</span>
          <span className={styles.title}>Hours</span>
        </div>
      </div>
    </div>
  </div>
)

export default TopSideBar
