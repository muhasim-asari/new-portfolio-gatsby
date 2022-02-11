/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
import { Container, Row } from "react-bootstrap"

import "./layout.scss"
import Seo from "./seo"

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <>
      <Seo title="Home" />
      <div className="wrapperPage">
        <Container>
          <Row>{children}</Row>
        </Container>
      </div>
    </>

    // <>
    //   <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
    //   <div>
    //     <main>{children}</main>
    //     <footer>
    //       © {new Date().getFullYear()}, Built with
    //       {` `}
    //       <a href="https://www.gatsbyjs.com">Gatsby</a>
    //     </footer>
    //   </div>
    // </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
