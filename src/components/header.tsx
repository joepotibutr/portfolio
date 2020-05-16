import React from "react"

import { NAVIGATION } from "../constants";
import { NavigationContext } from '../pages/index'
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
  max-width: 920px;

`

const HeaderOuterWrapper = styled.div`
  max-width: 920px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  
`

const NavigationLink = styled.h1`
  font-size: 1em;
  margin: 0;
  text-decoration: none;
  margin-right: 25px;
  transition: .3s;
  color:gray;

  &:hover {
    font-size: 1.1em;
    color: black;
  }
`

const Burger = styled.div<{ isOpen: boolean }>`
  .container {
    display: inline-block;
    cursor: pointer;
  }

  .bar1, .bar2, .bar3 {
    width: 35px;
    height: 5px;
    background-color: #333;
    margin: 6px 0;
    transition: 0.4s;
  }

  ${props => props.isOpen && `
    .bar1 {
      -webkit-transform: rotate(-45deg) translate(-9px, 6px);
      transform: rotate(-45deg) translate(-9px, 6px);
    }

    .bar2 {opacity: 0;}

    .bar3 {
      -webkit-transform: rotate(45deg) translate(-8px, -8px);
      transform: rotate(45deg) translate(-8px, -8px);
    }
  `}
  
`

const Navigation = ({ siteTitle }: any) => {
  return (
    <React.Fragment>
     
      <div className="brand">
      <h1 style={{ 
          fontSize: '1em',
          margin: 0,
          textDecoration: `none`, }}>

          <span>{siteTitle} -</span>
          <span style={{ fontWeight: 'lighter' }}> Full Stack Developer</span>
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
    </React.Fragment>
  )
}


const Header = ({ siteTitle }: any) => {
  const [isOpen,openNavbar] = React.useState(false)

  return (
      <HeaderStyled>
        <HeaderOuterWrapper className="header-wrapper">
          <Navigation siteTitle={siteTitle}/>
        </HeaderOuterWrapper>
        <Burger isOpen={isOpen} className="burger-menu">
          <div className="container" onClick={() => openNavbar(!isOpen)}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
          <Navigation siteTitle={siteTitle}/>
        </Burger>
    </HeaderStyled>
  )
}

export default Header
