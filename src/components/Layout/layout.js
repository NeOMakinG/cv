import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import {Header} from "../"
import "./layout.css"

const Layout = (props) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} hideMenu={props.hideMenu ? props.hideMenu : false} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 1000,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <main>{props.children}</main>

          {props.hideMenu ?
            null
          :
            <footer>
              © {new Date().getFullYear()}, Built with
              {` `}
              <a href="https://www.gatsbyjs.org">Gatsby</a>
            </footer>
          }
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
