import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import GlobalStyle from '../components/global-style'
import About from './about'
import { NAVIGATION } from "../constants";
import Projects from "./projects";
import Contact from "./contact";

const aboutRef: React.RefObject<HTMLDivElement> = React.createRef()
const projectsRef: React.RefObject<HTMLDivElement> = React.createRef()
const contactRef: React.RefObject<HTMLDivElement> = React.createRef()

const gotoNavigation = (destination: NAVIGATION) => {
  let destinationRef: React.RefObject<HTMLDivElement> | undefined

  switch(destination) {
    case NAVIGATION.ABOUT :
      destinationRef = aboutRef
      break
    case NAVIGATION.PROJECTS : 
      destinationRef = projectsRef
      break
    case NAVIGATION.CONTACT : 
      destinationRef = contactRef
      break
  }
  
  return destinationRef && destinationRef.current && window.scrollTo({
    top: destinationRef.current!.offsetTop - 100,
    behavior: 'smooth'
  })
}

export const NavigationContext = React.createContext(gotoNavigation)


const IndexPage = () => {

  return (
    <NavigationContext.Provider value={gotoNavigation} >
      <GlobalStyle />
      <Layout>
        <SEO title="Home" />
        
        <div ref={aboutRef}>
          <About  />
        </div>

        <div ref={projectsRef}>
          <Projects  />
        </div>

        <div ref={contactRef}>
          <Contact  />
        </div>
      </Layout>
    </NavigationContext.Provider>
   
  )
}

export default IndexPage
