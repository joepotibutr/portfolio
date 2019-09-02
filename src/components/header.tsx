import PropTypes from "prop-types"
import React from "react"

import { NAVIGATION } from "../constants";

import {NavigationContext} from '../pages/index'


const Header = ({ siteTitle }: any) => (
  <header
    style={{ 
      top: 0,
      position: 'fixed',
      background: 'white',
      height: '80px',
      padding: '20px',
      margin: `0 auto`,
      maxWidth: 720,
      display: 'flex',
      justifyContent: 'space-between'
    }}
  >
    <div
    >
      <h1 style={{ 
        fontSize: '1em',
        margin: 0,
        textDecoration: `none`, }}>

        <span>{siteTitle} -</span>
        <span style={{ fontWeight: 'lighter' }}> Full Stack Engineer</span>
      </h1>
    </div>
    <NavigationContext.Consumer>
    {(gotoNavigation: any) => (
    <nav style={{ 
      display: 'flex',
      fontSize: '1em'
       }}>
         {Object.values(NAVIGATION).map(section => (
          <div onClick={() => gotoNavigation(section)}>
            <h1 style={{ 
              fontSize: '1em',
              margin: 0,
              textDecoration: `none`,
              marginRight: '10px'
            }}
              >
              {section.charAt(0) + section.slice(1).toLowerCase()}
            </h1>
          </div>
         ))}
    </nav>)}
    </NavigationContext.Consumer>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
