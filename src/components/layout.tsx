/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

const Layout = ({ children }: any) => {

  return (
      <div
        style={{
          margin: `0 auto`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        <footer style={{ padding: '20px' }}>
          © {new Date().getFullYear()}, <span style={{ fontSize: '15px' }}>Joe Pothiboot</span>
          {` `}
        </footer>
      </div>
  )
}

export default Layout
