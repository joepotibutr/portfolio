import React, { Component } from 'react'

const projects = require('../data/projects.json')

interface Props {
    
}
interface State {
    
}

export default class Projects extends Component<Props, State> {
    state = {}

    render() {
        return (
            <section style={{ height: '100vh', marginTop: '100px' }}>
                {projects.map((project: any) => (
                    <div>
                        {project.name}
                    </div>
                ))}
            </section>
        )
    }
}
