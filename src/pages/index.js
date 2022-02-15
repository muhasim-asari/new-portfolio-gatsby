import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/Template/layout";
import Seo from "../components/Template/seo";

import "../../static/main.scss"
import LeftSide from "../components/LeftSide/LeftSide";
import RightSide from "../components/RightSide/RightSide";

const IndexPage = () => (
  <Layout>
    <LeftSide />
    <RightSide />
    {/* <Seo title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/page-2/">Go to page 2</Link>
    </p> */}
  </Layout>
)

export default IndexPage
