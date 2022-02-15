import { Link } from "gatsby"
import React from "react"
import { Facebook, Instagram, Linkedin } from "react-feather"

import * as styles from "./socialNner.module.scss"

const SocialNner = () => {
  return (
    <div className={styles.socialNner}>
      <ul className="listUnstyled">
        <li>
          <Link to="" target="_blank" className={styles.fbIcon}>
            <Facebook size={24} />
          </Link>
        </li>
        <li>
          <Link to="" target="_blank" className={styles.instaIcon}>
            <Instagram size={24} />
          </Link>
        </li>
        <li>
          <Link to="" target="_blank" className={styles.linkedinIcon}>
            <Linkedin size={24} />
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default SocialNner
