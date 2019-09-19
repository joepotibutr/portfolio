import PropTypes from "prop-types"
import React from "react"

import { NAVIGATION } from "../constants";
import { SlideUp } from '../components'
import {NavigationContext} from '../pages/index'
import ReactResizeDetector from 'react-resize-detector'
import styled from 'styled-components'

const HeaderStyled = styled.header`
  top: 0;
  background: white;
  height: 80px;
  padding: 20px;
  display: flex;
  justify-content: center;
  width: 100%;
  z-index: 99;
  padding: 0px 20px 20px;
  margin: 0px auto;
  max-width: 720px;

  @media only screen and (max-width: 600px) {
    background: blue;
    height:100vh;
  }
`

const HeaderOuterWrapper = styled.div`
  max-width: 720;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  
`

const NavigationLink = styled.h1`
  font-size: 1em;
  margin: 0;
  text-decoration: none;
  margin-right: 10px;
  transition: .3s;
  &:hover {
    font-size: 1.1em;
    color: gray;
  }
`

const Burger = styled.div`

`


const Header = ({ siteTitle }: any) => (
  <SlideUp>
    <HeaderStyled>
      <ReactResizeDetector handleHeight handleWidth>
        {() => (
          <HeaderOuterWrapper>
            <Burger />
            <div className="brand">
            <h1 style={{ 
                fontSize: '1em',
                margin: 0,
                textDecoration: `none`, }}>
    
                <span>{siteTitle} -</span>
                <span style={{ fontWeight: 'lighter' }}> Full Stack Engineer</span>
              </h1>
            </div>
            <NavigationContext.Consumer>
            {(goto) => (
            <nav style={{ 
              display: 'flex',
              fontSize: '1em'
              }}>
                {Object.values(NAVIGATION).map(currentSection => (
                  <div key={currentSection} style={{ cursor: 'pointer' }} onClick={() => goto(currentSection)}>
                    <NavigationLink>
                      {currentSection.charAt(0) + currentSection.slice(1).toLowerCase()}
                    </NavigationLink>
                  </div>
                ))}
            </nav>)}
            </NavigationContext.Consumer>
        </HeaderOuterWrapper>
        )}
      </ReactResizeDetector>
    </HeaderStyled>
  </SlideUp>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
