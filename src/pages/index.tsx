import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import About from './about'
import Skills from './skills'
import Experience from './experience'
import { NAVIGATION } from "../constants";
import Projects from "./projects";


const aboutRef: React.RefObject<About> = React.createRef()
const expRef: React.RefObject<Experience> = React.createRef()
const projectsRef: React.RefObject<Projects> = React.createRef()
const skillsRef : React.RefObject<Skills>= React.createRef()

const gotoNavigation = (destination: NAVIGATION) => {
  let ref: React.RefObject<any> | null = null
  switch(destination) {
    case NAVIGATION.ABOUT :
      alert('yey')
      ref = aboutRef
      break
    case NAVIGATION.SKILLS :
      ref = skillsRef
      break
    case NAVIGATION.EXPERIENCE : 
      ref = expRef
      break
    case NAVIGATION.PROJECTS : 
      ref = projectsRef
      break
  }

  return ref && ref.current && window.scrollTo(0, ref.current.offsetTop)
}

export const NavigationContext = React.createContext(gotoNavigation)




const IndexPage = () => {

  return (
    <NavigationContext.Provider value={gotoNavigation} >
      <Layout>
        <SEO title="Home" />
        <About ref={aboutRef} />
        <Experience ref={expRef} />
        <Projects ref={projectsRef} />
        <Skills ref={skillsRef} />
      </Layout>
    </NavigationContext.Provider>
   
  )
}

export default IndexPage
