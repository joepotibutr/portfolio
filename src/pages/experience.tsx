import React from 'react'
import { Section } from '../components'
const experiences = require('../data/experiences.json')

export default () => {
        return (
          <Section height={40}>
            <div>
              <h2>Experiences</h2>
              {experiences.map((exp: any) => (
              <div key={exp.title}>
                <title>{exp.title}</title>
                <h4>{exp.date}</h4>
                <b>{exp.company}</b>
                <p>{exp.description}</p>
              </div>))}
            </div>  
          </Section>
        )
}
