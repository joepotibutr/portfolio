/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"

const Layout = ({ children }: any) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          padding: '20px',
          margin: `0 auto`,
          maxWidth: 920,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, <span style={{ fontSize: '15px' }}>Joe Pothiboot</span>
          {` `}
        </footer>
      </div>
    </>
  )
}

export default Layout
