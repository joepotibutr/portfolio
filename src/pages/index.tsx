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
  switch(destination) {
    case NAVIGATION.ABOUT :
      return aboutRef.current && window.scrollTo(0, aboutRef.current.offsetTop)
    case NAVIGATION.SKILLS :
      return skillsRef.current && window.scrollTo(0, skillsRef.current.offsetTop)
    case NAVIGATION.EXPERIENCE : 
      return expRef.current && window.scrollTo(0, expRef.current.offsetTop)
    case NAVIGATION.PROJECTS : 
      return projectsRef.current && window.scrollTo(0, projectsRef.current.offsetTop)
  }
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
