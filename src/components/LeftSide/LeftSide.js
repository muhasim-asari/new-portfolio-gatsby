import * as React from "react"
// import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Col } from "react-bootstrap"
import "./leftSide.module.scss";
import TopHeader from "./TopHeader/TopHeader";
import TopSideBar from "./TopSideBar/TopSideBar";
import FooterSideBar from "./FooterSideBar/FooterSideBar";
import { DownloadCloud } from "react-feather";

const LeftSide = ({ id }) => (
  <Col md={12} lg={6}>
    <header className="leftSide" id={id}>
      <TopHeader />
      <button className="downResume"><DownloadCloud size={24} /></button>
      <TopSideBar />
      <FooterSideBar />
    </header>
  </Col>
)


export default LeftSide
