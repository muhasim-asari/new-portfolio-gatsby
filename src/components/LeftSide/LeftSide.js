import * as React from "react"
import { Col } from "react-bootstrap"
import TopHeader from "./TopHeader/TopHeader";
import TopSideBar from "./TopSideBar/TopSideBar";
import FooterSideBar from "./FooterSideBar/FooterSideBar";
import SocialNner from "./SocialNner/SocialNner";
import { DownloadCloud } from "react-feather";

import * as styles from "./leftSide.module.scss"

const LeftSide = ({ id }) => (
  <Col md={12} lg={4}>
    <header className={styles.leftSideWrapper} id={id}>
      <TopHeader />
      <button className={styles.downResume}><DownloadCloud size={24} /></button>
      <TopSideBar />
      <FooterSideBar />
      <SocialNner />
    </header>
  </Col>
)


export default LeftSide
