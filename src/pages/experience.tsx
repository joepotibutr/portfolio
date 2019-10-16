import React from 'react'
import { Section } from '../components'
const experienceList = require('../data/experience-list.json')

export default () => {
        return (
          <Section height={60}>
            <div>
              <h2>Experience</h2>
              {experienceList.map((exp: any) => (
              <div key={exp.title}>
                <title>{exp.title}</title>
                <h4>{exp.date}</h4>
                <b>{exp.company}</b>
                <p>{exp.description}</p>
                <hr/>
              </div>))}
            </div>  
          </Section>
        )
}
