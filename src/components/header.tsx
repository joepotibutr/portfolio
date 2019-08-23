import PropTypes from "prop-types"
import React from "react"

import { NAVIGATION } from "../constants";

import {NavigationContext} from '../pages/index'


const Header = ({ siteTitle }: any) => (
  <header
    style={{ display: 'flex' }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0,
            textDecoration: `none`, }}>

          {siteTitle}
      </h1>

      <h1>Full Stack Developer</h1>
      
    </div>
    <NavigationContext.Consumer>
    {(gotoNavigation: any) => (<nav style={{ display: 'flex'}}>
      <div onClick={() => gotoNavigation(NAVIGATION.ABOUT)}>
        <h3>About</h3>
      </div>

      <div onClick={() => gotoNavigation(NAVIGATION.EXPERIENCE)}>
        <h3>Experience</h3>
      </div>

      <div onClick={() => gotoNavigation(NAVIGATION.PROJECTS)}>
        <h3>Projects</h3>
      </div>

      <div onClick={() => gotoNavigation(NAVIGATION.SKILLS)}>
        <h3>Skills</h3>
      </div>
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
