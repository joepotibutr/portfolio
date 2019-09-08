import React, { Component } from 'react'
import { Section } from '../components'
const experiences = require('../data/experiences.json')


interface Props {
    
}
interface State {
    
}

export default class Experience extends Component<Props, State> {
    state = {}

    render() {
        return (
            <Section height={40}>
            <h2>Experiences</h2>
             {experiences.map((exp: any) => <div>
               <title>{exp.title}</title>
               <head>{exp.date}</head>
               <b>{exp.company}</b>
               <p>{exp.description}</p>
             </div>)}
            
           </Section>
        )
    }
}
