import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import About from './about'
import Skills from './skills'
import Experience from './experience'
import { NAVIGATION } from "../constants";
import Projects from "./projects";


const aboutRef: React.RefObject<HTMLDivElement> = React.createRef()
const expRef: React.RefObject<HTMLDivElement> = React.createRef()
const projectsRef: React.RefObject<HTMLDivElement> = React.createRef()
const skillsRef : React.RefObject<HTMLDivElement>= React.createRef()

const gotoNavigation = (destination: NAVIGATION) => {
  let destinationRef: React.RefObject<HTMLDivElement> | undefined

  switch(destination) {
    case NAVIGATION.ABOUT :
      destinationRef = aboutRef
      break
    case NAVIGATION.SKILLS :
      destinationRef = skillsRef
      break
    case NAVIGATION.EXPERIENCE : 
      destinationRef = expRef
      break
    case NAVIGATION.PROJECTS : 
      destinationRef = projectsRef
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
      <Layout>
        <SEO title="Home" />
        <div ref={aboutRef}>
          <About  />
        </div>
        <div ref={expRef}>
          <Experience  />
        </div>
        <div ref={projectsRef}>
        <Projects  />
        </div>
        <div ref={skillsRef} > 
        <Skills />
        </div>
      </Layout>
    </NavigationContext.Provider>
   
  )
}

export default IndexPage
