import * as React from "react"
import { Col } from "react-bootstrap"
import "./leftSide.module.scss";
import TopHeader from "./TopHeader/TopHeader";
import TopSideBar from "./TopSideBar/TopSideBar";
import FooterSideBar from "./FooterSideBar/FooterSideBar";
import SocialNner from "./SocialNner/SocialNner";
import { DownloadCloud } from "react-feather";

const LeftSide = ({ id }) => (
  <Col md={12} lg={6}>
    <header className="leftSide" id={id}>
      <TopHeader />
      <button className="downResume"><DownloadCloud size={24} /></button>
      <TopSideBar />
      <FooterSideBar />
      <SocialNner />
    </header>
  </Col>
)


export default LeftSide
