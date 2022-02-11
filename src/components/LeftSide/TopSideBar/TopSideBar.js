import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { Briefcase, DollarSign, Facebook, Instagram, Layers, Linkedin } from "react-feather"

import "./topSideBar.module.scss"

const TopSideBar = () => (
  <div className="topSideBar">
    <div className="imgProfile">
      <StaticImage />
    </div>
    <div className="nameProfile">
      <h4>Muhammad Hasim As'ari</h4>
      <span>Front-End Developer & Web Designer</span>
      <div className="socialMobile">
        <ul className="listUnstyled">
          <li>
            <Link to="/" target="_blank" className="fbIcon">
              <Facebook size={24} />
            </Link>
          </li>
          <li>
            <Link to="/" target="_blank" className="instaIcon">
              <Instagram size={24} />
            </Link>
          </li>
          <li>
            <Link to="/" target="_blank" className="linkedIn">
              <Linkedin size={24} />
            </Link>
          </li>
        </ul>
      </div>
      <div className="infoProfile">
        <div className="infoBox experience">
          <Briefcase size={24} />
          <span className="number">3</span>
          <span className="title">Years</span>
        </div>
        <div className="infoBox rate">
          <DollarSign size={24} />
          <span className="number">24</span>
          <span className="title">Hours</span>
        </div>
        <div className="infoBox work">
          <Layers size={24} />
          <span className="number">12</span>
          <span className="title">Projects</span>
        </div>
      </div>
    </div>
  </div>
)

export default TopSideBar
