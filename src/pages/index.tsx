import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const experiences = require('../data/experiences.json')
const skills = require('../data/skills.json')

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>


    <section>
      About me
      I am Idan Lottan - a web developer.
I have been a web developer for over 3 years and in that time I have gained a lot of knowledge and experience with JavaScript and its ecosystem - things like TypeScript, React, Node and many more.
Building state-of-the-art, easy to use, user-friendly websites and applications is truly a passion of mine.
In addition to my knowledge, I am actively learning and expanding my knowledge every day and staying up to date with trends and current standards in the industry
    </section>

    <section>
     <h2>Experiences</h2>
      {experiences.map((exp: any) => <div>
        <title>{exp.title}</title>
        <head>{exp.date}</head>
        <b>{exp.company}</b>
        <p>{exp.description}</p>
      </div>)}
     
    </section>


    <section>
      <h2>Skills</h2>
      <ul>{skills.map((skill: any) => <li>{skill}</li> )}</ul>
    </section>
  </Layout>
)

export default IndexPage
